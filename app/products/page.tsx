import type { Metadata } from 'next';
import Products from '../../src/views/Products';

export const metadata: Metadata = {
  title: 'Products – Wrist Watches & Watch Parts | Huke Times',
  description:
    'Browse our full range of premium men\'s wrist watches and precision watch parts. Wholesale and bulk orders available from Huke Times, Rajkot.',
  alternates: { canonical: 'https://www.huketimes.com/products/' },
  openGraph: { url: 'https://www.huketimes.com/products/' },
};

export default function ProductsPage() {
  return <Products />;
}
