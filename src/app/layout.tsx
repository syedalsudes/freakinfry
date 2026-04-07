import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

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
  title: {
    default: "Freakinfry | Karachi's Boldest Smashed Burgers & Fries",
    template: "%s | Freakinfry"
  },
  description: "Experience the ultimate flavor explosion at Freakinfry. Karachi's favorite spot for legendary smashed burgers, loaded fries, and crazy sides. Taste the madness!",
  keywords: ["Freakinfry", "Best Burgers in Karachi", "Smashed Burgers Karachi", "Fast Food Karachi", "Loaded Fries", "Freak Menu", "Burger Joint"],
  authors: [{ name: "Retnavia" }],
  
  icons: {
    icon: "/favicon.png", 
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Freakinfry | Karachi's Boldest Smashed Burgers",
    description: "Hungry for something crazy? Order Karachi's most loved smashed burgers and loaded fries from Freakinfry.",
    url: "https://freakinfry.vercel.app", 
    siteName: "Freakinfry",
    images: [
      {
        url: "/favicon.png", 
        width: 1200,
        height: 630,
        alt: "Freakinfry Smashed Burgers",
      },
    ],
    locale: "en_PK",
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
        <Footer />
      </body>
    </html>
  );
}