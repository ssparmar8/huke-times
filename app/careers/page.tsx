import type { Metadata } from 'next';
import Careers from '../../src/views/Careers';

export const metadata: Metadata = {
  title: 'Careers – Join Our Team | Huke Times',
  description:
    'Explore career opportunities at Huke Times LLP in Rajkot, Gujarat. Join our growing team of watchmakers and professionals.',
  alternates: { canonical: 'https://www.huketimes.com/careers/' },
  openGraph: { url: 'https://www.huketimes.com/careers/' },
};

export default function CareersPage() {
  return <Careers />;
}
