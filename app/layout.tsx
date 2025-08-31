import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "WhisperFeed",
  description: "A modern social platform for sharing thoughts and connecting with others.",
  keywords: ["social", "whisper", "feed", "connect", "share"],
  authors: [{ name: "WhisperFeed Team" }],
  creator: "WhisperFeed",
  publisher: "WhisperFeed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whisperfeed.app",
    title: "WhisperFeed",
    description: "A modern social platform for sharing thoughts and connecting with others.",
    siteName: "WhisperFeed",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhisperFeed",
    description: "A modern social platform for sharing thoughts and connecting with others.",
    creator: "@whisperfeed",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark transition-colors duration-200">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
