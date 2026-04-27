import type { Metadata } from 'next';
import FAQs from '../../src/views/FAQs';

export const metadata: Metadata = {
  title: 'FAQs – Frequently Asked Questions | Huke Times',
  description:
    'Answers to common questions about ordering, shipping, MOQ, customisation and more from Huke Times LLP.',
  alternates: { canonical: 'https://www.huketimes.com/faqs/' },
  openGraph: { url: 'https://www.huketimes.com/faqs/' },
};

export default function FAQsPage() {
  return <FAQs />;
}
