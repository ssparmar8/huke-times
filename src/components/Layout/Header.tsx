import { useState } from 'react';
import { Mail, Phone, Menu, X, MessageCircle, MapPin, ShoppingBag, Sparkles, Award } from 'lucide-react';
import { companyInfo } from '../../data/company';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Announcement Bar */}
      <div className="relative bg-[#333333] text-white py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Sparkles size={14} className="text-white" />
              Premium Quality Watches
            </span>
            <span className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Award size={14} className="text-white" />
              ISO Certified
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <ShoppingBag size={14} className="text-white" />
              Pan India Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-6">
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="group flex items-center gap-2 text-[#888888] hover:text-[#333333] transition-all"
              >
                <Mail size={14} />
                <span className="hidden sm:inline text-sm font-medium">{companyInfo.email}</span>
              </a>
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="group flex items-center gap-2 text-[#888888] hover:text-[#333333] transition-all"
              >
                <Phone size={14} />
                <span className="text-sm font-medium">{companyInfo.phone}</span>
              </a>
              <div className="hidden lg:flex items-center gap-2 text-[#888888] text-sm">
                <MapPin size={14} />
                <span className="font-medium">Rajkot, Gujarat</span>
              </div>
            </div>

            {/* Right: WhatsApp CTA */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I'd like to inquire about your products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 backdrop-blur-md bg-[#333333] hover:bg-[#2C2C2C] text-white px-5 py-2 rounded-lg transition-all shadow-lg transform hover:scale-105"
            >
              <MessageCircle size={16} />
              <span className="text-sm font-semibold">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <div 
              className="group flex items-center cursor-pointer" 
              onClick={() => onNavigate('/')}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight group-hover:text-[#2C2C2C] transition-colors">
                Huke <span className="font-light">Times</span> <span className="text-xl font-normal ml-1">LLP</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`px-5 py-2.5 font-medium transition-all rounded-lg ${
                    currentPath === item.path
                      ? 'bg-[#333333] text-white shadow-lg'
                      : 'text-[#888888] hover:text-[#333333] hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <button
              onClick={() => onNavigate('/contact')}
              className="hidden lg:flex items-center gap-2 backdrop-blur-md bg-[#333333] hover:bg-[#2C2C2C] text-white px-6 py-2.5 rounded-lg transition-all font-semibold shadow-lg transform hover:scale-105"
            >
              <ShoppingBag size={18} />
              <span>Request Quote</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-[#333333]" />
              ) : (
                <Menu size={24} className="text-[#333333]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-6 border-t border-gray-100 mt-2">
              <div className="space-y-2 pt-4">
                {navigation.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      onNavigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left py-4 px-5 rounded-lg transition-all ${
                      currentPath === item.path
                        ? 'bg-[#333333] text-white font-semibold shadow-lg'
                        : 'text-[#888888] hover:bg-gray-100 hover:text-[#333333]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Mobile CTAs */}
                <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
                  <button
                    onClick={() => {
                      onNavigate('/contact');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full backdrop-blur-md bg-[#333333] hover:bg-[#2C2C2C] text-white font-semibold py-4 px-5 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={18} />
                    <span>Request Quote</span>
                  </button>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full backdrop-blur-md border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white font-semibold py-4 px-5 rounded-lg transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
