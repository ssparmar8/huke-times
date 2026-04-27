import Link from 'next/link';
export default function ShippingPolicy() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Shipping Policy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Shipping Policy</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Pan India delivery for all orders
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 space-y-10 text-sm text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Coverage</h2>
            <p>Huke Times LLP ships to all major cities and towns across India. For remote or restricted pin codes, please contact us before placing an order to confirm deliverability.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Shipping Charges</h2>
            <div className="border border-[#e5e5e5]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider text-black border-r border-[#e5e5e5]">Order Value / Type</th>
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider text-black">Shipping Charge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Bulk / Wholesale Orders (MOQ met)</td>
                    <td className="px-5 py-4">Quoted at time of order (typically free for large bulk)</td>
                  </tr>
                  <tr className="bg-[#f5f5f5] border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Sample Orders</td>
                    <td className="px-5 py-4">Actual shipping charges apply</td>
                  </tr>
                  <tr className="border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Trade Partners (recurring orders)</td>
                    <td className="px-5 py-4">As per agreed terms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Delivery Timelines</h2>
            <div className="border border-[#e5e5e5]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider text-black border-r border-[#e5e5e5]">Location</th>
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider text-black">Estimated Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Gujarat (local)</td>
                    <td className="px-5 py-4">2–4 business days</td>
                  </tr>
                  <tr className="bg-[#f5f5f5] border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Major metro cities (Mumbai, Delhi, Bangalore, etc.)</td>
                    <td className="px-5 py-4">4–7 business days</td>
                  </tr>
                  <tr className="border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Rest of India</td>
                    <td className="px-5 py-4">5–10 business days</td>
                  </tr>
                  <tr className="bg-[#f5f5f5] border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Remote / Hill areas</td>
                    <td className="px-5 py-4">7–14 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-400">Timelines are estimates and may vary due to logistics partner delays, public holidays, or unforeseen circumstances.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Order Processing</h2>
            <ul className="space-y-2 ml-4">
              <li>— Orders are processed within 1–3 business days after payment confirmation.</li>
              <li>— For bulk orders, production/dispatch timelines will be communicated separately.</li>
              <li>— You will receive a tracking number via email or WhatsApp once dispatch is confirmed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Packaging</h2>
            <p>All products are carefully packed to prevent damage during transit. Watches are packed in individual boxes, and bulk orders are consolidated in secure cartons with adequate padding.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Damaged or Lost Shipments</h2>
            <p>If your order arrives damaged or does not arrive within the expected timeline, please contact us immediately at <a href="mailto:huketimes@gmail.com" className="text-black underline">huketimes@gmail.com</a> or WhatsApp +91 9574555399 with your order details and photographs (if damaged). We will investigate and resolve promptly.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
