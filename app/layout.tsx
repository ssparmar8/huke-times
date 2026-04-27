import type { Metadata } from 'next';
import '../app/globals.css';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.huketimes.com'),
  title: {
    default: 'Huke Times – Watch Manufacturer & Supplier, Rajkot',
    template: '%s | Huke Times',
  },
  description:
    "Huke Times LLP – wholesale wrist watch manufacturer and OEM supplier in Rajkot, Gujarat. Premium men's analog watches, cases & parts. MOQ 2000 pcs, Pan India delivery.",
  openGraph: {
    siteName: 'Huke Times',
    type: 'website',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Huke Times Watch Manufacturer' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  alternates: {
    languages: { 'en-IN': 'https://www.huketimes.com/' },
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Huke Times LLP',
  url: 'https://www.huketimes.com',
  logo: 'https://www.huketimes.com/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9574555399',
    contactType: 'sales',
    areaServed: 'IN',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Patel Nagar, St No.7 80 Ft Road',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    postalCode: '360002',
    addressCountry: 'IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
