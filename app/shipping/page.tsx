import type { Metadata } from 'next';
import ShippingPolicy from '../../src/views/ShippingPolicy';

export const metadata: Metadata = {
  title: 'Shipping Policy | Huke Times',
  description:
    'Learn about our shipping methods, delivery timelines and logistics for bulk wrist watch orders across India.',
  alternates: { canonical: 'https://www.huketimes.com/shipping/' },
  openGraph: { url: 'https://www.huketimes.com/shipping/' },
};

export default function ShippingPolicyPage() {
  return <ShippingPolicy />;
}
