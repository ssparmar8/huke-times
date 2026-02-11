import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/company';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1C1C1C] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Huke <span className="font-normal">Times</span> LLP
            </h3>
            <p className="text-[#B0B0B0] mb-4">
              Excellence in watchmaking craftsmanship. Creating timepieces that are the epitome of accuracy, style, and beauty since 2022.
            </p>
            <div className="text-[#B0B0B0] space-y-2">
              <p className="flex items-start gap-2"><MapPin size={18} className="mt-1 flex-shrink-0" /> {companyInfo.address.street}</p>
              <p className="pl-6">{companyInfo.address.area}</p>
              <p className="pl-6">{companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}</p>
              <p className="pl-6">{companyInfo.address.country}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('/')} className="text-[#B0B0B0] hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="text-[#B0B0B0] hover:text-white transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/products')} className="text-[#B0B0B0] hover:text-white transition">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/testimonials')} className="text-[#B0B0B0] hover:text-white transition">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="text-[#B0B0B0] hover:text-white transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-[#B0B0B0]">
              <li>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition flex items-center gap-2">
                  <Mail size={16} /> {companyInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition flex items-center gap-2">
                  <Phone size={16} /> {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-[#B0B0B0]">
          <p>© {new Date().getFullYear()} Huke Times LLP. All rights reserved.</p>
          <p className="text-sm mt-2">
            Manufacturer & Supplier of Premium Wrist Watches | Rajkot, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
