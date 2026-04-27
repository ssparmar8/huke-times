'use client';
import { useState, FormEvent } from 'react';
import { products } from '../data/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


export default function WarrantyRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productName: '',
    purchaseDate: '',
    purchaseChannel: '',
    orderNumber: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/mdaydpgz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          subject: `Warranty Registration – ${formData.productName} – ${formData.name}`,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', productName: '', purchaseDate: '', purchaseChannel: '', orderNumber: '' });
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const purchaseChannels = [
    'Huke Times Website',
    'Direct / Trade',
    'Indiamart',
    'TradeIndia',
    'Other',
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Warranty Registration</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Warranty Registration</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Register your Huke Times product to activate warranty
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[700px] mx-auto px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-16">
              <FontAwesomeIcon icon={faCircleCheck} className="text-black mx-auto mb-6 text-[56px]" />
              <h2 className="text-2xl font-black uppercase mb-3">Warranty Registered!</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                Your warranty has been successfully registered. You will receive a confirmation at the email address provided. Please retain your purchase receipt as proof of purchase.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-600 mb-10 leading-relaxed border-l-2 border-black pl-4">
                Register your Huke Times watch within <strong>30 days of purchase</strong> to activate your 1-year manufacturer warranty. Keep your purchase receipt as proof of purchase.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider mb-2">Email *</label>
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2">Product Name / Model *</label>
                  <select
                    name="productName" required value={formData.productName} onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm bg-white"
                  >
                    <option value="">Select a product</option>
                    {products.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider mb-2">Purchase Date *</label>
                    <input
                      type="date" name="purchaseDate" required value={formData.purchaseDate} onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider mb-2">Purchase Channel *</label>
                    <select
                      name="purchaseChannel" required value={formData.purchaseChannel} onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm bg-white"
                    >
                      <option value="">Select channel</option>
                      {purchaseChannels.map(ch => (
                        <option key={ch} value={ch}>{ch}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2">Order / Invoice Number</label>
                  <input
                    type="text" name="orderNumber" value={formData.orderNumber} onChange={handleChange}
                    placeholder="Optional"
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-black disabled:bg-gray-400 text-white font-black text-sm uppercase tracking-wider py-4 hover:bg-gray-800 transition-colors"
                >
                  {submitting ? 'Submitting…' : 'Register Warranty'}
                </button>
                {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
