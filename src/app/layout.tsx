import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  WDXL_Lubrifont_TC,
  Instrument_Sans,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/site/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const wdxlLubrifont = WDXL_Lubrifont_TC({
  variable: "--font-wdxl",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sfFont = localFont({
  src: "../fonts/sfpro/SF.ttf",
  variable: "--font-sf",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const instrumentSerif = localFont({
  src: "../fonts/instrument/InstrumentSerif.ttf",
  variable: "--font-instrument",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Instrument Sans from Google Fonts
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Highlander Builders Initiative",
  description:
    "Where engineers and creatives at UCR collaborate on ambitious real-world projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wdxlLubrifont.variable} ${sfFont.variable} ${instrumentSerif.variable} ${instrumentSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
