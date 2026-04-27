import type { Metadata } from 'next';
import Testimonials from '../../src/views/Testimonials';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Huke Times',
  description:
    'See what our customers say about Huke Times wrist watches. Real reviews from B2B buyers and retailers across India.',
  alternates: { canonical: 'https://www.huketimes.com/testimonials/' },
  openGraph: { url: 'https://www.huketimes.com/testimonials/' },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
