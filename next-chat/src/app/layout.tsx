import Menu from "@/components/Menu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Providers from "./Providers";

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
          <div className="h-[800px] w-1/4 -rotate-45 -z-1 rounded-3xl  absolute bg-gradient-to-r from-blue-500 to-red-500 blur-3xl opacity-40"></div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
