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
      <section className="relative bg-[#1C1C1C] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <MessageCircle size={16} />
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-[#B0B0B0] max-w-3xl mx-auto">
              Get in touch with us for any queries or bulk orders
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#1C1C1C]">Send Enquiry</h2>
            {submitted && (
              <div className="mb-6 p-4 backdrop-blur-lg bg-green-50/90 border border-green-300/50 text-green-700 rounded-lg shadow-lg">
                Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="productService" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Product/Service Looking for *
                </label>
                <select
                  id="productService"
                  name="productService"
                  required
                  value={formData.productService}
                  onChange={handleChange}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#1C1C1C] focus:border-transparent shadow-sm"
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
                <label htmlFor="quantity" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 2000 pieces"
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#1C1C1C] focus:border-transparent shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#1C1C1C] focus:border-transparent shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#1C1C1C] focus:border-transparent shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-[#1C1C1C] mb-2">
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
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#1C1C1C] focus:border-transparent shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-[#1C1C1C] mb-2">
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
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/40 rounded-lg focus:ring-2 focus:ring-[#1C1C1C] focus:border-transparent shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full backdrop-blur-md bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-4 px-6 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#1C1C1C]">Contact Information</h2>
            
            {/* Contact Person */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#1C1C1C]">Contact Person</h3>
              <p className="text-[#B0B0B0] font-semibold">Mr. Virat</p>
            </div>

            {/* Contact Details */}
            <div className="backdrop-blur-lg bg-white/80 border border-white/20 rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#1C1C1C]">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail size={20} className="text-[#1C1C1C] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#B0B0B0] text-sm">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-[#1C1C1C] hover:text-[#2C2C2C] font-semibold">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={20} className="text-[#1C1C1C] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#B0B0B0] text-sm">Phone</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-[#1C1C1C] hover:text-[#2C2C2C] font-semibold">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle size={20} className="text-[#1C1C1C] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#B0B0B0] text-sm">WhatsApp</div>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C1C1C] hover:text-[#2C2C2C] font-semibold"
                    >
                      {companyInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="backdrop-blur-lg bg-white/80 border border-white/20 rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#1C1C1C]">Our Address</h3>
              <div className="text-[#B0B0B0] space-y-2">
                <p className="font-semibold text-[#1C1C1C]">{companyInfo.legalName}</p>
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
                className="block w-full backdrop-blur-md bg-white/90 hover:bg-white border-2 border-[#1C1C1C] text-[#1C1C1C] font-bold py-4 px-6 rounded-lg transition text-center shadow-lg"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="block w-full backdrop-blur-md bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-4 px-6 rounded-lg transition text-center shadow-lg"
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
          <h2 className="text-3xl font-bold mb-8 text-[#1C1C1C] text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center backdrop-blur-lg bg-white/80 border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <CheckCircle size={48} className="text-[#1C1C1C]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1C1C1C]">Quality Assured</h3>
              <p className="text-[#B0B0B0]">
                Thorough quality checks and premium materials
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck size={48} className="text-[#1C1C1C]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1C1C1C]">Pan India Delivery</h3>
              <p className="text-[#B0B0B0]">
                We deliver across India with reliable logistics
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Briefcase size={48} className="text-[#1C1C1C]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1C1C1C]">Bulk Orders</h3>
              <p className="text-[#B0B0B0]">
                Competitive pricing for wholesale and bulk orders
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
