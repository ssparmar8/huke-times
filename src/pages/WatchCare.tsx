interface WatchCareProps {
  onNavigate: (path: string) => void;
}

export default function WatchCare({ onNavigate }: WatchCareProps) {
  const sections = [
    {
      title: 'Cleaning',
      steps: [
        'Use a soft, lint-free cloth to wipe the watch case and glass regularly.',
        'For metal bracelets, use a soft toothbrush with mild soapy water, then rinse gently and dry completely.',
        'Avoid using solvents, household cleaners, or abrasive materials as they can damage the finish and seals.',
        'Clean the leather strap with a dry or slightly damp cloth only — avoid water saturation.',
      ],
    },
    {
      title: 'Storage',
      steps: [
        'Store your watch in a cool, dry place away from direct sunlight and extreme temperatures.',
        'When not wearing your watch, keep it in a watch box or pouch to protect it from dust and scratches.',
        'Keep magnets away from your watch — magnetic fields can affect the accuracy of quartz and mechanical movements.',
        'For automatic watches not worn regularly, consider a watch winder to keep the movement running.',
      ],
    },
    {
      title: 'Water Resistance',
      steps: [
        'Check your watch\'s water resistance rating before exposing it to water — each model has a specific rating.',
        'Even water-resistant watches should not be submerged unless rated for it (e.g., 100m+).',
        'Avoid pressing crown or pushers while the watch is wet — this can allow water to enter.',
        'Rinse with fresh water after exposure to salt water or chlorine, then dry thoroughly.',
        'Have water resistance seals checked annually if the watch is regularly exposed to water.',
      ],
    },
    {
      title: 'Battery Care (Quartz Watches)',
      steps: [
        'Replace the battery promptly when the watch slows down or stops — a depleted battery can leak and damage the movement.',
        'Have the battery replaced by a qualified watchmaker to maintain water resistance integrity.',
        'If storing a quartz watch for an extended period, remove the battery to prevent leakage.',
      ],
    },
    {
      title: 'Servicing',
      steps: [
        'Mechanical and automatic watches should be serviced every 3–5 years.',
        'Quartz watches typically need servicing every 5–10 years beyond battery replacement.',
        'Signs that your watch needs servicing: losing/gaining time noticeably, crown feels stiff, fogging under the glass.',
        'Always use a certified watchmaker for servicing to preserve warranty and movement integrity.',
      ],
    },
    {
      title: 'Daily Wear Tips',
      steps: [
        'Put your watch on after applying perfume, cologne, or lotions — chemicals can damage the case finish and strap.',
        'Remove your watch during heavy physical work, sports, or activities that may cause impact or excessive sweating.',
        'Clasp and unclasp gently — rough handling can stretch or weaken the bracelet over time.',
        'Avoid placing your watch face-down on hard surfaces to prevent glass scratching.',
      ],
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
            <span>Watch Care</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Watch Care Guide</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            How to care for your Huke Times watch
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            A well-maintained watch lasts a lifetime. Following these care guidelines will help ensure your Huke Times watch remains accurate, beautiful, and functional for years to come.
          </p>
        </div>
      </section>

      {/* Care sections */}
      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5]">
            {sections.map(section => (
              <div key={section.title} className="bg-white p-8 md:p-10">
                <h2 className="text-sm font-black uppercase tracking-widest mb-5 pb-3 border-b border-[#e5e5e5]">
                  {section.title}
                </h2>
                <ol className="space-y-3">
                  {section.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="font-black text-black flex-shrink-0 w-5">{i + 1}.</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note strip */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-xl font-black uppercase mb-3">Need Help with Your Watch?</h2>
          <p className="text-gray-400 text-sm mb-8">
            Contact us for service inquiries, care advice, or to register your warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/contact')} className="bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button onClick={() => onNavigate('/warranty-registration')} className="border border-white text-white font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-colors">
              Register Warranty
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
