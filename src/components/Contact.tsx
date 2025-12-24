'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ShieldCheck, Loader2, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        org: '',
        email: '',
        type: 'Financial Modeling',
        narrative: '',
        honeypot: '' // Anti-bot field
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', org: '', email: '', type: 'Financial Modeling', narrative: '', honeypot: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-32 bg-white">
            <div className="max-width-container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-institutional-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">
                            {t('contact.tagline')}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-institutional-navy tracking-tight mb-8">
                            {t('contact.title_start')} <br />
                            <span className="text-gold-gradient">{t('contact.title_highlight')}</span>
                        </h2>
                        <p className="text-xl text-institutional-slate/80 mb-12 font-light leading-relaxed max-w-md">
                            {t('contact.description')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-institutional-gold">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{t('contact.info.email')}</span>
                                    <a href={`mailto:${t('contact.info.email_value')}`} className="text-lg font-semibold text-institutional-navy hover:text-institutional-gold transition-colors">{t('contact.info.email_value')}</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-institutional-gold">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{t('contact.info.phone')}</span>
                                    <span className="text-lg font-semibold text-institutional-navy">{t('contact.info.phone_value')}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-institutional-gold">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{t('contact.info.hq')}</span>
                                    <span className="text-lg font-semibold text-institutional-navy">{t('contact.info.hq_value')}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-institutional-gold">
                                    <Send className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{t('contact.info.ceo')}</span>
                                    <a href={`https://${t('contact.info.ceo_value')}`} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-institutional-navy hover:text-institutional-gold transition-colors">{t('contact.info.ceo_value')}</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-6 border border-gray-100 bg-gray-50 flex items-center gap-4 rounded-sm">
                            <ShieldCheck className="text-green-600 w-8 h-8" />
                            <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                                {t('contact.form.security')}
                            </p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-institutional-navy p-12 shadow-2xl rounded-sm text-white"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Hidden Honeypot Field */}
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                className="hidden"
                                autoComplete="off"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('contact.form.name')}</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="e.g. Alexander von Roth" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('contact.form.org')}</label>
                                    <input name="org" value={formData.org} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="Legal Entity Name" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('contact.form.email')}</label>
                                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="professional@domain.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('contact.form.type')}</label>
                                <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light appearance-none">
                                    {t('contact.form.types').map((type: string) => (
                                        <option key={type} className="bg-institutional-navy">{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('contact.form.narrative')}</label>
                                <textarea required name="narrative" value={formData.narrative} onChange={handleChange} rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="Describe the scope of the engagement..." />
                            </div>

                            <button disabled={status === 'submitting'} className="w-full bg-institutional-gold text-institutional-navy py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="animate-spin w-4 h-4" />
                                        {t('contact.form.messages.sending')}
                                    </>
                                ) : (
                                    t('contact.form.submit')
                                )}
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-xs text-center uppercase tracking-widest font-bold">
                                        {t('contact.form.messages.success')}
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-xs text-center uppercase tracking-widest font-bold">
                                        {t('contact.form.messages.error')}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
