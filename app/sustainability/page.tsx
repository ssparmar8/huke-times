import type { Metadata } from 'next';
import Sustainability from '../../src/views/Sustainability';

export const metadata: Metadata = {
  title: 'Sustainability – Our Commitment to the Environment | Huke Times',
  description:
    'Huke Times is committed to responsible manufacturing and sustainable practices in watch production.',
  alternates: { canonical: 'https://www.huketimes.com/sustainability/' },
  openGraph: { url: 'https://www.huketimes.com/sustainability/' },
};

export default function SustainabilityPage() {
  return <Sustainability />;
}
