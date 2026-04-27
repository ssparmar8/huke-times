import type { Metadata } from 'next';
import Careers from '../../src/views/Careers';

const title = 'Careers – Join Our Team | Huke Times';
const description =
  'Explore career opportunities at Huke Times LLP in Rajkot, Gujarat. Join our growing team of watchmakers and professionals.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/careers/' },
  openGraph: {
    url: 'https://www.huketimes.com/careers/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function CareersPage() {
  return <Careers />;
}
