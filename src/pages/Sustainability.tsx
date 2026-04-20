interface SustainabilityProps {
  onNavigate: (path: string) => void;
}

export default function Sustainability({ onNavigate }: SustainabilityProps) {
  const initiatives = [
    {
      title: 'Responsible Sourcing',
      description: 'We source materials from suppliers who meet our ethical and environmental standards. Every component is carefully vetted for quality and sustainability.',
    },
    {
      title: 'Minimal Packaging',
      description: 'Our packaging is designed to minimize waste. We use recycled materials where possible and continually work to reduce the environmental footprint of our product boxes and shipping materials.',
    },
    {
      title: 'Energy Efficient Manufacturing',
      description: 'Our Rajkot facility is continuously upgraded to improve energy efficiency. We invest in modern machinery that consumes less power and generates less waste per unit produced.',
    },
    {
      title: 'Long-Lasting Products',
      description: 'The most sustainable product is one that doesn\'t need to be replaced. We build watches designed to last years, reducing the cycle of consumption and electronic waste.',
    },
    {
      title: 'Ethical Employment',
      description: 'Our team of 20–50 people work in safe, fair conditions. We are committed to being a responsible employer, offering fair wages and a healthy working environment.',
    },
    {
      title: 'Community Partnership',
      description: 'We partner with local artisans and suppliers in Gujarat, keeping production local and supporting the regional economy and craftsmanship heritage.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span>Sustainability</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Sustainability</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Our commitment to a greener tomorrow
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">#GreenerTomorrow</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8">
              Building a Better<br />Future Through<br />Watchmaking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Huke Times, we believe that manufacturing can be done responsibly. As a manufacturer and supplier based in Rajkot, Gujarat, we are committed to operating in ways that respect our environment, our employees, and our community. Sustainability is not a destination — it is a continuous journey, and we are committed to improving at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives grid */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-10">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
            {initiatives.map(item => (
              <div key={item.title} className="bg-white p-8">
                <h3 className="text-sm font-black uppercase tracking-wider mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pledge strip */}
      <section className="bg-black text-white py-20">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">#GreenerTomorrow</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Our Pledge</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            We pledge to continuously reduce the environmental impact of our operations, invest in sustainable practices, and be transparent about our progress. Every watch we make is a step toward a future we can be proud of.
          </p>
        </div>
      </section>
    </div>
  );
}
