import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { localBusinessSchema } from './lib/schema';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.airportcartaxi.co.uk'),
  title: {
    default: 'Airport Car Taxi | Reliable UK Airport Transfers | Fixed Prices',
    template: '%s | Airport Car Taxi',
  },
  description: 'Book reliable airport taxi transfers across the UK with fixed prices. Professional drivers, 24/7 service, and flight monitoring. Instant quotes for Heathrow, Gatwick, Manchester & more.',
  keywords: ['airport taxi UK', 'airport transfer UK', 'cheap airport taxi UK', 'airport taxi near me', 'Heathrow airport taxi', 'Gatwick airport taxi', 'Manchester airport taxi'],
  authors: [{ name: 'Airport Car Taxi' }],
  creator: 'Airport Car Taxi',
  publisher: 'Airport Car Taxi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Airport Car Taxi',
    title: 'Airport Car Taxi | Reliable UK Airport Transfers | Fixed Prices',
    description: 'Book reliable airport taxi transfers across the UK with fixed prices. Professional drivers, 24/7 service, and flight monitoring.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Airport Car Taxi - UK Airport Transfers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airport Car Taxi | Reliable UK Airport Transfers',
    description: 'Book reliable airport taxi transfers across the UK with fixed prices. Professional drivers, 24/7 service & flight monitoring.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://www.airportcartaxi.co.uk/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
