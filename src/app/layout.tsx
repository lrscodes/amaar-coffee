import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaar Coffee - Premium Coffee & Café Experience",
  description: "Experience the finest coffee at Amaar Coffee. Fresh roasted beans, artisanal drinks, and a cozy atmosphere. Visit us for the perfect coffee experience.",
  keywords: "coffee, café, espresso, latte, cappuccino, fresh roasted, artisanal coffee",
  openGraph: {
    title: "Amaar Coffee - Premium Coffee & Café Experience",
    description: "Experience the finest coffee at Amaar Coffee. Fresh roasted beans, artisanal drinks, and a cozy atmosphere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
