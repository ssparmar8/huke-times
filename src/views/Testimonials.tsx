import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { testimonials, testimonialStats } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Testimonials</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Testimonials</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            What our customers say about us
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e5e5e5]">
            <div className="p-8 md:p-10 text-center">
              <div className="text-5xl font-black text-black mb-2">{testimonialStats.averageRating}</div>
              <div className="flex justify-center text-black mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} size="1x" />
                ))}
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Average Rating</p>
              <p className="text-xs text-gray-400 mt-1">Based on {testimonialStats.totalReviews} reviews</p>
            </div>
            <div className="p-8 md:p-10 text-center">
              <div className="text-5xl font-black text-black mb-2">{testimonialStats.userSatisfaction}%</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">User Satisfaction</p>
            </div>
            <div className="p-8 md:p-10 text-center">
              <div className="text-5xl font-black text-black mb-2">{testimonialStats.responseRating}%</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Response Rating</p>
            </div>
            <div className="p-8 md:p-10 text-center">
              <div className="text-5xl font-black text-black mb-2">{testimonialStats.deliveryRating}%</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Delivery Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-14 bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl font-black uppercase text-center mb-8 tracking-wider">Rating Breakdown</h2>
          <div className="bg-white border border-[#e5e5e5] p-8 space-y-4">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center gap-4">
                <div className="w-12 flex items-center gap-1 flex-shrink-0">
                  <span className="font-bold text-sm">{rating}</span>
                  <FontAwesomeIcon icon={faStar} size="xs" />
                </div>
                <div className="flex-grow h-2 bg-[#e5e5e5]">
                  <div
                    className="h-full bg-black"
                    style={{
                      width: `${(testimonialStats.ratingBreakdown[rating as keyof typeof testimonialStats.ratingBreakdown] / testimonialStats.totalReviews) * 100}%`
                    }}
                  />
                </div>
                <div className="w-20 text-right text-xs text-gray-500">
                  {testimonialStats.ratingBreakdown[rating as keyof typeof testimonialStats.ratingBreakdown]} reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-black uppercase text-center mb-10 tracking-wider">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="group bg-white p-8 relative">
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-[40px]" />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      size="sm"
                      className={i < testimonial.rating ? 'text-black' : 'text-gray-200'}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">{testimonial.rating}.0</span>
                </div>
                {testimonial.review && (
                  <p className="text-sm text-gray-600 mb-4 italic leading-relaxed">"{testimonial.review}"</p>
                )}
                {(testimonial.responseRating || testimonial.deliveryRating) && (
                  <div className="flex gap-4 mb-4 text-xs text-gray-500">
                    {testimonial.responseRating && (
                      <span className="flex items-center gap-1"><FontAwesomeIcon icon={faThumbsUp} size="xs" /> Response</span>
                    )}
                    {testimonial.deliveryRating && (
                      <span className="flex items-center gap-1"><FontAwesomeIcon icon={faThumbsUp} size="xs" /> Delivery</span>
                    )}
                  </div>
                )}
                <div className="border-t border-[#e5e5e5] pt-4">
                  <p className="font-bold text-sm text-black">{testimonial.customerName}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{testimonial.product}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-black text-white py-16">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">Join Our Satisfied Customers</h2>
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-8">
            Experience the quality that our customers love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-gray-100 transition-colors">
              View Products
            </Link>
            <Link href="/contact" className="border border-white text-white font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
