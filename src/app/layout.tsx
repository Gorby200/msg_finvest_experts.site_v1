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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LanguageProvider>
                    <LoadingScreen />
                    <AmbientBackground />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
