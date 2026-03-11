export default function PrivacyPolicy() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <span>Home</span>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Privacy Policy</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 space-y-10 text-sm text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">1. Introduction</h2>
            <p>Huke Times LLP ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you interact with us through our website, email, or any other channel.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of personal information:</p>
            <ul className="space-y-2 ml-4">
              <li>— <strong className="text-black">Contact Information:</strong> Name, email address, phone number, company name, and address when you submit an enquiry or register for warranty.</li>
              <li>— <strong className="text-black">Transaction Information:</strong> Order details, product names, quantities, and payment references for business orders.</li>
              <li>— <strong className="text-black">Communication Records:</strong> Emails, WhatsApp messages, and other communications you send us.</li>
              <li>— <strong className="text-black">Website Usage Data:</strong> IP address, browser type, pages visited, and time spent on site (collected via standard server logs and analytics).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">3. How We Use Your Information</h2>
            <ul className="space-y-2 ml-4">
              <li>— To process and fulfill your orders or enquiries.</li>
              <li>— To communicate with you about your order, warranty, or support request.</li>
              <li>— To send product updates, catalogs, or promotional information (you may opt out at any time).</li>
              <li>— To improve our website and services.</li>
              <li>— To comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">4. Sharing of Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
            <ul className="space-y-2 ml-4 mt-3">
              <li>— Logistics partners (courier and shipping companies) to fulfill delivery.</li>
              <li>— Payment processors for transaction completion.</li>
              <li>— Legal authorities when required by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or disclosure. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">6. Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at <a href="mailto:huketimes@gmail.com" className="text-black underline">huketimes@gmail.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">7. Cookies</h2>
            <p>Our website may use cookies to improve user experience. You can disable cookies through your browser settings, though some features may not function properly without them.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance.</p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-black mb-3 pb-2 border-b border-[#e5e5e5]">9. Contact</h2>
            <p>For any privacy-related queries, please contact:<br />
              <strong className="text-black">Huke Times LLP</strong><br />
              Patel Nagar, St No.7 80 Ft Road, Sorathiy Vadi Circle, Rajkot, Gujarat — 360002<br />
              Email: <a href="mailto:huketimes@gmail.com" className="text-black underline">huketimes@gmail.com</a><br />
              Phone: +91 9574555399
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
