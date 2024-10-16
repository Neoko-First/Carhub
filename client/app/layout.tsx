import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, NavBar } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Carhub",
  description: "All your cars in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
