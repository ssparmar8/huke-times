import type { Metadata } from 'next';
import ShippingPolicy from '../../src/views/ShippingPolicy';

const title = 'Shipping Policy | Huke Times';
const description =
  'Learn about our shipping methods, delivery timelines and logistics for bulk wrist watch orders across India.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/shipping/' },
  openGraph: {
    url: 'https://www.huketimes.com/shipping/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function ShippingPolicyPage() {
  return <ShippingPolicy />;
}
