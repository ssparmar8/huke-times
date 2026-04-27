import type { Metadata } from 'next';
import Contact from '../../src/views/Contact';

export const metadata: Metadata = {
  title: 'Contact Us – Get a Bulk Order Quote | Huke Times',
  description:
    'Get in touch with Huke Times for bulk watch orders, pricing and trade enquiries. Based in Rajkot, Gujarat. Call +91 9574555399 or email huketimes@gmail.com.',
  alternates: { canonical: 'https://www.huketimes.com/contact/' },
  openGraph: { url: 'https://www.huketimes.com/contact/' },
};

export default function ContactPage() {
  return <Contact />;
}
