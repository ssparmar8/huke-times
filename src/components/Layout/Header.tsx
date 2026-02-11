import { useState } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-[#1C1C1C] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`mailto:${companyInfo.email}`} className="hover:text-[#B0B0B0] transition flex items-center gap-2">
                <Mail size={16} /> {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phone}`} className="hover:text-[#B0B0B0] transition hidden sm:block flex items-center gap-2">
                <Phone size={16} /> {companyInfo.phone}
              </a>
            </div>
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#1C1C1C] px-4 py-1 rounded transition font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('/')}>
            <div className="text-2xl font-bold text-[#1C1C1C]">
              Huke <span className="font-normal">Times</span>
            </div>
            <div className="ml-2 text-xs text-[#B0B0B0] hidden sm:block">
              LLP
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`font-medium transition ${
                  currentPath === item.path
                    ? 'text-[#1C1C1C] border-b-2 border-[#1C1C1C]'
                    : 'text-[#B0B0B0] hover:text-[#1C1C1C]'
                } pb-1`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            {navigation.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 ${
                  currentPath === item.path
                    ? 'bg-gray-50 text-[#1C1C1C] font-medium'
                    : 'text-[#B0B0B0] hover:bg-gray-50 hover:text-[#1C1C1C]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
