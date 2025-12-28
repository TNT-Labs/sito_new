import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio Biava - Consulenza Automobilistica",
  description: "Consulenza professionale per la circolazione dei mezzi di trasporto. Pratiche auto, CQC, autotrasporto merci e molto altro.",
  keywords: ["consulenza automobilistica", "CQC", "autotrasporto", "pratiche auto", "motorizzazione"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
