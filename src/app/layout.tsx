import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import AmbientBackground from "@/components/AmbientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MSG FinVest Experts | Institutional Consulting",
    description: "Elite financial modeling, debt restructuring, and strategic investment analysis.",
    // Icons are automatically handled by src/app/icon.tsx
};

import { LanguageProvider } from "@/context/LanguageContext";

// ... imports

import { getDictionary, getTheme } from "@/lib/content";
import ThemeRegistry from "@/components/ThemeRegistry";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
