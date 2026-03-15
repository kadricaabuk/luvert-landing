import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Background } from "./(components)/background";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luvert",
  description: "Luvert is a platform for creating and sharing your own AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${inter.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Background />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
