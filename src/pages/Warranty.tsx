export default function Warranty() {
  const covered = [
    'Defects in materials and workmanship under normal use',
    'Movement failure not caused by physical damage',
    'Crown malfunction during normal winding/setting',
    'Dial defects present at the time of purchase',
    'Case finishing defects present at the time of purchase',
  ];

  const notCovered = [
    'Physical damage, dents, scratches, or broken glass',
    'Water damage beyond the stated water resistance rating',
    'Damage caused by unauthorized repair or modification',
    'Normal wear and tear, including strap and bracelet wear',
    'Battery replacement (quartz watches)',
    'Damage from improper use, accidents, or negligence',
    'Crown stem, gasket, or seal damage from improper use',
    'Damage caused by magnetic fields or extreme temperatures',
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <span>Home</span>
            <span>/</span>
            <span>Warranty</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Warranty Policy</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            1-year manufacturer warranty on all Huke Times watches
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 space-y-12">

          {/* Overview */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-3 border-b border-[#e5e5e5]">Warranty Period</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              All Huke Times watches are covered by a <strong className="text-black">1-year manufacturer's warranty</strong> from the date of original purchase. The warranty is non-transferable and applies only to the original purchaser.
            </p>
          </div>

          {/* What's covered */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-3 border-b border-[#e5e5e5]">What Is Covered</h2>
            <ul className="space-y-3">
              {covered.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What's not covered */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-3 border-b border-[#e5e5e5]">What Is Not Covered</h2>
            <ul className="space-y-3">
              {notCovered.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 border border-gray-400 rounded-full flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How to claim */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 pb-3 border-b border-[#e5e5e5]">How to Claim Warranty</h2>
            <ol className="space-y-4">
              {[
                'Contact us at huketimes@gmail.com or via WhatsApp at +91 9574555399 within the warranty period.',
                'Provide your name, purchase date, order/invoice number, product name, and a description of the defect with supporting photographs.',
                'Our team will evaluate the issue and provide instructions for returning the product.',
                'Once received and inspected, if the defect is covered under warranty, we will repair or replace the product at our discretion.',
                'Repaired or replaced products carry the remainder of the original warranty period.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-gray-600">
                  <span className="font-black text-black flex-shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Important notes */}
          <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-6">
            <h3 className="text-xs font-black uppercase tracking-widest mb-3">Important Notes</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>— Proof of purchase (invoice or receipt) is required for all warranty claims.</li>
              <li>— Warranty registration strengthens your claim; register at huketimes.in/warranty-registration.</li>
              <li>— Warranty service does not extend the original warranty period.</li>
              <li>— Decisions regarding warranty coverage are at the sole discretion of Huke Times LLP.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
