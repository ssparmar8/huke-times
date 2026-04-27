import type { Metadata } from 'next';
import WatchCare from '../../src/views/WatchCare';

export const metadata: Metadata = {
  title: 'Watch Care Guide – Maintain Your Timepiece | Huke Times',
  description:
    'Expert tips on cleaning, storing and maintaining your wrist watch for long-lasting performance from Huke Times.',
  alternates: { canonical: 'https://www.huketimes.com/watch-care/' },
  openGraph: { url: 'https://www.huketimes.com/watch-care/' },
};

export default function WatchCarePage() {
  return <WatchCare />;
}
