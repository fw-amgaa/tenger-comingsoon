import type { Metadata } from "next";
import "./globals.css";
import { moisette, ttCommons } from "./fonts";

export const metadata: Metadata = {
  title: "Tenger Capital",
  description: "Create value through investing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${moisette.variable} ${ttCommons.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
