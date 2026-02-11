import { Star, ThumbsUp, Award, TrendingUp, Users, Quote } from 'lucide-react';
import { testimonials, testimonialStats } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#333333] text-white py-28 md:py-32 overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <Star size={18} fill="white" />
              <span>TESTIMONIALS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Customer Testimonials</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              What our customers say about us
            </p>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#333333]">Customer Satisfaction Metrics</h2>
            <p className="text-xl text-gray-600">Trusted by businesses across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group bg-white p-10 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-[#333333] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#333333] rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Star size={32} className="text-white" fill="white" />
              </div>
              <div className="text-6xl font-black text-[#333333] mb-3">
                {testimonialStats.averageRating}
              </div>
              <div className="flex justify-center text-[#333333] text-xl mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} fill="currentColor" />
                ))}
              </div>
              <div className="text-gray-700 font-bold text-base">Average Rating</div>
              <div className="text-sm text-gray-600 mt-2 font-medium">
                Based on {testimonialStats.totalReviews} reviews
              </div>
            </div>
            <div className="group bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:border-[#333333] transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#333333] rounded-3xl mb-4 group-hover:scale-110 transition-transform">
                <Users size={28} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-[#333333] mb-2">
                {testimonialStats.userSatisfaction}%
              </div>
              <div className="text-[#888888] font-medium">User Satisfaction</div>
            </div>
            <div className="group bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:border-[#333333] transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#333333] rounded-3xl mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-[#333333] mb-2">
                {testimonialStats.responseRating}%
              </div>
              <div className="text-[#888888] font-medium">Response Rating</div>
            </div>
            <div className="group bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:border-[#333333] transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#333333] rounded-3xl mb-4 group-hover:scale-110 transition-transform">
                <Award size={28} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-[#333333] mb-2">
                {testimonialStats.deliveryRating}%
              </div>
              <div className="text-[#888888] font-medium">Delivery Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#333333] text-center">Rating Breakdown</h2>
          <div className="bg-white border-2 border-gray-100 rounded-lg shadow-sm p-8">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-4">
                <div className="w-16 flex items-center">
                  <span className="font-semibold text-[#333333]">{rating}</span>
                  <Star size={16} className="text-[#333333] ml-1" fill="currentColor" />
                </div>
                <div className="flex-grow mx-4">
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#333333]"
                      style={{
                        width: `${(testimonialStats.ratingBreakdown[rating as keyof typeof testimonialStats.ratingBreakdown] / testimonialStats.totalReviews) * 100}%`
                      }}
                    />
                  </div>
                </div>
                <div className="w-16 text-right text-[#888888]">
                  {testimonialStats.ratingBreakdown[rating as keyof typeof testimonialStats.ratingBreakdown]} reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">Customer Reviews</h2>
            <p className="text-lg text-[#888888]">Real experiences from satisfied clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group relative bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#333333] transition-all duration-300 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={40} className="text-[#333333]" />
                </div>
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-[#333333] text-xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.rating ? 'fill-current' : 'text-gray-200'}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-[#888888] font-semibold">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Review Text */}
                {testimonial.review && (
                  <p className="text-[#888888] mb-4 italic">
                    "{testimonial.review}"
                  </p>
                )}

                {/* Response & Delivery Ratings */}
                {(testimonial.responseRating || testimonial.deliveryRating) && (
                  <div className="flex gap-4 mb-4 text-sm">
                    {testimonial.responseRating && (
                      <span className="text-[#333333] flex items-center gap-1">
                        <ThumbsUp size={16} /> Response
                      </span>
                    )}
                    {testimonial.deliveryRating && (
                      <span className="text-[#333333] flex items-center gap-1">
                        <ThumbsUp size={16} /> Delivery
                      </span>
                    )}
                  </div>
                )}

                {/* Customer Info */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-[#333333]">{testimonial.customerName}</p>
                  <p className="text-sm text-[#888888] mt-1">{testimonial.product}</p>
                  <p className="text-xs text-[#888888] mt-2">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#333333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl mb-8 text-[#888888]">
            Experience the quality that our customers love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="backdrop-blur-md bg-white/90 hover:bg-white border border-white/20 text-[#333333] font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-lg">
              View Products
            </button>
            <button className="backdrop-blur-md bg-white/10 border-2 border-white hover:bg-white hover:text-[#333333] font-bold py-4 px-10 rounded-lg transition shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
