import type { Metadata } from 'next';
import Home from '../src/views/Home';

export const metadata: Metadata = {
  title: 'Huke Times – Premium Wrist Watch Manufacturer & Supplier | Rajkot, Gujarat',
  description:
    "Huke Times LLP is a leading manufacturer and supplier of premium men's wrist watches and watch parts in Rajkot, Gujarat, India. Bulk orders welcome. MOQ from 2000 pcs.",
  alternates: { canonical: 'https://www.huketimes.com/' },
  openGraph: { url: 'https://www.huketimes.com/' },
};

export default function HomePage() {
  return <Home />;
}
