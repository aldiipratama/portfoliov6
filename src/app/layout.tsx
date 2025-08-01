import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  display: 'swap',
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: "Aldipratama | Portfolio",
  description: "This is my portfolio {Dyy}",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased bg-[url(/images/bg.png)] bg-background`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
