import type { Metadata } from 'next';
import About from '../../src/views/About';

export const metadata: Metadata = {
  title: 'About Us – Huke Times LLP | Watch Manufacturer in Rajkot',
  description:
    'Learn about Huke Times LLP – a Rajkot-based manufacturer and supplier of premium wrist watches established in 2022. ISO quality, 500+ B2B clients, Pan India delivery.',
  alternates: { canonical: 'https://www.huketimes.com/about/' },
  openGraph: { url: 'https://www.huketimes.com/about/' },
};

export default function AboutPage() {
  return <About />;
}
