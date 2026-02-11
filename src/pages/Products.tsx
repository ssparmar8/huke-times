import { useState } from 'react';
import { products } from '../data/products';

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
      <section className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-[#B0B0B0]">
            Premium Quality Wrist Watches & Components
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === 'all'
                  ? 'bg-[#1C1C1C] text-white'
                  : 'bg-white text-[#B0B0B0] hover:bg-gray-50 border border-gray-200'
              }`}
            >
              All Products ({products.length})
            </button>
            <button
              onClick={() => setSelectedCategory('mens-watches')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === 'mens-watches'
                  ? 'bg-[#1C1C1C] text-white'
                  : 'bg-white text-[#B0B0B0] hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Mens Wrist Watches ({products.filter(p => p.category === 'mens-watches').length})
            </button>
            <button
              onClick={() => setSelectedCategory('watch-parts')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === 'watch-parts'
                  ? 'bg-[#1C1C1C] text-white'
                  : 'bg-white text-[#B0B0B0] hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Watch Parts ({products.filter(p => p.category === 'watch-parts').length})
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer border border-gray-100"
                onClick={() => onNavigate(`/product/${product.slug}`)}
              >
                <div className="aspect-square bg-white">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#1C1C1C] font-semibold mb-2">
                    {product.category === 'mens-watches' ? 'Mens Wrist Watch' : 'Watch Parts'}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-[#1C1C1C]">{product.name}</h3>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-[#FAFAFA] text-[#B0B0B0] px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-[#1C1C1C] font-bold text-2xl">
                      {product.price.currency}{product.price.min}
                      {product.price.max && ` - ${product.price.currency}${product.price.max}`}
                    </p>
                    <p className="text-[#B0B0B0] text-sm">per piece</p>
                    <p className="text-[#B0B0B0] text-sm mt-1">MOQ: {product.moq} Pieces</p>
                  </div>

                  <button className="w-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-3 px-4 rounded-lg transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Bulk Orders?
          </h2>
          <p className="text-xl mb-8 text-[#B0B0B0]">
            Contact us for custom requirements and wholesale pricing
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="bg-white hover:bg-gray-100 text-[#1C1C1C] font-bold py-4 px-10 rounded-lg transition transform hover:scale-105"
          >
            Request Quote
          </button>
        </div>
      </section>
    </div>
  );
}
