import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faCommentDots, faClock, faAward, faHeart } from '@fortawesome/free-solid-svg-icons';
import { companyInfo } from '../../data/company';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#e8e8e8] text-black border-t border-[#d0d0d0]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={() => onNavigate('/')} className="inline-flex items-baseline mb-6 group">
              <span className="text-2xl font-black tracking-tight text-black uppercase group-hover:text-gray-600 transition-colors">HUKE</span>
              <span className="text-2xl font-thin tracking-tight text-black uppercase ml-2 group-hover:text-gray-600 transition-colors">TIMES</span>
              <span className="text-xs font-medium text-gray-400 ml-2 tracking-widest">LLP</span>
            </button>
            <div className="flex gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white border border-[#d0d0d0] text-xs font-bold px-3 py-1.5 tracking-wider">
                <FontAwesomeIcon icon={faClock} size="xs" />
                EST. 2022
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-[#d0d0d0] text-xs font-bold px-3 py-1.5 tracking-wider">
                <FontAwesomeIcon icon={faAward} size="xs" />
                ISO CERTIFIED
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Excellence in watchmaking craftsmanship. Trusted manufacturer &amp; supplier of premium wrist watches across India.
            </p>
            <div className="flex items-start gap-3 text-sm text-gray-500">
              <FontAwesomeIcon icon={faLocationDot} size="sm" className="text-black flex-shrink-0 mt-0.5" />
              <span>{companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} — {companyInfo.address.pincode}</span>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-black mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'Blog', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Sustainability', path: '/sustainability' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <button
                    onClick={() => onNavigate(path)}
                    className="text-sm text-gray-500 hover:text-black transition-colors font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Policies & Support */}
          <div>
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-black mb-6">Support &amp; Policies</h4>
            <ul className="space-y-3">
              {[
                { label: 'FAQs', path: '/faqs' },
                { label: 'Watch Care', path: '/watch-care' },
                { label: 'Warranty', path: '/warranty' },
                { label: 'Warranty Registration', path: '/warranty-registration' },
                { label: 'Shipping Policy', path: '/shipping' },
                { label: 'Return & Refund Policy', path: '/refunds' },
                { label: 'Privacy Policy', path: '/privacy' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <button
                    onClick={() => onNavigate(path)}
                    className="text-sm text-gray-500 hover:text-black transition-colors font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-black mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${companyInfo.email}`} className="group flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" className="text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-gray-600 group-hover:text-black transition-colors break-all">{companyInfo.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`} className="group flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} size="sm" className="text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm text-gray-600 group-hover:text-black transition-colors">{companyInfo.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <FontAwesomeIcon icon={faCommentDots} size="sm" className="text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="text-sm text-gray-600 group-hover:text-black transition-colors">{companyInfo.whatsapp}</p>
                  </div>
                </a>
              </li>
              <li className="pt-2 border-t border-[#d0d0d0]">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faClock} size="sm" className="text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Business Hours</p>
                    <p className="text-xs text-gray-600">Mon–Sat: 9:00 AM – 6:00 PM</p>
                    <p className="text-xs text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I'd like to inquire about your products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-xs font-bold tracking-widest uppercase py-2.5 flex items-center justify-center gap-1.5 hover:bg-gray-800 transition-colors"
              >
                <FontAwesomeIcon icon={faCommentDots} size="xs" /> WHATSAPP
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="border border-black text-black text-xs font-bold tracking-widest uppercase py-2.5 flex items-center justify-center gap-1.5 hover:bg-black hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} size="xs" /> CALL US
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d0d0d0] bg-[#d8d8d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Huke Times LLP. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 flex items-center flex-wrap gap-x-3 gap-y-1 justify-center">
              <span className="flex items-center gap-1"><FontAwesomeIcon icon={faAward} size="2xs" /> Manufacturer &amp; Supplier</span>
              <span className="hidden sm:inline text-gray-300">·</span>
              <span>Premium Wrist Watches</span>
              <span className="hidden sm:inline text-gray-300">·</span>
              <span>Rajkot, Gujarat, India</span>
            </p>
            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              Made with <FontAwesomeIcon icon={faHeart} size="2xs" className="text-red-400" /> for Watch Enthusiasts
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
