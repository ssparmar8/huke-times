interface RefundPolicyProps {
  onNavigate: (path: string) => void;
}

export default function RefundPolicy({ onNavigate }: RefundPolicyProps) {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span>Return & Refund Policy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Return &amp; Refund Policy</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Our commitment to your satisfaction
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 space-y-10 text-sm text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Return Eligibility</h2>
            <p className="mb-3">We accept returns under the following conditions:</p>
            <ul className="space-y-2 ml-4">
              <li>— The return is initiated within <strong className="text-black">7 days of delivery</strong>.</li>
              <li>— The product has a <strong className="text-black">manufacturing defect</strong> (not caused by misuse or physical damage).</li>
              <li>— The product is in its <strong className="text-black">original, unused condition</strong> with all original packaging, tags, and accessories intact.</li>
              <li>— Proof of purchase (invoice/receipt) is provided.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Non-Returnable Items</h2>
            <ul className="space-y-2 ml-4">
              <li>— Products returned after 7 days of delivery.</li>
              <li>— Products that have been used, worn, or show signs of use.</li>
              <li>— Products with damage caused by mishandling, accident, or improper use.</li>
              <li>— Products without original packaging or missing components.</li>
              <li>— Customized or special-order items made to specification.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">How to Initiate a Return</h2>
            <ol className="space-y-4 ml-4">
              <li>
                <strong className="text-black">1.</strong> Contact us within 7 days of delivery via email at <a href="mailto:huketimes@gmail.com" className="text-black underline">huketimes@gmail.com</a> or WhatsApp at +91 9574555399.
              </li>
              <li>
                <strong className="text-black">2.</strong> Include your order number, product name, a description of the defect, and clear photographs showing the issue.
              </li>
              <li>
                <strong className="text-black">3.</strong> Our team will review your request within 2 business days and provide a Return Authorization if approved.
              </li>
              <li>
                <strong className="text-black">4.</strong> Ship the product back to our Rajkot facility with the Return Authorization number clearly marked on the package. Return shipping costs are borne by the buyer unless the defect is confirmed as a manufacturing issue.
              </li>
              <li>
                <strong className="text-black">5.</strong> Upon receipt and inspection, we will process a replacement or refund.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Refund Timeline</h2>
            <div className="border border-[#e5e5e5]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider text-black border-r border-[#e5e5e5]">Refund Type</th>
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider text-black">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Replacement</td>
                    <td className="px-5 py-4">5–10 business days after return receipt</td>
                  </tr>
                  <tr className="bg-[#f5f5f5] border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Bank Transfer Refund</td>
                    <td className="px-5 py-4">7–10 business days after return inspection</td>
                  </tr>
                  <tr className="border-t border-[#e5e5e5]">
                    <td className="px-5 py-4 border-r border-[#e5e5e5]">Credit Note (for trade buyers)</td>
                    <td className="px-5 py-4">Issued within 3 business days of approval</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">Order Cancellation</h2>
            <p>Bulk orders may be cancelled without charge if cancelled within <strong className="text-black">24 hours of order confirmation</strong>. Cancellations after 24 hours or after production has begun may incur charges. Please contact us immediately if you need to cancel.</p>
          </div>

          <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-6">
            <h3 className="text-xs font-black uppercase tracking-widest mb-3">Contact for Returns</h3>
            <p className="text-xs">
              Email: <a href="mailto:huketimes@gmail.com" className="text-black underline">huketimes@gmail.com</a><br />
              WhatsApp: +91 9574555399<br />
              Address: Patel Nagar, St No.7 80 Ft Road, Rajkot, Gujarat — 360002
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
