import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import MetaPixel from "@/components/analytics/MetaPixel";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiviqone.com"),
  title: "AIVIQONE – Smart CRM, WhatsApp & Business Automation",
  description:
    "AIVIQONE is an AI-powered CRM and business automation platform built to help businesses manage leads, customers, WhatsApp, sales and business communication in one powerful workspace.",
  icons: {
    icon: [
      { url: "/A_logo.png" },
      { url: "/favicon.ico" },
      { url: "/A_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/A_logo.png", sizes: "192x192", type: "image/png" },
      { url: "/A_logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/A_logo.png",
    apple: [
      { url: "/A_logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "AIVIQONE – Smart CRM, WhatsApp & Business Automation",
    description:
      "AIVIQONE is an AI-powered CRM and business automation platform built to help businesses manage leads, customers, WhatsApp, sales and business communication in one powerful workspace.",
    url: "https://aiviqone.com",
    siteName: "AIVIQONE",
    images: [
      {
        url: "/A_logo.png",
        width: 800,
        height: 600,
        alt: "AIVIQONE Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVIQONE – Smart CRM, WhatsApp & Business Automation",
    description:
      "AIVIQONE is an AI-powered CRM and business automation platform built to help businesses manage leads, customers, WhatsApp, sales and business communication in one powerful workspace.",
    images: ["/A_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}