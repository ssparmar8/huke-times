import { useState } from 'react';
import { products } from '../data/products';
import { watchImages } from '../data/watchImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { unsplashSrcSet } from '../utils';

interface ProductsProps {
  onNavigate: (path: string) => void;
}

const PRODUCTS_PER_PAGE = 12;

export default function Products({ onNavigate }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mens-watches' | 'watch-parts'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // "All Products" uses watchImages from JSON; category filters use catalog
  const isAll = selectedCategory === 'all';
  const filteredProducts = products.filter(p => p.category === selectedCategory);

  const totalItems = isAll ? watchImages.length : filteredProducts.length;
  const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);

  const pagedItems = isAll
    ? watchImages.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE)
    : filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  const handleCategoryChange = (cat: typeof selectedCategory) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const categories = [
    { key: 'all', label: 'All Products', count: watchImages.length },
    { key: 'mens-watches', label: 'Mens Wrist Watches', count: products.filter(p => p.category === 'mens-watches').length },
    { key: 'watch-parts', label: 'Watch Parts', count: products.filter(p => p.category === 'watch-parts').length },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span>Products</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Our Products</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Premium Quality Wrist Watches &amp; Components
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-[#e5e5e5] sticky top-0 z-40">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key as typeof selectedCategory)}
                className={`flex-shrink-0 px-6 py-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                  selectedCategory === cat.key
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products / Gallery Grid */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-wider">{totalItems} products</p>
            {totalPages > 1 && (
              <p className="text-xs text-gray-400 uppercase tracking-wider">Page {currentPage} of {totalPages}</p>
            )}
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5]">
            {isAll
              ? (pagedItems as typeof watchImages).map(img => (
                <div key={img.id} className="group bg-white cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                    <img
                      src={img.url}
                      alt={img.alt}
                      srcSet={unsplashSrcSet(img.url)}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white px-5 py-2">
                        VIEW
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">HUKE TIMES</p>
                    <p className="text-sm font-bold text-black line-clamp-2 capitalize">{img.alt}</p>
                  </div>
                </div>
              ))
              : (pagedItems as typeof products).map(product => (
                <div
                  key={product.id}
                  className="group bg-white cursor-pointer"
                  onClick={() => onNavigate(`/product/${product.slug}`)}
                >
                  <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      srcSet={unsplashSrcSet(product.images[0])}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white px-5 py-2">
                        QUICK VIEW
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">HUKE TIMES</p>
                    <h3 className="text-sm font-bold text-black mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm font-bold text-black">
                      {product.price.currency}{product.price.min}
                      {product.price.max && <span className="text-gray-500 font-normal"> &ndash; {product.price.currency}{product.price.max}</span>}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">MOQ: {product.moq} pcs</p>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] bg-white text-black disabled:opacity-30 hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                <FontAwesomeIcon icon={faChevronLeft} size="xs" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                .reduce<(number | 'ellipsis')[]>((acc, p, idx, arr) => {
                  if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push('ellipsis');
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, idx) =>
                  p === 'ellipsis' ? (
                    <span key={`e-${idx}`} className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">…</span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p as number)}
                      className={`w-10 h-10 flex items-center justify-center text-xs font-bold border transition-colors ${
                        currentPage === p
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-[#e5e5e5] hover:bg-black hover:text-white hover:border-black'
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] bg-white text-black disabled:opacity-30 hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-black text-white py-16">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Interested in Bulk Orders?
          </h2>
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-wider">
            Contact us for custom requirements and wholesale pricing
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            <span>Request a Quote</span>
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </button>
        </div>
      </section>
    </div>
  );
}
