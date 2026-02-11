import { useState, FormEvent } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, Truck, Briefcase, MapPin, Clock, Award, Send, User } from 'lucide-react';
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        productService: '',
        quantity: '',
        name: '',
        email: '',
        mobile: '',
        details: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#333333] text-white py-28 md:py-32 overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <MessageCircle size={18} />
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for any queries or bulk orders
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10 text-[#333333]">Send Enquiry</h2>
            {submitted && (
              <div className="mb-8 p-5 bg-green-50 border-2 border-green-300 text-green-800 rounded-3xl shadow-lg font-semibold">
                Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#333333] focus:border-transparent shadow-sm transition-all"
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#333333] focus:border-transparent shadow-sm"
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#333333] focus:border-transparent shadow-sm"
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#333333] focus:border-transparent shadow-sm"
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#333333] focus:border-transparent shadow-sm"
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
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#333333] focus:border-transparent shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#333333] hover:bg-[#444444] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>Submit Enquiry</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10 text-[#333333]">Contact Information</h2>
            
            {/* Contact Person */}
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 p-8 mb-8 hover:border-[#333333] transition-all duration-300">
              <h3 className="text-2xl font-extrabold mb-4 text-[#333333]">Contact Person</h3>
              <p className="text-gray-700 font-bold text-lg">Mr. Virat</p>
            </div>

            {/* Contact Details */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl shadow-lg p-8 mb-8 hover:border-[#333333] transition-all duration-300">
              <h3 className="text-2xl font-extrabold mb-6 text-[#333333]">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail size={20} className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#888888] text-sm">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-[#333333] hover:text-[#2C2C2C] font-semibold">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={20} className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#888888] text-sm">Phone</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-[#333333] hover:text-[#2C2C2C] font-semibold">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle size={20} className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
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
            <div className="bg-white border-2 border-gray-100 rounded-3xl shadow-sm p-6 mb-6">
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
                className="block w-full backdrop-blur-md bg-white/90 hover:bg-white border-2 border-[#333333] text-[#333333] font-bold py-4 px-6 rounded-lg transition text-center shadow-lg"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="block w-full backdrop-blur-md bg-[#333333] hover:bg-[#2C2C2C] text-white font-bold py-4 px-6 rounded-lg transition text-center shadow-lg"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Info Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#333333] text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <CheckCircle size={48} className="text-[#333333]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Quality Assured</h3>
              <p className="text-[#888888]">
                Thorough quality checks and premium materials
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck size={48} className="text-[#333333]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#333333]">Pan India Delivery</h3>
              <p className="text-[#888888]">
                We deliver across India with reliable logistics
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Briefcase size={48} className="text-[#333333]" />
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
