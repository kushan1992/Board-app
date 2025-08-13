import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job board App",
  description: "Dashboard for Job board App",
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
        <div className="h-screen flex flex-col">
          <Header />
          <div className="flex bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-sm border-r border-gray-200 p-4">
              <Navbar />
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
