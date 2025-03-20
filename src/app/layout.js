import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Navbar imported here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ABC Blog",
  description: "A blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-500 min-h-screen`}>
        <Navbar /> {/* ✅ Navbar should be only here */}
        <main className="container mx-auto p-7">{children}</main>
      </body>
    </html>
  );
}
