import { MapPin, Mail, Phone, MessageCircle, Clock, Award, Heart } from 'lucide-react';
import { companyInfo } from '../../data/company';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-[#1C1C1C] text-white mt-auto overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Enhanced */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h3 className="text-4xl font-bold mb-4 cursor-pointer" onClick={() => onNavigate('/')}>
                Huke <span className="font-light">Times</span> <span className="text-xl font-normal">LLP</span>
              </h3>
              <div className="flex items-center gap-4 text-sm text-[#B0B0B0] mb-6">
                <span className="inline-flex items-center gap-1.5 backdrop-blur-lg bg-white/10 border border-white/20 px-3 py-1.5 rounded-full shadow-lg">
                  <Clock size={14} />
                  Est. 2022
                </span>
                <span className="inline-flex items-center gap-1.5 backdrop-blur-lg bg-white/10 border border-white/20 px-3 py-1.5 rounded-full shadow-lg">
                  <Award size={14} />
                  ISO Certified
                </span>
              </div>
            </div>
            
            <p className="text-[#B0B0B0] leading-relaxed mb-8 text-base">
              Excellence in watchmaking craftsmanship. Creating timepieces that are the epitome of accuracy, style, and beauty. Trusted manufacturer and supplier of premium wrist watches across India.
            </p>

            {/* Address with Icon */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 hover:bg-white/[0.15] transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="leading-relaxed text-[#B0B0B0]">
                  <p className="text-white font-semibold mb-2">Visit Our Location</p>
                  <p>{companyInfo.address.street}</p>
                  <p>{companyInfo.address.area}</p>
                  <p>{companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}</p>
                  <p>{companyInfo.address.country}</p>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Contact Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I'd like to inquire about your products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/90 hover:bg-white text-[#1C1C1C] border border-white/20 font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="backdrop-blur-md bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('/')} 
                  className="text-[#B0B0B0] hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/about')} 
                  className="text-[#B0B0B0] hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/products')} 
                  className="text-[#B0B0B0] hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/testimonials')} 
                  className="text-[#B0B0B0] hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/contact')} 
                  className="text-[#B0B0B0] hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3 text-[#B0B0B0]">
              <li className="hover:text-white transition-colors cursor-pointer">Automatic Watches</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mechanical Watches</li>
              <li className="hover:text-white transition-colors cursor-pointer">Quartz Watches</li>
              <li className="hover:text-white transition-colors cursor-pointer">Watch Cases</li>
              <li className="hover:text-white transition-colors cursor-pointer">Watch Parts</li>
            </ul>
          </div>

          {/* Contact Information - Premium */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <Phone size={18} className="text-white" />
              <h4 className="text-white font-bold text-lg">Get In Touch</h4>
            </div>
            <ul className="space-y-5">
              <li>
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="group block backdrop-blur-lg bg-white/10 hover:bg-white/[0.15] border border-white/20 hover:border-white/30 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-[#B0B0B0] mb-1">Email Us</div>
                      <div className="text-white font-semibold break-all group-hover:text-gray-200 transition-colors">{companyInfo.email}</div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="group block backdrop-blur-lg bg-white/10 hover:bg-white/[0.15] border border-white/20 hover:border-white/30 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-[#B0B0B0] mb-1">Call Us</div>
                      <div className="text-white font-semibold group-hover:text-gray-200 transition-colors">{companyInfo.phone}</div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block backdrop-blur-lg bg-white/10 hover:bg-white/[0.15] border border-white/20 hover:border-white/30 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                      <MessageCircle size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-[#B0B0B0] mb-1">WhatsApp</div>
                      <div className="text-white font-semibold group-hover:text-gray-200 transition-colors">{companyInfo.whatsapp}</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            {/* Business Hours - Enhanced */}
            <div className="mt-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-white" />
                <div className="text-sm text-white font-bold">Business Hours</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-[#B0B0B0]">Mon - Sat: <span className="text-white">9:00 AM - 6:00 PM</span></div>
                <div className="text-sm text-[#B0B0B0]">Sunday: <span className="text-white">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Premium */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#B0B0B0] flex items-center gap-2 justify-center md:justify-start">
                <span>© {new Date().getFullYear()} Huke Times LLP. All rights reserved.</span>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-[#B0B0B0] flex items-center gap-2 justify-center md:justify-end flex-wrap">
                <span className="flex items-center gap-1">
                  <Award size={12} />
                  Manufacturer & Supplier
                </span>
                <span className="hidden md:inline">|</span>
                <span>Premium Wrist Watches</span>
                <span className="hidden md:inline">|</span>
                <span>Rajkot, Gujarat, India</span>
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-[#B0B0B0] flex items-center gap-2 justify-center">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              <span>for Watch Enthusiasts</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
