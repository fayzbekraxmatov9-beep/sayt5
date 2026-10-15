import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BYD Chazor DM-i — Oʻzbekistondagi Rasmiy Gibrid Sedan',
  description: 'BYD Chazor (Destroyer 05) super gibrid sedani. 100 km uchun 3.8 litr, 1245+ km masofa zaxirasi va ilgʻor Blade Battery texnologiyasi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}