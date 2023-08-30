import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "noodle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen">
          <div className="h-[600px] w-1/4 -rotate-45 -z-1  absolute bg-gradient-to-r from-blue-500 to-red-500 blur-3xl opacity-40"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
