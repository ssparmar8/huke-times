import { Star, ThumbsUp } from 'lucide-react';
import { testimonials, testimonialStats } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-[#B0B0B0]">
            What our customers say about us
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">
                {testimonialStats.averageRating}
              </div>
              <div className="flex justify-center text-[#1C1C1C] text-2xl mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
              <div className="text-[#B0B0B0]">Average Rating</div>
              <div className="text-sm text-[#B0B0B0] mt-1">
                Based on {testimonialStats.totalReviews} reviews
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">
                {testimonialStats.userSatisfaction}%
              </div>
              <div className="text-[#B0B0B0]">User Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">
                {testimonialStats.responseRating}%
              </div>
              <div className="text-[#B0B0B0]">Response Rating</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-[#1C1C1C] mb-2">
                {testimonialStats.deliveryRating}%
              </div>
              <div className="text-[#B0B0B0]">Delivery Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#1C1C1C] text-center">Rating Breakdown</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-4">
                <div className="w-16 flex items-center">
                  <span className="font-semibold text-[#1C1C1C]">{rating}</span>
                  <Star size={16} className="text-[#1C1C1C] ml-1" fill="currentColor" />
                </div>
                <div className="flex-grow mx-4">
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1C1C1C]"
                      style={{
                        width: `${(testimonialStats.ratingBreakdown[rating as keyof typeof testimonialStats.ratingBreakdown] / testimonialStats.totalReviews) * 100}%`
                      }}
                    />
                  </div>
                </div>
                <div className="w-16 text-right text-[#B0B0B0]">
                  {testimonialStats.ratingBreakdown[rating as keyof typeof testimonialStats.ratingBreakdown]} reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1C1C1C] text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-[#1C1C1C] text-xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.rating ? 'fill-current' : 'text-gray-200'}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-[#B0B0B0] font-semibold">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Review Text */}
                {testimonial.review && (
                  <p className="text-[#B0B0B0] mb-4 italic">
                    "{testimonial.review}"
                  </p>
                )}

                {/* Response & Delivery Ratings */}
                {(testimonial.responseRating || testimonial.deliveryRating) && (
                  <div className="flex gap-4 mb-4 text-sm">
                    {testimonial.responseRating && (
                      <span className="text-[#1C1C1C] flex items-center gap-1">
                        <ThumbsUp size={16} /> Response
                      </span>
                    )}
                    {testimonial.deliveryRating && (
                      <span className="text-[#1C1C1C] flex items-center gap-1">
                        <ThumbsUp size={16} /> Delivery
                      </span>
                    )}
                  </div>
                )}

                {/* Customer Info */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-[#1C1C1C]">{testimonial.customerName}</p>
                  <p className="text-sm text-[#B0B0B0] mt-1">{testimonial.product}</p>
                  <p className="text-xs text-[#B0B0B0] mt-2">{testimonial.date}</p>
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
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl mb-8 text-[#B0B0B0]">
            Experience the quality that our customers love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 text-[#1C1C1C] font-bold py-4 px-10 rounded-lg transition transform hover:scale-105">
              View Products
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1C1C1C] font-bold py-4 px-10 rounded-lg transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
