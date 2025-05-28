import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { MusicPlayerProvider } from "@/contexts/MusicPlayerContext";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer/FloatingMusicPlayerSimple";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${luckiestGuy.variable}`}
        suppressHydrationWarning
      >
        <MusicPlayerProvider>
          {children}
          <Footer />
          <FloatingMusicPlayer />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
