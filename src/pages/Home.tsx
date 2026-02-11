import { Factory, Settings, Sparkles, Star } from 'lucide-react';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { companyDescription } from '../data/company';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1C1C1C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-white">Huke Times LLP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#B0B0B0]">
              {companyDescription.tagline}
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-[#B0B0B0]">
              {companyDescription.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/products')}
                className="bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 border-2 border-white"
              >
                View Products
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold py-3 px-8 rounded-lg transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <Factory size={48} className="text-[#1C1C1C]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Who We Are</h3>
              <p className="text-[#B0B0B0]">
                Based in Rajkot, Gujarat, we are committed to the fine craft of watchmaking with dedication to quality and perfection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <Settings size={48} className="text-[#1C1C1C]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Innovation in Every Tick</h3>
              <p className="text-[#B0B0B0]">
                Our team of talented engineers and artisans create timepieces that are both stylish and practical with cutting-edge innovation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <Sparkles size={48} className="text-[#1C1C1C]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Commitment to Quality</h3>
              <p className="text-[#B0B0B0]">
                Quality cannot be compromised. Every watch undergoes thorough testing and multiple quality inspections for perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1C1C1C]">
            Our Latest Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer border border-gray-100"
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
                  <h3 className="font-bold text-lg mb-2 text-[#1C1C1C]">{product.name}</h3>
                  <p className="text-[#1C1C1C] font-bold text-xl mb-2">
                    {product.price.currency}{product.price.min}
                    {product.price.max && ` - ${product.price.currency}${product.price.max}`}
                  </p>
                  <p className="text-[#B0B0B0] text-sm">MOQ: {product.moq} Pieces</p>
                  <button className="mt-4 w-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('/products')}
              className="bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-3 px-8 rounded-lg transition"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1C1C1C] mb-2">2022</div>
              <div className="text-[#B0B0B0]">Year Established</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1C1C1C] mb-2">20-50</div>
              <div className="text-[#B0B0B0]">Skilled Employees</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1C1C1C] mb-2">5+</div>
              <div className="text-[#B0B0B0]">Product Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1C1C1C] mb-2">4.7★</div>
              <div className="text-[#B0B0B0]">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1C1C1C]">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-[#1C1C1C]">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
                {testimonial.review && (
                  <p className="text-[#B0B0B0] mb-4 italic">"{testimonial.review}"</p>
                )}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-[#1C1C1C]">{testimonial.customerName}</p>
                  <p className="text-sm text-[#B0B0B0]">{testimonial.product}</p>
                  <p className="text-xs text-[#B0B0B0] mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('/testimonials')}
              className="bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-3 px-8 rounded-lg transition"
            >
              View All Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 text-[#B0B0B0]">
            Contact us today for bulk orders and custom requirements
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="bg-white hover:bg-gray-100 text-[#1C1C1C] font-bold py-4 px-10 rounded-lg transition transform hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
