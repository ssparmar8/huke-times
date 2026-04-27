import type { Metadata } from 'next';
import WatchCare from '../../src/views/WatchCare';

const title = 'Watch Care Guide – Maintain Your Timepiece | Huke Times';
const description =
  'Expert tips on cleaning, storing and maintaining your wrist watch for long-lasting performance from Huke Times.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/watch-care/' },
  openGraph: {
    url: 'https://www.huketimes.com/watch-care/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function WatchCarePage() {
  return <WatchCare />;
}
