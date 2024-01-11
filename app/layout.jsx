import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AOSInit } from "./aos";
import logo from '../public/logollcctc.jpg'
import MyFooter from "@/components/Footer";
import MyNavbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        template: '%s | LLCCTC',
        default: 'LLCC Toastmaster Club',
    },
    description:
        "LLCC Toastmaster Club serves as a space for youth to develop speaking, presentation, teamwork,leadership skills, and English language proficiency.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-zinc-950 dark">
            <meta name="keywords" content="llcctc, english, tctalk" />
            <meta property="og:title" content="LLCC Toastmaster Club" />
            <meta
                property="og:description"
                content="LLCC Toastmaster Club serves as a space for youth to develop
                    speaking, presentation, teamwork,leadership skills, and
                    English language proficiency."
            />
            <meta property="og:image" content={logo} />
            <body className={inter.className}>
                <Providers>
                    <AOSInit />
                    <MyNavbar />
                    {children}
                    <MyFooter />
                </Providers>
            </body>
        </html>
    );
}
