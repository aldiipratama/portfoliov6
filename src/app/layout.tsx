import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/magic/smooth-cursor";
import Grid from "@/components/ui/animata/background/grid";

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
    <html lang="en" className="snap-mandatory snap-y scroll-smooth">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Grid>
          {children}
          <SmoothCursor />
        </Grid>
      </body>
    </html>
  );
}
