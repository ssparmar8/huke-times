import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faStar, faArrowRight, faCircleCheck, faChartLine, faAward, faUsers, faBagShopping, faQuoteLeft, faShield, faTruck, faPhone, faBolt, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { companyDescription } from '../data/company';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-black text-white relative overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1729078945904-c278d0a1bf0c?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center top'}}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-6">
              Manufacturer &amp; Supplier · Rajkot, Gujarat · Est. 2022
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight mb-8 uppercase">
              Crafting<br />
              <span className="text-white">Timeless</span><br />
              <span className="text-gray-400">Elegance.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              {companyDescription.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/products')}
                className="inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-8 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon icon={faBagShopping} />
                EXPLORE PRODUCTS
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-3 border border-white/30 text-white font-bold py-4 px-8 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} />
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="border-y border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20">
            {[
              { icon: faAward, label: 'ISO Certified' },
              { icon: faShield, label: 'Premium Quality' },
              { icon: faTruck, label: 'Pan India Delivery' },
              { icon: faUsers, label: '500+ B2B Clients' },
              { icon: faStar, label: '4.7★ Rated' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-gray-600">
                <FontAwesomeIcon icon={icon} size="lg" className="text-black flex-shrink-0" />
                <span className="text-xs font-bold tracking-wider uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SPLIT ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('/products')}
              className="group relative overflow-hidden bg-black aspect-[4/3] flex items-end p-8 text-left"
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1612305685034-dd20bea3706b?w=900&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-10" />
              <div className="relative z-20">
                <p className="text-xs text-gray-300 tracking-[0.2em] uppercase mb-2">Huke Times</p>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Men's<br />Collection</h3>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                  Explore Now <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </span>
              </div>
            </button>
            <button
              onClick={() => onNavigate('/products')}
              className="group relative overflow-hidden bg-[#1a1a1a] aspect-[4/3] flex items-end p-8 text-left"
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1643111998875-0debbdcf2361?w=900&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-10" />
              <div className="relative z-20">
                <p className="text-xs text-gray-300 tracking-[0.2em] uppercase mb-2">Huke Times</p>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Women's<br />Collection</h3>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                  Explore Now <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">FEATURED COLLECTION</p>
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
                Our Latest Products
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/products')}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
              View All <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5]">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white cursor-pointer overflow-hidden"
                onClick={() => onNavigate(`/product/${product.slug}`)}
              >
                {index === 0 && (
                  <div className="absolute top-3 left-3 z-20 bg-black text-white px-2.5 py-1 text-xs font-black tracking-widest">
                    BESTSELLER
                  </div>
                )}

                <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 py-2">
                      QUICK VIEW <FontAwesomeIcon icon={faArrowRight} size="xs" />
                    </button>
                  </div>
                </div>

                <div className="p-5 border-t border-[#e5e5e5]">
                  <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">HUKE TIMES</p>
                  <h3 className="font-bold text-sm text-black line-clamp-2 mb-3 min-h-[40px]">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-black text-black">
                      {product.price.currency}{product.price.min}
                      {product.price.max && <span className="text-sm text-gray-400 font-normal">–{product.price.currency}{product.price.max}</span>}
                    </p>
                    <span className="text-xs text-gray-500 font-medium">MOQ: {product.moq}</span>
                  </div>
                  <button className="mt-4 w-full bg-black text-white text-xs font-bold tracking-widest uppercase py-3 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    VIEW DETAILS <FontAwesomeIcon icon={faArrowRight} size="xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <button
              onClick={() => onNavigate('/products')}
              className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold tracking-widest uppercase py-4 px-10 hover:bg-gray-800 transition-colors"
            >
              VIEW ALL PRODUCTS <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">OUR STRENGTHS</p>
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">Why Choose Huke Times</h2>
            <div className="w-16 h-0.5 bg-black mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e5]">
            {[
              {
                icon: faIndustry,
                title: 'Who We Are',
                desc: 'Based in Rajkot, Gujarat — committed to the fine craft of watchmaking with dedication to quality and perfection.'
              },
              {
                icon: faBolt,
                title: 'Innovation in Every Tick',
                desc: 'Engineers and artisans creating timepieces that are both stylish and practical, combining age-old methods with cutting-edge innovation.'
              },
              {
                icon: faWandMagicSparkles,
                title: 'Commitment to Quality',
                desc: 'Every watch undergoes thorough testing and multiple quality inspections. Great care in every aspect — from material selection to final delivery.'
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-10 group hover:bg-black transition-colors duration-300">
                <div className="mb-6 w-12 h-12 bg-[#f5f5f5] group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <FontAwesomeIcon icon={icon} size="xl" className="text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-black text-black group-hover:text-white uppercase tracking-tight mb-4 transition-colors duration-300">{title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">{desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black group-hover:text-white border-b border-black group-hover:border-white pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-black text-white py-20 relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1705888532119-0c6a5092947a?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.88)'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">OUR JOURNEY</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">In Numbers</h2>
          </div>
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { icon: faChartLine, value: '2022', label: 'Year Established' },
              { icon: faUsers, value: '20–50', label: 'Skilled Employees' },
              { icon: faBagShopping, value: '5+', label: 'Product Categories' },
              { icon: faStar, value: '4.7★', label: 'Customer Rating' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="bg-black p-8 lg:p-10 text-center group hover:bg-white transition-colors duration-300">
                <FontAwesomeIcon icon={icon} size="xl" className="mx-auto mb-5 text-white group-hover:text-black transition-colors duration-300" />
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-black transition-colors duration-300">{value}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-600 transition-colors duration-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">CUSTOMER REVIEWS</p>
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">What Our Customers Say</h2>
            <div className="w-16 h-0.5 bg-black mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 border border-[#e5e5e5] hover:border-black hover:shadow-lg transition-all duration-300 group relative">
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-[#e5e5e5] group-hover:text-gray-200 absolute top-6 right-6 transition-colors duration-300" />
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} size="sm" className="text-black" />
                  ))}
                  <span className="ml-2 text-sm font-black text-black">{testimonial.rating}.0</span>
                </div>
                {testimonial.review && (
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm italic">"{testimonial.review}"</p>
                )}
                <div className="border-t border-[#e5e5e5] pt-5">
                  <p className="font-black text-black text-base">{testimonial.customerName}</p>
                  <p className="text-xs text-gray-500 mt-1 font-semibold uppercase tracking-wider">{testimonial.product}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('/testimonials')}
              className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold tracking-widest uppercase py-4 px-10 hover:bg-gray-800 transition-colors"
            >
              VIEW ALL REVIEWS <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </button>
          </div>
        </div>
      </section>

      {/* ── WORKMANSHIP ── */}
      <section className="bg-white border-t border-[#e5e5e5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">Our Craft</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase">HUKE'S WORKMANSHIP</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5]">
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase mb-4 tracking-wider">Who We Are</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{companyDescription.intro}</p>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase mb-4 tracking-wider">{companyDescription.innovation.title}</h3>
              <ul className="space-y-2">
                {companyDescription.innovation.points.slice(0, 4).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-black mt-1 flex-shrink-0">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase mb-4 tracking-wider">{companyDescription.quality.title}</h3>
              <ul className="space-y-2">
                {companyDescription.quality.points.slice(0, 4).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-black mt-1 flex-shrink-0">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-black text-white py-14 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">Stay Updated</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-2">Get Wholesale Pricing Updates</h2>
          <p className="text-gray-400 text-sm mb-8">Subscribe for new product launches, bulk offers, and trade updates.</p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white text-black placeholder-gray-400 text-sm focus:outline-none"
            />
            <button className="bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-3 border-l border-gray-200 hover:bg-gray-100 transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-[#e5e5e5] py-20 relative overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1729078946064-07a957def7af?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(255,255,255,0.92)'}} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">START YOUR JOURNEY</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight leading-tight mb-6">
            Ready to Experience<br />Excellence?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Contact us today for bulk orders and custom requirements. Trusted by 500+ businesses across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center gap-3 bg-black text-white font-bold py-4 px-10 text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
            >
                <FontAwesomeIcon icon={faPhone} />
              GET IN TOUCH
            </button>
            <button
              onClick={() => onNavigate('/products')}
              className="inline-flex items-center justify-center gap-3 border border-black text-black font-bold py-4 px-10 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
            >
                <FontAwesomeIcon icon={faBagShopping} />
              BROWSE PRODUCTS
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-10 border-t border-[#e5e5e5]">
            {[
              { icon: faCircleCheck, text: 'Premium Quality Assured' },
              { icon: faTruck, text: 'Pan India Delivery' },
              { icon: faAward, text: 'Bulk Order Discounts' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-500 text-sm">
                <FontAwesomeIcon icon={icon} size="1x" className="text-black" />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

