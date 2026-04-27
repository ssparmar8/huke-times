import type { Metadata } from 'next';
import Contact from '../../src/views/Contact';

const title = 'Contact Us – Get a Bulk Order Quote | Huke Times';
const description =
  'Get in touch with Huke Times for bulk watch orders, pricing and trade enquiries. Based in Rajkot, Gujarat. Call +91 9574555399 or email huketimes@gmail.com.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/contact/' },
  openGraph: {
    url: 'https://www.huketimes.com/contact/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <Contact />;
}
