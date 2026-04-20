import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCommentDots, faBagShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { companyInfo } from '../../data/company';

type DropdownItem = { label: string; path: string };

type NavItem = {
  name: string;
  path?: string;
  dropdown?: DropdownItem[];
};

const navigation: NavItem[] = [
  { name: 'HOME', path: '/' },
  {
    name: 'COMPANY',
    dropdown: [
      { label: 'About Us', path: '/about' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
      { label: 'Blog', path: '/blog' },
      { label: 'Testimonials', path: '/testimonials' },
    ],
  },
  { name: 'PRODUCTS', path: '/products' },
  {
    name: 'SUPPORT',
    dropdown: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQs', path: '/faqs' },
      { label: 'Watch Care', path: '/watch-care' },
      { label: 'Warranty', path: '/warranty' },
      { label: 'Warranty Registration', path: '/warranty-registration' },
    ],
  },
  {
    name: 'POLICIES',
    dropdown: [
      { label: 'Shipping Policy', path: '/shipping' },
      { label: 'Return & Refund Policy', path: '/refunds' },
      { label: 'Privacy Policy', path: '/privacy' },
    ],
  },
];

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

function DropdownMenu({ items, onNavigate, onClose }: { items: DropdownItem[]; onNavigate: (p: string) => void; onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-0 min-w-[200px] bg-white border border-[#e5e5e5] border-t-0 shadow-lg z-50">
      {items.map(item => (
        <button
          key={item.path}
          onClick={() => { onNavigate(item.path); onClose(); }}
          className="w-full text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-black hover:bg-[#f5f5f5] transition-colors border-b border-[#f0f0f0] last:border-b-0"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActiveSection = (item: NavItem) => {
    if (item.path) return currentPath === item.path;
    return item.dropdown?.some(d => currentPath === d.path) ?? false;
  };

  return (
    <header className="sticky top-0 z-50" ref={headerRef}>

      {/* Announcement Bar */}
      {announcementVisible && (
        <div className="bg-black text-white">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
            <div className="flex-1" />
            <p className="text-center text-xs sm:text-sm font-medium tracking-wide">
              Premium Wrist Watches &mdash; Manufacturer &amp; Supplier &nbsp;&middot;&nbsp; Pan India Delivery &nbsp;&middot;&nbsp; ISO Certified
            </p>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="text-white/60 hover:text-white transition-colors text-lg leading-none"
                aria-label="Dismiss"
              >
                &#x2715;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <button onClick={() => onNavigate('/')} className="flex items-baseline group flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-black uppercase group-hover:text-gray-700 transition-colors">HUKE</span>
              <span className="text-2xl md:text-3xl font-thin tracking-tight text-black uppercase ml-2 group-hover:text-gray-700 transition-colors">TIMES</span>
              <span className="text-xs font-medium text-gray-400 ml-2 tracking-widest">LLP</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-stretch h-full">
              {navigation.map((item) => {
                const active = isActiveSection(item);
                const isOpen = openDropdown === item.name;
                return (
                  <div key={item.name} className="relative flex items-stretch">
                    {item.path ? (
                      <button
                        onClick={() => onNavigate(item.path!)}
                        className={`relative flex items-center px-4 text-xs font-semibold tracking-widest transition-colors ${
                          active ? 'text-black' : 'text-gray-400 hover:text-black'
                        }`}
                      >
                        {item.name}
                        {active && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-black" />}
                      </button>
                    ) : (
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                        className={`relative flex items-center gap-1 px-4 text-xs font-semibold tracking-widest transition-colors ${
                          active || isOpen ? 'text-black' : 'text-gray-400 hover:text-black'
                        }`}
                      >
                        {item.name}
                        <FontAwesomeIcon icon={faChevronDown} size="xs" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        {(active || isOpen) && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-black" />}
                      </button>
                    )}
                    {item.dropdown && isOpen && (
                      <DropdownMenu
                        items={item.dropdown}
                        onNavigate={onNavigate}
                        onClose={() => setOpenDropdown(null)}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <button
              onClick={() => onNavigate('/contact')}
              className="hidden lg:flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors"
            >
              <FontAwesomeIcon icon={faBagShopping} size="sm" />
              REQUEST QUOTE
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FontAwesomeIcon icon={faXmark} size="xl" /> : <FontAwesomeIcon icon={faBars} size="xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e5e5e5] max-h-[80vh] overflow-y-auto">
            <div className="max-w-[1300px] mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const active = isActiveSection(item);
                const expanded = mobileExpanded === item.name;
                return (
                  <div key={item.name}>
                    {item.path ? (
                      <button
                        onClick={() => { onNavigate(item.path!); setMobileMenuOpen(false); }}
                        className={`w-full text-left py-3 px-4 text-xs font-bold tracking-widest uppercase transition-colors ${
                          active ? 'text-black bg-[#f5f5f5]' : 'text-gray-400 hover:text-black hover:bg-[#f5f5f5]'
                        }`}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => setMobileExpanded(expanded ? null : item.name)}
                          className={`w-full text-left py-3 px-4 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-between ${
                            active || expanded ? 'text-black bg-[#f5f5f5]' : 'text-gray-400 hover:text-black hover:bg-[#f5f5f5]'
                          }`}
                        >
                          {item.name}
                          <FontAwesomeIcon icon={faChevronDown} size="xs" className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                        {expanded && item.dropdown && (
                          <div className="bg-[#fafafa] border-l-2 border-black ml-4">
                            {item.dropdown.map(sub => (
                              <button
                                key={sub.path}
                                onClick={() => { onNavigate(sub.path); setMobileMenuOpen(false); setMobileExpanded(null); }}
                                className={`w-full text-left py-3 px-5 text-xs font-semibold tracking-wider uppercase transition-colors ${
                                  currentPath === sub.path ? 'text-black' : 'text-gray-500 hover:text-black'
                                }`}
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-[#e5e5e5] space-y-2">
                <button
                  onClick={() => { onNavigate('/contact'); setMobileMenuOpen(false); }}
                  className="w-full bg-black text-white font-bold py-3 px-4 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <FontAwesomeIcon icon={faBagShopping} size="sm" />
                  REQUEST QUOTE
                </button>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-black text-black font-bold py-3 px-4 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faCommentDots} size="sm" />
                  WHATSAPP US
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
