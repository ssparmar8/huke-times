import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    category: 'Orders & Shipping',
    items: [
      { q: 'What is the minimum order quantity?', a: 'Our minimum order quantity varies by product. For wrist watches, the MOQ is typically 500–2000 pieces. Contact us for specific product MOQs.' },
      { q: 'Do you offer pan-India delivery?', a: 'Yes, we deliver across India through reliable logistics partners. Delivery timelines vary by location, typically 5–10 business days.' },
      { q: 'Is shipping free?', a: 'Shipping charges depend on order size and destination. For bulk orders above a certain threshold, we offer free shipping. Contact us for details.' },
      { q: 'Can I track my order?', a: 'Yes, once your order is dispatched, you will receive a tracking number via email and WhatsApp.' },
    ],
  },
  {
    category: 'Returns & Refunds',
    items: [
      { q: 'What is your return policy?', a: 'We accept returns within 7 days of delivery for manufacturing defects. Products must be in original, unused condition with packaging intact.' },
      { q: 'How do I initiate a return?', a: 'Contact us via email at huketimes@gmail.com or WhatsApp within 7 days of receiving your order. Include your order details and photographs of the defect.' },
      { q: 'When will I receive my refund?', a: 'Refunds are processed within 7–10 business days after we receive and inspect the returned products.' },
    ],
  },
  {
    category: 'Warranty',
    items: [
      { q: 'What warranty do your watches come with?', a: 'All Huke Times watches come with a 1-year manufacturer warranty covering defects in materials and workmanship.' },
      { q: 'What does the warranty cover?', a: 'The warranty covers manufacturing defects, movement issues, and component failures under normal use. It does not cover physical damage, water damage beyond the stated resistance, or battery replacement.' },
      { q: 'How do I claim warranty?', a: 'Contact us with proof of purchase, product details, and a description/photographs of the issue. We will guide you through the warranty claim process.' },
    ],
  },
  {
    category: 'Watch Care',
    items: [
      { q: 'How should I clean my watch?', a: 'Use a soft, dry or slightly damp cloth to wipe the case and strap. Avoid harsh chemicals or abrasive materials. For metal bracelets, a soft toothbrush with mild soapy water can be used.' },
      { q: 'Is my watch water resistant?', a: 'Water resistance varies by model. Check the product specifications for your watch\'s water resistance rating. Unless stated otherwise, avoid submerging in water.' },
      { q: 'How often should I service my watch?', a: 'We recommend servicing your mechanical or automatic watch every 3–5 years. Quartz watches typically need battery replacement every 1–3 years.' },
    ],
  },
  {
    category: 'Payment & Pricing',
    items: [
      { q: 'What payment methods do you accept?', a: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI, cheques, and demand drafts for bulk orders. Contact us to discuss payment terms for large orders.' },
      { q: 'Do you offer bulk pricing?', a: 'Yes, we offer competitive pricing for bulk and wholesale orders. The price per unit decreases with higher order quantities. Contact us for a custom quote.' },
      { q: 'Do you offer credit terms for regular buyers?', a: 'We offer credit terms to established business partners based on order history and creditworthiness. Get in touch to discuss terms.' },
    ],
  },
];

interface FAQsProps {
  onNavigate: (path: string) => void;
}

export default function FAQs({ onNavigate }: FAQsProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span>FAQs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">FAQs</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Frequently asked questions
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {faqs.map(section => (
            <div key={section.category} className="mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-6 pb-3 border-b border-[#e5e5e5]">
                {section.category}
              </h2>
              <div className="space-y-0">
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={key} className="border-b border-[#e5e5e5]">
                      <button
                        className="w-full flex items-center justify-between py-5 text-left"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen ? true : false}
                        aria-controls={`faq-answer-${key}`}
                      >
                        <span className="text-sm font-bold text-black pr-4">{item.q}</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          size="1x"
                          className={`flex-shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div id={`faq-answer-${key}`} role="region" className="pb-5">
                          <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions strip */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black uppercase mb-3">Still Have Questions?</h2>
          <p className="text-gray-400 text-sm mb-6">Our team is happy to help with any queries not covered above.</p>
          <a
            href="mailto:huketimes@gmail.com"
            className="inline-block bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
