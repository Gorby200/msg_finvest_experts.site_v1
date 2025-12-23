import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MagneticCursor from "@/components/MagneticCursor";
import LoadingScreen from "@/components/LoadingScreen";
import AmbientBackground from "@/components/AmbientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MSG FinVest Experts | Institutional Consulting",
    description: "Elite financial modeling, debt restructuring, and strategic investment analysis.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LoadingScreen />
                <AmbientBackground />
                <MagneticCursor />
                {children}
            </body>
        </html>
    );
}
