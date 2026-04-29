'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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


function DropdownMenu({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <div className="absolute top-full left-0 mt-0 min-w-[220px] bg-[#111111] border border-white/10 shadow-2xl z-50">
      {items.map(item => (
        <Link
          key={item.path}
          href={item.path}
          onClick={onClose}
          className={`w-full text-left px-5 py-3.5 text-[11px] font-semibold uppercase tracking-widest transition-colors border-b border-white/5 last:border-b-0 flex items-center gap-2 group ${
            pathname === item.path
              ? 'text-white bg-white/10'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-colors flex-shrink-0" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
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
    if (item.path) return pathname === item.path;
    return item.dropdown?.some(d => pathname === d.path) ?? false;
  };

  return (
    <header className="sticky top-0 z-50" ref={headerRef}>

      {/* Announcement Bar */}
      {announcementVisible && (
        <div className="bg-white border-b border-[#e5e5e5]">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
            <div className="flex-1" />
            <p className="text-center text-[11px] text-gray-500 font-medium tracking-widest uppercase">
              Premium Wrist Watches &nbsp;&bull;&nbsp; Manufacturer &amp; Supplier &nbsp;&bull;&nbsp; Pan India Delivery &nbsp;&bull;&nbsp; ISO Certified
            </p>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="text-gray-300 hover:text-gray-600 transition-colors text-sm leading-none"
                aria-label="Dismiss"
              >
                &#x2715;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="Huke Times LLP"
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-stretch h-full">
              {navigation.map((item) => {
                const active = isActiveSection(item);
                const isOpen = openDropdown === item.name;
                return (
                  <div key={item.name} className="relative flex items-stretch">
                    {item.path ? (
                      <Link
                        href={item.path}
                        className={`relative flex items-center px-4 text-[11px] font-bold tracking-widest transition-colors ${
                          active ? 'text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {item.name}
                        {active && <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-white" />}
                      </Link>
                    ) : (
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                        className={`relative flex items-center gap-1.5 px-4 text-[11px] font-bold tracking-widest transition-colors ${
                          active || isOpen ? 'text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {item.name}
                        <FontAwesomeIcon icon={faChevronDown} size="xs" className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        {(active || isOpen) && <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-white" />}
                      </button>
                    )}
                    {item.dropdown && isOpen && (
                      <DropdownMenu
                        items={item.dropdown}
                        onClose={() => setOpenDropdown(null)}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-200"
            >
              <FontAwesomeIcon icon={faBagShopping} size="sm" />
              REQUEST QUOTE
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FontAwesomeIcon icon={faXmark} size="xl" /> : <FontAwesomeIcon icon={faBars} size="xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 max-h-[80vh] overflow-y-auto bg-[#0a0a0a]">
            <div className="max-w-[1300px] mx-auto px-4 py-4 space-y-0.5">
              {navigation.map((item) => {
                const active = isActiveSection(item);
                const expanded = mobileExpanded === item.name;
                return (
                  <div key={item.name}>
                    {item.path ? (
                      <Link
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`w-full text-left py-3.5 px-4 text-[11px] font-bold tracking-widest uppercase transition-colors flex items-center gap-3 ${
                          active ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${active ? 'bg-white' : 'bg-white/20'}`} />
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => setMobileExpanded(expanded ? null : item.name)}
                          className={`w-full text-left py-3.5 px-4 text-[11px] font-bold tracking-widest uppercase transition-colors flex items-center justify-between ${
                            active || expanded ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${active || expanded ? 'bg-white' : 'bg-white/20'}`} />
                            {item.name}
                          </span>
                          <FontAwesomeIcon icon={faChevronDown} size="xs" className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                        {expanded && item.dropdown && (
                          <div className="border-l border-white/10 ml-6 mb-1">
                            {item.dropdown.map(sub => (
                              <Link
                                key={sub.path}
                                href={sub.path}
                                onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }}
                                className={`w-full text-left py-3 px-5 text-[10px] font-semibold tracking-wider uppercase transition-colors block ${
                                  pathname === sub.path ? 'text-white' : 'text-gray-500 hover:text-white'
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full border border-white/20 hover:bg-white hover:text-black text-white font-bold py-3 px-4 text-[11px] tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faBagShopping} size="sm" />
                  REQUEST QUOTE
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

