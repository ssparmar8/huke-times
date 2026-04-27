import type { Metadata } from 'next';
import Blog from '../../src/views/Blog';

const title = 'Blog – Watch Insights & Trade News | Huke Times';
const description =
  "Read the latest watch industry news, sourcing guides, and product updates from Huke Times – India's trusted wrist watch manufacturer.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.huketimes.com/blog/' },
  openGraph: {
    url: 'https://www.huketimes.com/blog/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return <Blog />;
}
