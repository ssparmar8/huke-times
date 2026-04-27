import type { Metadata } from 'next';
import Warranty from '../../src/views/Warranty';

export const metadata: Metadata = {
  title: 'Warranty Policy | Huke Times',
  description:
    'Understand the warranty coverage offered by Huke Times LLP on all wrist watches and watch parts.',
  alternates: { canonical: 'https://www.huketimes.com/warranty/' },
  openGraph: { url: 'https://www.huketimes.com/warranty/' },
};

export default function WarrantyPage() {
  return <Warranty />;
}
