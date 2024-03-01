import React from "react";
// Styles
import "./globals.css";
import { Inter, Righteous } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const righteous = Righteous({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${righteous.variable} text-black m-0 p-0 bg-gray-alt`}
    >
      <body>
        <NavBar />
        <div className="mx-auto container overflow-hidden px-4 uppercase w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
