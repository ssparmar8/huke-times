import type { Metadata } from 'next';
import Sustainability from '../../src/views/Sustainability';

const title = 'Sustainability – Our Commitment to the Environment | Huke Times';
const description =
  'Huke Times is committed to responsible manufacturing and sustainable practices in watch production.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/sustainability/' },
  openGraph: {
    url: 'https://www.huketimes.com/sustainability/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function SustainabilityPage() {
  return <Sustainability />;
}
