import type { Metadata } from 'next';
import PrivacyPolicy from '../../src/views/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Huke Times',
  description:
    'Read the privacy policy of Huke Times LLP to understand how we collect, use and protect your data.',
  alternates: { canonical: 'https://www.huketimes.com/privacy/' },
  openGraph: { url: 'https://www.huketimes.com/privacy/' },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
