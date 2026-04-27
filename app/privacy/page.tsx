import type { Metadata } from 'next';
import PrivacyPolicy from '../../src/views/PrivacyPolicy';

const title = 'Privacy Policy | Huke Times';
const description =
  'Read the privacy policy of Huke Times LLP to understand how we collect, use and protect your data.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/privacy/' },
  openGraph: {
    url: 'https://www.huketimes.com/privacy/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
