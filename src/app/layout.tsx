import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight:["200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "Enzo Prints",
  description: "A Printing Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#f3f3f3] ${poppins.className} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
