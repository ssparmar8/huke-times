import type { Metadata } from 'next';
import RefundPolicy from '../../src/views/RefundPolicy';

const title = 'Refund & Return Policy | Huke Times';
const description =
  'Huke Times refund and return policy for wholesale watch purchases. Review terms before placing a bulk order.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/refunds/' },
  openGraph: {
    url: 'https://www.huketimes.com/refunds/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
