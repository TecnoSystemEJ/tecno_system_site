import React from "react";
// Styles
import "./globals.css";
import { Inter, Righteous } from "next/font/google";

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
        <div className="m-0 container p-0">{children}</div>
      </body>
    </html>
  );
}
