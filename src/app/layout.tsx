import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassan's Portfolio",
  description:
    "portfolio had the information of hassan adawieh, software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio-logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
