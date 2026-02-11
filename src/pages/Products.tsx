import { useState } from 'react';
import { products } from '../data/products';
import { CheckCircle, ArrowRight, Star, Filter, ShoppingBag, Award } from 'lucide-react';

interface ProductsProps {
  onNavigate: (path: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mens-watches' | 'watch-parts'>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#333333] text-white py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <ShoppingBag size={16} />
              <span>PRODUCT CATALOG</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Premium Quality Wrist Watches & Components Crafted with Precision
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 backdrop-blur-xl bg-white/90 border-b border-gray-100 sticky top-[340px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter size={18} className="text-[#333333]" />
            <span className="text-sm font-semibold text-[#333333]">FILTER BY CATEGORY</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`group px-8 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 ${
                selectedCategory === 'all'
                  ? 'bg-[#333333] text-white shadow-lg'
                  : 'backdrop-blur-md bg-white/80 border-2 border-white/20 text-[#888888] hover:bg-white border-gray-200 hover:border-[#333333]'
              }`}
            >
              <span>All Products</span>
              <span className="ml-2 text-sm">({products.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('mens-watches')}
              className={`group px-8 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 ${
                selectedCategory === 'mens-watches'
                  ? 'bg-[#333333] text-white shadow-lg'
                  : 'backdrop-blur-md bg-white/80 border-2 border-white/20 text-[#888888] hover:bg-white border-gray-200 hover:border-[#333333]'
              }`}
            >
              <span>Mens Wrist Watches</span>
              <span className="ml-2 text-sm">({products.filter(p => p.category === 'mens-watches').length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('watch-parts')}
              className={`group px-8 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 ${
                selectedCategory === 'watch-parts'
                  ? 'bg-[#333333] text-white shadow-lg'
                  : 'backdrop-blur-md bg-white/80 border-2 border-white/20 text-[#888888] hover:bg-white border-gray-200 hover:border-[#333333]'
              }`}
            >
              <span>Watch Parts</span>
              <span className="ml-2 text-sm">({products.filter(p => p.category === 'watch-parts').length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#333333]">
                {selectedCategory === 'all' ? 'All Products' : 
                 selectedCategory === 'mens-watches' ? 'Mens Wrist Watches' : 'Watch Parts'}
              </h2>
              <p className="text-lg text-[#888888] mt-2">{filteredProducts.length} products found</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white border-2 border-gray-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer hover:border-[#333333]"
                onClick={() => onNavigate(`/product/${product.slug}`)}
              >
                {/* Product Badge */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-10 backdrop-blur-md bg-[#333333] border border-[#2C2C2C] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Award size={12} />
                    FEATURED
                  </div>
                )}
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-1 text-sm text-white backdrop-blur-md bg-[#333333] border border-[#2C2C2C] px-3 py-1 rounded-full font-semibold mb-3 shadow-lg">
                    {product.category === 'mens-watches' ? 'Mens Wrist Watch' : 'Watch Parts'}
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-[#333333] group-hover:text-black transition-colors line-clamp-2">{product.name}</h3>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="space-y-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-[#888888]">
                          <CheckCircle size={14} className="text-[#333333] flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-4 pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-[#333333]">
                        {product.price.currency}{product.price.min}
                      </span>
                      {product.price.max && (
                        <span className="text-[#888888]">- {product.price.currency}{product.price.max}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#888888]">
                      <span>MOQ: {product.moq} Pieces</span>
                    </div>
                  </div>
                  
                  <button className="group/btn w-full backdrop-blur-md bg-[#333333] hover:bg-[#444444] border border-[#2C2C2C] text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg">
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#333333] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Interested in Bulk Orders?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Contact us for custom requirements and wholesale pricing
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="backdrop-blur-md bg-white/90 hover:bg-white border border-white/20 text-[#333333] font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            <span>Request Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
