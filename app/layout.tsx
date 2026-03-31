import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ContentCraft Infotech - Publishing & Representation Excellence',
  description: 'Leading publisher representation and publishing services company in Chennai, India. Connecting world-class publishers with academic institutions through strategic partnerships and comprehensive solutions.',
  keywords: 'publisher representation, academic publishing, conference proceedings, publishing services, Chennai, India, book production, institutional sales',
  openGraph: {
    title: 'ContentCraft Infotech - Publishing & Representation Excellence',
    description: 'Strategic publishing solutions for academic excellence. Trusted by institutions and publishers worldwide.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContentCraft Infotech - Publishing & Representation Excellence',
    description: 'Strategic publishing solutions for academic excellence.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
