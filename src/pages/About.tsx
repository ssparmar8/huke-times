import { CheckCircle, Settings, Sparkles } from 'lucide-react';
import { companyInfo, companyDescription } from '../data/company';

export default function About() {
  const companyDetails = [
    { label: 'Nature of Business', value: companyInfo.natureOfBusiness },
    { label: 'Number of Employees', value: companyInfo.employees },
    { label: 'Year of Establishment', value: companyInfo.established },
    { label: 'Market Covered', value: companyInfo.marketCovered },
    { label: 'Name of CEO', value: companyInfo.ceos.join(' & ') },
    { label: 'Annual Turnover', value: companyInfo.annualTurnover },
    { label: 'Legal Status of Firm', value: companyInfo.legalStatus },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-[#B0B0B0]">
            {companyInfo.legalName} - Manufacturer & Supplier from Rajkot, India
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#B0B0B0] leading-relaxed mb-8">
              {companyDescription.intro}
            </p>
            <p className="text-lg text-[#B0B0B0] leading-relaxed">
              Our commitment to quality and desire for perfection fuel our journey in creating exceptional timepieces.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]">
                {companyDescription.innovation.title}
              </h2>
              <ul className="space-y-4">
                {companyDescription.innovation.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-[#1C1C1C] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#B0B0B0]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="backdrop-blur-lg bg-white/80 border border-white/20 p-12 rounded-lg shadow-sm hover:shadow-xl transition-all">
              <div className="text-center text-[#1C1C1C]">
                <div className="flex justify-center mb-4">
                  <Settings size={64} className="text-[#1C1C1C]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Precision Engineering</h3>
                <p className="text-[#B0B0B0]">
                  Combining traditional craftsmanship with modern technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Watchmaking */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]">
              {companyDescription.manufacturing.title}
            </h2>
            <p className="text-lg text-[#B0B0B0] leading-relaxed">
              {companyDescription.manufacturing.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-lg bg-white/80 border border-white/20 p-12 rounded-lg shadow-sm hover:shadow-xl transition-all order-2 md:order-1">
              <div className="text-center text-[#1C1C1C]">
                <div className="flex justify-center mb-4">
                  <Sparkles size={64} className="text-[#1C1C1C]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Quality First</h3>
                <p className="text-[#B0B0B0]">
                  Every watch undergoes rigorous quality control
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]">
                {companyDescription.quality.title}
              </h2>
              <ul className="space-y-4">
                {companyDescription.quality.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-[#1C1C1C] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#B0B0B0]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1C1C1C]">
            Company Details
          </h2>
          <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/80 border border-white/20 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody>
                {companyDetails.map((detail, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'}
                  >
                    <td className="px-6 py-4 font-semibold text-[#1C1C1C] border-r border-gray-100">
                      {detail.label}
                    </td>
                    <td className="px-6 py-4 text-[#B0B0B0]">{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Location</h2>
          <div className="text-lg text-[#B0B0B0] space-y-2">
            <p>{companyInfo.address.street}</p>
            <p>{companyInfo.address.area}</p>
            <p>
              {companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}
            </p>
            <p>{companyInfo.address.country}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
