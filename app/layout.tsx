import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";

import "../public/css/bootstrap-theme.min.css";
import "../public/css/bootstrap.css";
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";
import "../public/css/main.css";
import "../public/css/owl.carousel.min.css";
import "../public/css/owl.theme.default.min.css";
import "../public/css/style.css";

import Header from "../components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "apgtexoma",
  description: "apgtexoma",
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
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>

      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}