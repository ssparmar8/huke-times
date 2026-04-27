'use client';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCommentDots, faCircleCheck, faTruck, faBriefcase, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { companyInfo } from '../data/company';
import { products } from '../data/products';

export default function Contact() {
  const [formData, setFormData] = useState({
    productService: '',
    quantity: '',
    name: '',
    email: '',
    mobile: '',
    details: '',
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
          subject: `New Enquiry from ${formData.name} – ${formData.productService}`,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
        setFormData({ productService: '', quantity: '', name: '', email: '', mobile: '', details: '' });
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">Contact Us</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Get in touch for queries or bulk orders
          </p>
        </div>
      </section>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10 text-[#333333]">Send Enquiry</h2>
            {submitted && (
              <div className="mb-8 p-5 bg-black text-white font-semibold">
                ✓ Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="mb-8 p-5 border border-red-400 text-red-700 text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="productService" className="block text-sm font-medium text-[#333333] mb-2">
                  Product/Service Looking for *
                </label>
                <select
                  id="productService"
                  name="productService"
                  required
                  value={formData.productService}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-[#333333] mb-2">
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 2000 pieces"
                  className="w-full px-4 py-3 bg-white border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-[#333333] mb-2">
                  Mobile with country code *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-3 bg-white border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-[#333333] mb-2">
                  Enquiry Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  value={formData.details}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Please provide details about your requirements..."
                  className="w-full px-4 py-3 bg-white border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black text-sm uppercase tracking-wider py-4 px-6 transition-colors flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                <span>{submitting ? 'Sending…' : 'Submit Enquiry'}</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10 text-[#333333]">Contact Information</h2>
            
            {/* Contact Person */}
            <div className="bg-white border border-[#e5e5e5] p-8 mb-8">
              <h3 className="text-lg font-black uppercase mb-4 tracking-wider">Contact Person</h3>
              <p className="text-gray-700 font-bold text-lg">Mr. Virat</p>
            </div>

            {/* Contact Details */}
            <div className="bg-white border border-[#e5e5e5] p-8 mb-8">
              <h3 className="text-lg font-black uppercase mb-6 tracking-wider">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#888888] text-sm">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-[#333333] hover:text-[#2C2C2C] font-semibold">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faPhone} size="lg" className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#888888] text-sm">Phone</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-[#333333] hover:text-[#2C2C2C] font-semibold">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCommentDots} size="lg" className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#888888] text-sm">WhatsApp</div>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333333] hover:text-[#2C2C2C] font-semibold"
                    >
                      {companyInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white border border-[#e5e5e5] p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#333333]">Our Address</h3>
              <div className="text-[#888888] space-y-2">
                <p className="font-semibold text-[#333333]">{companyInfo.legalName}</p>
                <p>{companyInfo.address.street}</p>
                <p>{companyInfo.address.area}</p>
                <p>{companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}</p>
                <p>{companyInfo.address.country}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-[#f5f5f5] border border-black text-black font-black text-sm uppercase tracking-wider py-4 px-6 transition text-center"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="block w-full bg-black hover:bg-gray-800 text-white font-black text-sm uppercase tracking-wider py-4 px-6 transition text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Info Section */}
      <section className="py-16 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#333333] text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white border border-[#e5e5e5] p-8">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faCircleCheck} size="3x" className="text-[#333333]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Quality Assured</h3>
              <p className="text-[#888888]">
                Thorough quality checks and premium materials
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faTruck} size="3x" className="text-[#333333]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Pan India Delivery</h3>
              <p className="text-[#888888]">
                We deliver across India with reliable logistics
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faBriefcase} size="3x" className="text-[#333333]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Bulk Orders</h3>
              <p className="text-[#888888]">
                Competitive pricing for wholesale and bulk orders
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
