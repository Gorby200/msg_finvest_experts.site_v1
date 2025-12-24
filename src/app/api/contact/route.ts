import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getContent } from '@/lib/content';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, org, email, type, narrative, honeypot } = body;

        // Anti-bot check: Honeypot field must be empty
        if (honeypot) {
            console.warn('Bot detected via honeypot:', body);
            // Return success to fool the bot, but don't send email
            return NextResponse.json({ success: true, message: 'Received' });
        }

        if (!name || !email || !narrative) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Recipients list from settings
        const general = await getContent('settings', 'general');
        const recipients = general.contact_recipients || [
            's.gorbachev@gmail.com',
            's.gorbachev.uz@gmail.com',
            'maria.osmolovskaya@gmail.com'
        ];

        const mailOptions = {
            from: process.env.SMTP_FROM || '"MSG FinVest Bot" <no-reply@msgfinvest.com>',
            to: recipients.join(', '),
            subject: `New Mandate Inquiry: ${type} from ${name}`,
            text: `
                New Mandate Proposal
                --------------------
                Principal: ${name}
                Organization: ${org || 'N/A'}
                Email: ${email}
                Mandate Type: ${type}
                
                Narrative:
                ${narrative}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; color: #0A192F;">
                    <h2 style="color: #C5A059;">New Institutional Mandate Proposal</h2>
                    <p><strong>Principal:</strong> ${name}</p>
                    <p><strong>Organization:</strong> ${org || 'N/A'}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Type:</strong> ${type}</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    <h3>Narrative:</h3>
                    <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #C5A059;">${narrative}</p>
                </div>
            `,
        };

        // If no credentials, just log (Dev Mode Safety)
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log('---------------------------------------------------');
            console.log(' [MOCK EMAIL SEND] - SMTP Credentials Missing');
            console.log(' To:', recipients.join(', '));
            console.log(' Subject:', mailOptions.subject);
            console.log(' Body:', mailOptions.text);
            console.log('---------------------------------------------------');
            return NextResponse.json({ success: true, message: 'Simulated email sent (Check server logs)' });
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
