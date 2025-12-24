import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import AmbientBackground from "@/components/AmbientBackground";

const inter = Inter({ subsets: ["latin"] });

import { LanguageProvider } from "@/context/LanguageContext";
import { getDictionary, getTheme, getContent } from "@/lib/content";
import ThemeRegistry from "@/components/ThemeRegistry";

export async function generateMetadata() {
    const general = await getContent('settings', 'general');
    return {
        title: general.meta_title || 'MSG FinVest Experts',
        description: general.meta_description || 'Institutional Consulting',
    };
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const en = await getDictionary('en');
    const ru = await getDictionary('ru');
    const theme = await getTheme();

    return (
        <html lang="en">
            <ThemeRegistry theme={theme} />
            <body className={inter.className}>
                <LanguageProvider dictionaries={{ en, ru }}>
                    <LoadingScreen />
                    <AmbientBackground />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
