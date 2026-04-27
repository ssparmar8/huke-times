import type { Metadata } from 'next';
import Warranty from '../../src/views/Warranty';

const title = 'Warranty Policy | Huke Times';
const description =
  'Understand the warranty coverage offered by Huke Times LLP on all wrist watches and watch parts.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/warranty/' },
  openGraph: {
    url: 'https://www.huketimes.com/warranty/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function WarrantyPage() {
  return <Warranty />;
}
