import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
    title: "GP Constellation",
    description: "Private Market Infrastructure",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${cinzel.variable} bg-obsidian text-white overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
