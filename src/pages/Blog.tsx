import { companyInfo } from '../data/company';

const posts = [
  {
    slug: 'huke-times-premium-watch-launch',
    date: 'March 2026',
    category: 'Launch',
    title: 'Huke Times Launches New Range of Premium Wrist Watches for 2026',
    excerpt: 'We are excited to introduce our expanded 2026 catalog, featuring new designs in our mens wrist watch range and a broader selection of precision watch parts for trade buyers.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
  },
  {
    slug: 'bulk-order-watch-guide',
    date: 'February 2026',
    category: 'Trade',
    title: 'How to Place Bulk Orders for Wrist Watches from Indian Manufacturers',
    excerpt: 'A complete guide for retailers, wholesalers, and importers on how to source premium wrist watches directly from manufacturers like Huke Times in Rajkot, Gujarat.',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80',
  },
  {
    slug: 'watch-parts-manufacturing-rajkot',
    date: 'January 2026',
    category: 'Inside Huke Times',
    title: 'Inside Our Watch Parts Manufacturing Facility in Rajkot',
    excerpt: 'Take a closer look at how Huke Times manufactures precision watch components at our state-of-the-art facility in Rajkot, Gujarat — where craftsmanship meets modern engineering.',
    image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&q=80',
  },
  {
    slug: 'quartz-vs-mechanical-watches',
    date: 'December 2025',
    category: 'Watch Guide',
    title: 'Quartz vs Mechanical Watches: A Buyer\'s Guide for Retailers',
    excerpt: 'Understanding the difference between quartz, mechanical, and automatic watch movements is essential for any watch retailer. Here\'s what you need to know.',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80',
  },
  {
    slug: 'mens-watch-trends-2026',
    date: 'November 2025',
    category: 'Trends',
    title: 'Men\'s Watch Trends 2026: What Buyers Are Looking For',
    excerpt: 'From minimalist dials to bold chronograph designs, here\'s a roundup of the top watch styles trending in the Indian market for 2026 and what retailers should stock.',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80',
  },
  {
    slug: 'why-source-watches-india',
    date: 'October 2025',
    category: 'Trade',
    title: 'Why Sourcing Watches from Indian Manufacturers Makes Business Sense',
    excerpt: 'India\'s watch manufacturing industry has grown significantly over the past decade. Here\'s why sourcing from domestic manufacturers like Huke Times LLP offers quality, cost, and reliability advantages.',
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&q=80',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Brand News</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Latest updates, guides, and insights from Huke Times
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
            {posts.map(post => (
              <article key={post.slug} className="group bg-white">
                <div className="overflow-hidden aspect-video bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-gray-400">{post.category}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-sm font-black leading-snug mb-3 group-hover:underline underline-offset-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="mt-4 text-xs font-black uppercase tracking-wider hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe strip */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black uppercase mb-2">Stay in the Loop</h2>
          <p className="text-gray-400 text-sm mb-6">Subscribe to get the latest news, product launches, and trade updates.</p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white text-black placeholder-gray-400 text-sm focus:outline-none"
            />
            <button className="bg-gray-100 text-black font-black text-xs uppercase tracking-widest px-8 py-3 border-l border-gray-200 hover:bg-gray-200 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-3">
            Contact: <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">{companyInfo.email}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
