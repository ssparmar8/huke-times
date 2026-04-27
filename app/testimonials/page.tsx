import type { Metadata } from 'next';
import Testimonials from '../../src/views/Testimonials';

const title = 'Customer Reviews & Testimonials | Huke Times';
const description =
  'See what our customers say about Huke Times wrist watches. Real reviews from B2B buyers and retailers across India.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/testimonials/' },
  openGraph: {
    url: 'https://www.huketimes.com/testimonials/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
