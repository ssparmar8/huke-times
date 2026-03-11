import { Factory, Settings, Sparkles, Star, ArrowRight, CheckCircle, TrendingUp, Award, Users, Globe, ShoppingBag, Quote, Shield, Truck, Phone, Clock, Zap, Target } from 'lucide-react';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { companyDescription } from '../data/company';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#0D1B2A] text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1a2d4a] to-[#0D1B2A]"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/40 text-[#6EE7B7] px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-2xl hover:bg-[#10B981]/20 transition-all duration-300 cursor-default">
              <Sparkles size={16} className="text-[#10B981]" />
              <span>Trusted by 500+ Businesses Across India</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-[#10B981]/30 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[#10B981]/10 hover:text-white hover:scale-105 transition-all duration-300">
                <Award size={16} className="text-[#10B981]" />
                ISO Certified
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-[#10B981]/30 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[#10B981]/10 hover:text-white hover:scale-105 transition-all duration-300">
                <Shield size={16} className="text-[#10B981]" />
                Premium Quality
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-[#10B981]/30 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[#10B981]/10 hover:text-white hover:scale-105 transition-all duration-300">
                <Truck size={16} className="text-[#10B981]" />
                Pan India Delivery
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white">Crafting Timeless</span>
              <span className="block text-[#10B981]">Elegance</span>
            </h1>

            <p className="text-xl md:text-3xl mb-4 text-white/90 font-bold tracking-wide">
              {companyDescription.tagline}
            </p>

            <p className="text-base md:text-xl max-w-3xl mx-auto mb-12 text-gray-400 leading-relaxed">
              {companyDescription.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => onNavigate('/products')}
                className="group inline-flex items-center justify-center gap-3 bg-[#10B981] hover:bg-[#059669] text-[#0D1B2A] font-bold py-4 px-9 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <ShoppingBag size={22} />
                <span className="text-lg">Explore Products</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="group inline-flex items-center justify-center gap-3 bg-white/5 border-2 border-white/30 text-white hover:bg-white hover:text-[#0D1B2A] font-bold py-4 px-9 rounded-xl transition-all duration-300 hover:shadow-2xl"
              >
                <Phone size={20} />
                <span className="text-lg">Contact Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default">
                <div className="bg-[#10B981] p-1.5 rounded-full">
                  <Star size={14} fill="#0D1B2A" className="text-[#0D1B2A]" />
                </div>
                <span className="text-white font-bold">4.7★ Rated</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default">
                <div className="bg-[#10B981] p-1.5 rounded-full">
                  <Users size={14} className="text-[#0D1B2A]" />
                </div>
                <span className="text-white font-bold">20-50 Experts</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default">
                <div className="bg-[#10B981] p-1.5 rounded-full">
                  <Clock size={14} className="text-[#0D1B2A]" />
                </div>
                <span className="text-white font-bold">Since 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F7F8FC] to-transparent"></div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#1B2A47] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Target size={16} className="text-[#10B981]" />
              <span>OUR STRENGTHS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#1B2A47] tracking-tight">
              Why Choose <span className="text-[#10B981]">Huke Times</span>
            </h2>
            <div className="w-24 h-1 bg-[#10B981] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three pillars of excellence that define our commitment to craftsmanship and quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="group relative bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl text-center border border-gray-100 hover:border-[#10B981] transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#10B981] rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-[#1B2A47] group-hover:bg-[#10B981] p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                      <Factory size={44} className="text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-[#1B2A47]">Who We Are</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-6">
                  Based in Rajkot, Gujarat, we are committed to the fine craft of watchmaking with dedication to quality and perfection.
                </p>
                <div className="inline-flex items-center gap-2 text-[#10B981] font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
            <div className="group relative bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl text-center border border-gray-100 hover:border-[#10B981] transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#10B981] rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-[#1B2A47] group-hover:bg-[#10B981] p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                      <Zap size={44} className="text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-[#1B2A47]">Innovation in Every Tick</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-6">
                  Our team of talented engineers and artisans create timepieces that are both stylish and practical with cutting-edge innovation.
                </p>
                <div className="inline-flex items-center gap-2 text-[#10B981] font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
            <div className="group relative bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl text-center border border-gray-100 hover:border-[#10B981] transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#10B981] rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-[#1B2A47] group-hover:bg-[#10B981] p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                      <Sparkles size={44} className="text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-[#1B2A47]">Commitment to Quality</h3>
                <p className="text-gray-600 leading-relaxed text-base mb-6">
                  Quality cannot be compromised. Every watch undergoes thorough testing and multiple quality inspections for perfection.
                </p>
                <div className="inline-flex items-center gap-2 text-[#10B981] font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#1B2A47] text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
              <Sparkles size={16} className="text-[#10B981]" />
              <span>FEATURED COLLECTION</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#1B2A47] tracking-tight">
              Our Latest <span className="text-[#10B981]">Products</span>
            </h2>
            <div className="w-24 h-1 bg-[#10B981] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our premium collection of timepieces crafted with precision and care
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[#10B981] hover:-translate-y-3"
                onClick={() => onNavigate(`/product/${product.slug}`)}
              >
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-20 bg-[#10B981] text-[#0D1B2A] px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                    BESTSELLER
                  </div>
                )}

                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-[#10B981] text-[#0D1B2A] font-bold py-2.5 rounded-lg hover:bg-[#059669] transition-colors duration-200 flex items-center justify-center gap-2 shadow-xl">
                      <span>Quick View</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-[#1B2A47] line-clamp-2 min-h-[56px]">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <p className="text-[#10B981] font-extrabold text-2xl">
                      {product.price.currency}{product.price.min}
                    </p>
                    {product.price.max && (
                      <span className="text-gray-500 text-sm font-medium">- {product.price.currency}{product.price.max}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-5 bg-[#F7F8FC] px-3 py-2 rounded-lg">
                    <CheckCircle size={16} className="text-[#1B2A47] flex-shrink-0" />
                    <span className="font-semibold">MOQ: {product.moq} Pieces</span>
                  </div>

                  <button className="w-full bg-[#1B2A47] hover:bg-[#10B981] hover:text-[#0D1B2A] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn">
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <button
              onClick={() => onNavigate('/products')}
              className="group inline-flex items-center gap-3 bg-[#1B2A47] hover:bg-[#10B981] hover:text-[#0D1B2A] text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <ShoppingBag size={20} />
              <span className="text-lg">View All Products</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Our Journey in <span className="text-[#10B981]">Numbers</span></h2>
            <div className="w-24 h-1 bg-[#10B981] mx-auto mb-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-400">Trusted by businesses across India</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group relative text-center p-8 lg:p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-[#10B981]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1B2A47] border border-[#10B981]/30 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#10B981] transition-all duration-500 shadow-xl">
                  <TrendingUp size={32} className="text-[#10B981] group-hover:text-[#0D1B2A] transition-colors duration-500" />
                </div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-[#10B981] transition-colors duration-300">2022</div>
                <div className="text-gray-400 font-bold text-sm lg:text-base">Year Established</div>
              </div>
            </div>
            <div className="group relative text-center p-8 lg:p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-[#10B981]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1B2A47] border border-[#10B981]/30 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#10B981] transition-all duration-500 shadow-xl">
                  <Users size={32} className="text-[#10B981] group-hover:text-[#0D1B2A] transition-colors duration-500" />
                </div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-[#10B981] transition-colors duration-300">20-50</div>
                <div className="text-gray-400 font-bold text-sm lg:text-base">Skilled Employees</div>
              </div>
            </div>
            <div className="group relative text-center p-8 lg:p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-[#10B981]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1B2A47] border border-[#10B981]/30 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#10B981] transition-all duration-500 shadow-xl">
                  <ShoppingBag size={32} className="text-[#10B981] group-hover:text-[#0D1B2A] transition-colors duration-500" />
                </div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-[#10B981] transition-colors duration-300">5+</div>
                <div className="text-gray-400 font-bold text-sm lg:text-base">Product Categories</div>
              </div>
            </div>
            <div className="group relative text-center p-8 lg:p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-[#10B981]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1B2A47] border border-[#10B981]/30 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#10B981] transition-all duration-500 shadow-xl">
                  <Star size={32} fill="currentColor" className="text-[#10B981] group-hover:text-[#0D1B2A] transition-colors duration-500" />
                </div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-[#10B981] transition-colors duration-300">4.7★</div>
                <div className="text-gray-400 font-bold text-sm lg:text-base">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-[#F7F8FC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#1B2A47] text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
              <Star size={16} fill="currentColor" className="text-[#10B981]" />
              <span>CUSTOMER REVIEWS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#1B2A47] tracking-tight">
              What Our <span className="text-[#10B981]">Customers</span> Say
            </h2>
            <div className="w-24 h-1 bg-[#10B981] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from satisfied clients who trust our quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="group relative bg-white border border-gray-100 p-8 lg:p-10 rounded-3xl shadow-md hover:shadow-2xl hover:border-[#10B981] transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>

                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Quote size={80} className="text-[#10B981]" fill="currentColor" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={20} fill="#10B981" className="text-[#10B981]" />
                    ))}
                    <span className="ml-2 text-base font-black text-[#1B2A47]">{testimonial.rating}.0</span>
                  </div>
                  {testimonial.review && (
                    <p className="text-gray-700 mb-6 leading-relaxed text-base font-medium italic">"{testimonial.review}"</p>
                  )}
                  <div className="border-t-2 border-gray-100 pt-5">
                    <p className="font-extrabold text-[#1B2A47] mb-2 text-lg">{testimonial.customerName}</p>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">{testimonial.product}</p>
                    <p className="text-xs text-gray-500 font-medium">{testimonial.date}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#10B981]/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <button
              onClick={() => onNavigate('/testimonials')}
              className="group inline-flex items-center gap-3 bg-[#1B2A47] hover:bg-[#10B981] hover:text-[#0D1B2A] text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Star size={20} fill="white" className="text-white" />
              <span className="text-lg">View All Testimonials</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 bg-[#0D1B2A] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/40 text-[#6EE7B7] px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-2xl hover:bg-[#10B981]/20 transition-all duration-300 cursor-default">
            <Award size={18} className="text-[#10B981]" />
            <span>START YOUR JOURNEY WITH US</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            <span className="block text-white">Ready to Experience</span>
            <span className="block text-[#10B981] mt-2">Excellence?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Contact us today for bulk orders and custom requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <button
              onClick={() => onNavigate('/contact')}
              className="group inline-flex items-center justify-center gap-3 bg-[#10B981] hover:bg-[#059669] text-[#0D1B2A] font-bold py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Phone size={22} />
              <span className="text-lg">Get in Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => onNavigate('/products')}
              className="group inline-flex items-center justify-center gap-3 bg-white/5 border-2 border-white/30 text-white hover:bg-white hover:text-[#0D1B2A] font-bold py-5 px-12 rounded-xl transition-all duration-300 shadow-2xl"
            >
              <ShoppingBag size={20} />
              <span className="text-lg">Browse Products</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 pt-12 border-t border-white/10">
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 cursor-default group">
              <div className="bg-[#10B981] p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={20} className="text-[#0D1B2A]" />
              </div>
              <span className="font-semibold">Premium Quality Assured</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 cursor-default group">
              <div className="bg-[#10B981] p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Truck size={20} className="text-[#0D1B2A]" />
              </div>
              <span className="font-semibold">Pan India Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 cursor-default group">
              <div className="bg-[#10B981] p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Award size={20} className="text-[#0D1B2A]" />
              </div>
              <span className="font-semibold">Bulk Order Discounts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

