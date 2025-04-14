import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Luckiest_Guy } from "next/font/google"; 
import "./globals.css";
import { Header } from "@/components/Header/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({ 
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "BANDY",
  description: "A music band website",
  icons: {
    icon: "/assets/icons/logo.png", 
  }
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${luckiestGuy.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

