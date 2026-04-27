import type { Metadata } from 'next';
import { getProductBySlug, products } from '../../../src/data/products';
import ProductDetail from '../../../src/views/ProductDetail';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: `${product.name} – Huke Times | Buy Wholesale`,
    description: `Buy ${product.name} in bulk from Huke Times LLP, Rajkot. Starting at ${product.price.currency}${product.price.min}. MOQ: ${product.moq} pcs. Premium quality, Pan India delivery.`,
    alternates: { canonical: `https://www.huketimes.com/product/${slug}/` },
    openGraph: { url: `https://www.huketimes.com/product/${slug}/` },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetail slug={slug} />;
}
