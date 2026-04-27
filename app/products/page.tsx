import type { Metadata } from 'next';
import Products from '../../src/views/Products';

const title = 'Products – Wrist Watches & Watch Parts | Huke Times';
const description =
  "Browse our full range of premium men's wrist watches and precision watch parts. Wholesale and bulk orders available from Huke Times, Rajkot.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/products/' },
  openGraph: {
    url: 'https://www.huketimes.com/products/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function ProductsPage() {
  return <Products />;
}
