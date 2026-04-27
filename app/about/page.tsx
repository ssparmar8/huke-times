import type { Metadata } from 'next';
import About from '../../src/views/About';

const title = 'About Huke Times – Watch Maker in Rajkot, Gujarat';
const description =
  'Learn about Huke Times LLP – a Rajkot-based manufacturer and supplier of premium wrist watches established in 2022. ISO quality, 500+ B2B clients, Pan India delivery.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/about/' },
  openGraph: {
    url: 'https://www.huketimes.com/about/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <About />;
}
