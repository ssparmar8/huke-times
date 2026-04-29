import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faStar, faArrowRight, faCircleCheck, faChartLine, faAward, faUsers, faBagShopping, faQuoteLeft, faShield, faTruck, faPhone, faBolt, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { companyDescription } from '../data/company';
import PickPerfectDial from '../components/PickPerfectDial';
import HeroSlider from '../components/HeroSlider';


export default function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-black text-white min-h-[80vh] flex">

        {/* Left – Text (constrained) */}
        <div className="flex flex-col justify-center py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-6">
            Manufacturer &amp; Supplier · Rajkot, Gujarat · Est. 2022
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.0] tracking-tight mb-8 uppercase">
            Crafting<br />
            <span className="text-white">Timeless</span><br />
            <span className="text-gray-400">Elegance.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            {companyDescription.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-8 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors">
              <FontAwesomeIcon icon={faBagShopping} />
              EXPLORE PRODUCTS
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-white/30 text-white font-bold py-4 px-8 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
              <FontAwesomeIcon icon={faPhone} />
              GET A QUOTE
            </Link>
          </div>
        </div>

        {/* Right – Slider (fills remaining screen width) */}
        <div className="hidden lg:block relative flex-1">
          <HeroSlider />
        </div>

      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center divide-x divide-white/10">
            {[
              { icon: faAward, label: 'ISO Certified' },
              { icon: faShield, label: 'Premium Quality' },
              { icon: faTruck, label: 'Pan India Delivery' },
              { icon: faUsers, label: '500+ B2B Clients' },
              { icon: faStar, label: '4.7★ Rated' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-gray-400 px-6 lg:px-10 py-4">
                <FontAwesomeIcon icon={icon} size="sm" className="text-white/60 flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SPLIT ── */}
      <section className="bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/products"
              className="group relative overflow-hidden bg-black aspect-[4/3] flex items-end p-8 text-left"
              style={{backgroundImage: "url('/watch-images/watch-17.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-10" />
              <div className="relative z-20">
                <p className="text-xs text-gray-300 tracking-[0.2em] uppercase mb-2">Huke Times</p>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Men's<br />Collection</h3>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                  Explore Now <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </span>
              </div>
            </Link>
            <Link
              href="/products"
              className="group relative overflow-hidden bg-[#1a1a1a] aspect-[4/3] flex items-end p-8 text-left"
              style={{backgroundImage: "url('/watch-images/watch-16.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-10" />
              <div className="relative z-20">
                <p className="text-xs text-gray-300 tracking-[0.2em] uppercase mb-2">Huke Times</p>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Watch<br />Parts</h3>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                  Explore Now <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PICK PERFECT DIAL ── */}
      <PickPerfectDial />

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">FEATURED COLLECTION</p>
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
                Our Latest Products
              </h2>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-gray-400 hover:border-gray-400 transition-colors">View All <FontAwesomeIcon icon={faArrowRight} size="xs" /></Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5]">
            {products.slice(0, 4).map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white cursor-pointer overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                  {index === 0 && (
                    <div className="absolute top-3 left-3 z-20 bg-black text-white px-2.5 py-1 text-[10px] font-black tracking-widest">
                      BESTSELLER
                    </div>
                  )}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-[#0a0a0a] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-full text-white text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 py-1.5">
                      VIEW DETAILS <FontAwesomeIcon icon={faArrowRight} size="xs" />
                    </div>
                  </div>
                </div>

                <div className="p-5 border-t border-[#e5e5e5] flex-1 flex flex-col">
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1.5">HUKE TIMES</p>
                  <h3 className="font-bold text-sm text-black line-clamp-2 flex-1">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 bg-black text-white text-[11px] font-bold tracking-widest uppercase py-4 px-10 hover:bg-gray-800 transition-colors">VIEW ALL PRODUCTS <FontAwesomeIcon icon={faArrowRight} size="xs" /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">OUR STRENGTHS</p>
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">Why Choose Huke Times</h2>
            <div className="w-12 h-[2px] bg-black mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e5]">
            {[
              {
                num: '01',
                icon: faIndustry,
                title: 'Who We Are',
                desc: 'Based in Rajkot, Gujarat — committed to the fine craft of watchmaking with dedication to quality and perfection.'
              },
              {
                num: '02',
                icon: faBolt,
                title: 'Innovation in Every Tick',
                desc: 'Engineers and artisans creating timepieces that are both stylish and practical, combining age-old methods with cutting-edge innovation.'
              },
              {
                num: '03',
                icon: faWandMagicSparkles,
                title: 'Commitment to Quality',
                desc: 'Every watch undergoes thorough testing and multiple quality inspections. Great care in every aspect — from material selection to final delivery.'
              },
            ].map(({ num, icon, title, desc }) => (
              <div key={title} className="bg-white p-10 group hover:bg-[#0a0a0a] transition-colors duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-5xl font-black text-[#f0f0f0] group-hover:text-white/10 leading-none transition-colors duration-300 select-none">{num}</span>
                  <div className="w-10 h-10 border border-[#e5e5e5] group-hover:border-white/20 flex items-center justify-center transition-colors duration-300">
                    <FontAwesomeIcon icon={icon} size="sm" className="text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-base font-black text-black group-hover:text-white uppercase tracking-tight mb-3 transition-colors duration-300">{title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300 flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-black text-white py-20 relative" style={{backgroundImage: "url('/watch-images/watch-06.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={label} className="bg-black/60 p-8 lg:p-10 text-center group hover:bg-white transition-colors duration-300 backdrop-blur-sm">
                <FontAwesomeIcon icon={icon} size="xl" className="mx-auto mb-5 text-white group-hover:text-black transition-colors duration-300" />
                <div className="text-4xl lg:text-5xl font-black mb-2 text-white group-hover:text-black transition-colors duration-300">{value}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-600 transition-colors duration-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-3">CUSTOMER REVIEWS</p>
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">What Our Customers Say</h2>
            </div>
            <Link href="/testimonials" className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-black border-b border-black pb-0.5 hover:text-gray-400 hover:border-gray-400 transition-colors">All Reviews <FontAwesomeIcon icon={faArrowRight} size="xs" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e5]">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-[#f9f9f9] p-8 group hover:bg-[#0a0a0a] transition-colors duration-300 flex flex-col">
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} size="xs" className="text-black group-hover:text-white transition-colors duration-300" />
                  ))}
                  <span className="ml-2 text-xs font-black text-black group-hover:text-white transition-colors duration-300">{testimonial.rating}.0</span>
                </div>
                {testimonial.review && (
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed italic flex-1 mb-6 transition-colors duration-300">&ldquo;{testimonial.review}&rdquo;</p>
                )}
                <div className="border-t border-[#e5e5e5] group-hover:border-white/10 pt-5 transition-colors duration-300">
                  <p className="font-black text-sm text-black group-hover:text-white transition-colors duration-300">{testimonial.customerName}</p>
                  <p className="text-[10px] text-gray-400 group-hover:text-gray-500 mt-1 font-semibold uppercase tracking-widest transition-colors duration-300">{testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link href="/testimonials" className="inline-flex items-center gap-2 bg-black text-white text-[11px] font-bold tracking-widest uppercase py-4 px-10 hover:bg-gray-800 transition-colors">VIEW ALL REVIEWS <FontAwesomeIcon icon={faArrowRight} size="xs" /></Link>
          </div>
        </div>
      </section>

      {/* ── WORKMANSHIP ── */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left – heading */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">Our Craft</p>
              <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight mb-6">HUKE'S<br />WORKMANSHIP</h2>
              <div className="w-12 h-[2px] bg-white/30 mb-8" />
              <p className="text-sm text-gray-400 leading-relaxed mb-8">{companyDescription.intro}</p>
              <Link href="/about" className="inline-flex items-center gap-2 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3 transition-all duration-200">
                About Us <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </Link>
            </div>

            {/* Right – two columns of points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              <div className="bg-[#111111] p-8">
                <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-5">{companyDescription.innovation.title}</p>
                <ul className="space-y-3">
                  {companyDescription.innovation.points.slice(0, 4).map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#111111] p-8">
                <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-5">{companyDescription.quality.title}</p>
                <ul className="space-y-3">
                  {companyDescription.quality.points.slice(0, 4).map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-[#f5f5f5] border-y border-[#e5e5e5] py-14">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-2">Stay Updated</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-black">Get Wholesale Pricing Updates</h2>
              <p className="text-sm text-gray-500 mt-2">Subscribe for new product launches, bulk offers, and trade updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-0 w-full md:w-auto md:min-w-[400px] flex-shrink-0">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-5 py-3.5 bg-white border border-[#e5e5e5] border-r-0 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <button className="bg-black text-white font-black text-[11px] uppercase tracking-widest px-7 py-3.5 hover:bg-gray-800 transition-colors whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-20 relative overflow-hidden" style={{backgroundImage: "url('/watch-images/watch-26.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">START YOUR JOURNEY</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6">
            Ready to Experience<br />Excellence?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Contact us today for bulk orders and custom requirements. Trusted by 500+ businesses across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-10 text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors"><FontAwesomeIcon icon={faPhone} />
              GET IN TOUCH</Link>
            <Link href="/products" className="inline-flex items-center justify-center gap-3 border border-white/30 text-white font-bold py-4 px-10 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"><FontAwesomeIcon icon={faBagShopping} />
              BROWSE PRODUCTS</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-10 border-t border-white/10">
            {[
              { icon: faCircleCheck, text: 'Premium Quality Assured' },
              { icon: faTruck, text: 'Pan India Delivery' },
              { icon: faAward, text: 'Bulk Order Discounts' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-400 text-sm">
                <FontAwesomeIcon icon={icon} size="1x" className="text-white" />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

