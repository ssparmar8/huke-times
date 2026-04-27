'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getProductBySlug, products } from '../data/products';
import { companyInfo } from '../data/company';
import { unsplashSrcSet } from '../utils';

export default function ProductDetail({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase mb-4 text-black">Product Not Found</h1>
          <Link
            href="/products"
            className="bg-black text-white font-black text-xs uppercase tracking-widest py-4 px-10 hover:bg-gray-800 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-[#888888]">
            <Link href="/" className="hover:text-[#333333]">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#333333]">
              Products
            </Link>
            <span>/</span>
            <span className="text-[#333333]">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image + Gallery */}
            <div>
              <div className="bg-white border border-[#e5e5e5] overflow-hidden">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  srcSet={unsplashSrcSet(product.images[activeImage])}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2 mt-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-20 h-20 border-2 overflow-hidden flex-shrink-0 transition-colors ${
                        activeImage === i ? 'border-black' : 'border-[#e5e5e5] hover:border-gray-400'
                      }`}
                    >
                      <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm text-[#333333] font-semibold mb-2">
                {product.category === 'mens-watches' ? 'Mens Wrist Watch' : 'Watch Parts'}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#333333]">{product.name}</h1>

              {/* Price & MOQ */}
              <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-8 mb-6">
                <div className="mb-4">
                  <div className="text-sm text-[#888888] mb-1">Price</div>
                  <div className="text-4xl font-bold text-[#333333]">
                    {product.price.currency}{product.price.min}
                    {product.price.max && ` - ${product.price.currency}${product.price.max}`}
                  </div>
                  <div className="text-[#888888]">per piece</div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-sm text-[#888888] mb-1">Minimum Order Quantity</div>
                  <div className="text-2xl font-bold text-[#333333]">{product.moq} Pieces</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold mb-4 text-[#333333]">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-[#333333] mr-2 flex-shrink-0" />
                      <span className="text-[#888888]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full bg-black hover:bg-gray-800 text-white font-black text-sm uppercase tracking-wider py-4 px-6 transition block text-center"
                >
                  Send Enquiry
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`I'm interested in ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-[#f5f5f5] border border-black text-black font-black text-sm uppercase tracking-wider py-4 px-6 transition text-center"
                >
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="block w-full bg-white hover:bg-[#f5f5f5] border border-[#e5e5e5] text-black font-bold py-4 px-6 transition text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-24">
            <h2 className="text-4xl font-extrabold mb-12 text-[#333333]">Product Specifications</h2>
            <div className="bg-white border border-[#e5e5e5] overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'}
                    >
                      <td className="px-6 py-4 font-semibold text-[#333333] border-r border-gray-100 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-[#888888]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-black uppercase text-black">More Products</h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
              View All <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5]">
            {relatedProducts.map(p => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="group bg-white cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    srcSet={unsplashSrcSet(p.images[0])}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">HUKE TIMES</p>
                  <h3 className="text-sm font-bold text-black mb-1 line-clamp-2">{p.name}</h3>
                  <p className="text-sm font-black text-black">
                    {p.price.currency}{p.price.min}
                    {p.price.max && <span className="text-gray-500 font-normal"> &ndash; {p.price.currency}{p.price.max}</span>}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
