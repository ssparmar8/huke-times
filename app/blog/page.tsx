import type { Metadata } from 'next';
import Blog from '../../src/views/Blog';

export const metadata: Metadata = {
  title: 'Blog – Watch Insights & Trade News | Huke Times',
  description:
    "Read the latest watch industry news, sourcing guides, and product updates from Huke Times – India's trusted wrist watch manufacturer.",
  alternates: { canonical: 'https://www.huketimes.com/blog/' },
  openGraph: { url: 'https://www.huketimes.com/blog/' },
};

export default function BlogPage() {
  return <Blog />;
}
