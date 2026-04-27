import type { Metadata } from 'next';
import Home from '../src/views/Home';

const title = 'Huke Times – Watch Manufacturer & Supplier, Rajkot';
const description =
  "Huke Times LLP – wholesale wrist watch manufacturer and OEM supplier in Rajkot, Gujarat. Premium men's analog watches, cases & parts. MOQ 2000 pcs, Pan India delivery.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/' },
  openGraph: {
    url: 'https://www.huketimes.com/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return <Home />;
}
