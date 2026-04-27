import type { Metadata } from 'next';
import '../app/globals.css';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.huketimes.com'),
  title: {
    default: 'Huke Times – Premium Wrist Watch Manufacturer & Supplier | Rajkot, Gujarat',
    template: '%s | Huke Times',
  },
  description:
    "Huke Times LLP is a leading manufacturer and supplier of premium men's wrist watches and watch parts in Rajkot, Gujarat, India. Bulk orders welcome. MOQ from 2000 pcs.",
  openGraph: {
    siteName: 'Huke Times',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
      </body>
    </html>
  );
}
