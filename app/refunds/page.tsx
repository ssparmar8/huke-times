import type { Metadata } from 'next';
import RefundPolicy from '../../src/views/RefundPolicy';

export const metadata: Metadata = {
  title: 'Refund & Return Policy | Huke Times',
  description:
    'Huke Times refund and return policy for wholesale watch purchases. Review terms before placing a bulk order.',
  alternates: { canonical: 'https://www.huketimes.com/refunds/' },
  openGraph: { url: 'https://www.huketimes.com/refunds/' },
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
