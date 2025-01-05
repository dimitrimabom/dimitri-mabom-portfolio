import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <body className="h-full bg-background">
        {children}
      </body>
    </html>
  );
}
