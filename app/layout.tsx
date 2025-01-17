import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata: Metadata = {
  title: "Dimitri Mabom",
  description: "Front-End Developper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={roboto.className}>
      <body className="h-full bg-background">
        {children}
      </body>
    </html>
  );
}
