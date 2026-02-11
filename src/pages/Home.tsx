import { Factory, Settings, Sparkles, Star, ArrowRight, CheckCircle, TrendingUp, Award, Users, Globe, ShoppingBag, Quote } from 'lucide-react';
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
      <section className="relative bg-[#1C1C1C] text-white py-24 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Award size={16} className="text-white" />
                ISO Certified
              </span>
              <span className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <CheckCircle size={16} className="text-white" />
                Premium Quality
              </span>
              <span className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Globe size={16} className="text-white" />
                Pan India Delivery
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting <span className="text-white">Timeless</span>
              <br className="hidden md:block" />
              <span className="text-white">Elegance</span>
            </h1>
            
            <p className="text-xl md:text-3xl mb-4 text-white font-semibold">
              {companyDescription.tagline}
            </p>
            
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 text-[#B0B0B0] leading-relaxed">
              {companyDescription.intro}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => onNavigate('/products')}
                className="group inline-flex items-center justify-center gap-2 backdrop-blur-md bg-white/90 hover:bg-gray-100 border border-white/20 text-[#1C1C1C] font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                <ShoppingBag size={20} />
                <span>Explore Products</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="group inline-flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold py-4 px-8 rounded-lg transition"
              >
                <span>Contact Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full">
                <CheckCircle size={16} className="text-white" />
                <span className="text-[#B0B0B0]">4.7★ Rated</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full">
                <Users size={16} className="text-white" />
                <span className="text-[#B0B0B0]">20-50 Experts</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full">
                <TrendingUp size={16} className="text-white" />
                <span className="text-[#B0B0B0]">Since 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1C1C1C]">Why Choose Us</h2>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              Three pillars of excellence that define our commitment to craftsmanship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl text-center border border-gray-100 hover:border-[#1C1C1C] transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1C1C1C] p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Factory size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Who We Are</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Based in Rajkot, Gujarat, we are committed to the fine craft of watchmaking with dedication to quality and perfection.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[#1C1C1C] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl text-center border border-gray-100 hover:border-[#1C1C1C] transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1C1C1C] p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Settings size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Innovation in Every Tick</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Our team of talented engineers and artisans create timepieces that are both stylish and practical with cutting-edge innovation.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[#1C1C1C] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl text-center border border-gray-100 hover:border-[#1C1C1C] transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1C1C1C] p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">Commitment to Quality</h3>
              <p className="text-[#B0B0B0] leading-relaxed">
                Quality cannot be compromised. Every watch undergoes thorough testing and multiple quality inspections for perfection.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[#1C1C1C] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-[#1C1C1C] border border-[#2C2C2C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <Sparkles size={14} />
              <span>FEATURED COLLECTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1C1C1C]">
              Our Latest Products
            </h2>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              Discover our premium collection of timepieces crafted with precision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.id}
                className="group backdrop-blur-lg bg-white/80 border border-white/20 rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:border-[#1C1C1C]/30 hover:-translate-y-2"
                onClick={() => onNavigate(`/product/${product.slug}`)}
              >
                {/* Product Badge */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-10 backdrop-blur-md bg-[#1C1C1C] border border-[#2C2C2C] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    BESTSELLER
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
                  <h3 className="font-bold text-lg mb-3 text-[#1C1C1C] group-hover:text-[#2C2C2C] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <p className="text-[#1C1C1C] font-bold text-2xl">
                      {product.price.currency}{product.price.min}
                    </p>
                    {product.price.max && (
                      <span className="text-[#B0B0B0] text-sm">- {product.price.currency}{product.price.max}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#B0B0B0] text-sm mb-4">
                    <CheckCircle size={14} className="text-[#1C1C1C]" />
                    <span>MOQ: {product.moq} Pieces</span>
                  </div>
                  <button className="group/btn w-full backdrop-blur-md bg-[#1C1C1C] border border-[#2C2C2C] hover:bg-[#2C2C2C] text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg">
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('/products')}
              className="group inline-flex items-center gap-2 backdrop-blur-md bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <span>View All Products</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1C1C]">Our Journey in Numbers</h2>
            <p className="text-lg text-[#B0B0B0]">Trusted by businesses across India</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#1C1C1C] transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1C1C1C] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">2022</div>
              <div className="text-[#B0B0B0] font-medium">Year Established</div>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#1C1C1C] transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1C1C1C] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Users size={28} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">20-50</div>
              <div className="text-[#B0B0B0] font-medium">Skilled Employees</div>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#1C1C1C] transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1C1C1C] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag size={28} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">5+</div>
              <div className="text-[#B0B0B0] font-medium">Product Categories</div>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#1C1C1C] transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1C1C1C] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Star size={28} className="text-white" fill="white" />
              </div>
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">4.7★</div>
              <div className="text-[#B0B0B0] font-medium">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-[#1C1C1C] border border-[#2C2C2C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              <Star size={14} fill="white" />
              <span>CUSTOMER REVIEWS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1C1C1C]">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              Real experiences from satisfied clients who trust our quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="group relative backdrop-blur-lg bg-white/80 border border-white/20 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#1C1C1C]/30 transition-all duration-300 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-[#1C1C1C]" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="#1C1C1C" className="text-[#1C1C1C]" />
                    ))}
                    <span className="ml-2 text-sm font-bold text-[#1C1C1C]">{testimonial.rating}.0</span>
                  </div>
                  {testimonial.review && (
                    <p className="text-[#B0B0B0] mb-6 leading-relaxed">"{testimonial.review}"</p>
                  )}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-[#1C1C1C] mb-1">{testimonial.customerName}</p>
                    <p className="text-sm text-[#B0B0B0] mb-1">{testimonial.product}</p>
                    <p className="text-xs text-[#B0B0B0]">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('/testimonials')}
              className="group inline-flex items-center gap-2 backdrop-blur-md bg-white/90 hover:bg-[#1C1C1C] border-2 border-white/20 text-[#1C1C1C] hover:text-white border-[#1C1C1C] font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <span>View All Testimonials</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#1C1C1C] text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Award size={16} />
            <span>START YOUR JOURNEY WITH US</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Experience
            <br />
            <span className="text-white">Excellence?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-[#B0B0B0] max-w-3xl mx-auto">
            Contact us today for bulk orders and custom requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('/contact')}
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1C1C1C] font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-xl"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('/products')}
              className="group inline-flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold py-4 px-10 rounded-lg transition"
            >
              <ShoppingBag size={18} />
              <span>Browse Products</span>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center gap-2 text-[#B0B0B0]">
              <CheckCircle size={20} className="text-white" />
              <span>Premium Quality Assured</span>
            </div>
            <div className="flex items-center gap-2 text-[#B0B0B0]">
              <CheckCircle size={20} className="text-white" />
              <span>Pan India Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-[#B0B0B0]">
              <CheckCircle size={20} className="text-white" />
              <span>Bulk Order Discounts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
