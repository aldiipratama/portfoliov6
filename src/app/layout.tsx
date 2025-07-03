import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
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
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
