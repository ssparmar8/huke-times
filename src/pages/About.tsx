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
      <section className="relative bg-[#333333] text-white py-28 md:py-32 overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {companyInfo.legalName} - Manufacturer & Supplier from Rajkot, India
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {companyDescription.intro}
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our commitment to quality and desire for perfection fuel our journey in creating exceptional timepieces.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#333333]">
                {companyDescription.innovation.title}
              </h2>
              <ul className="space-y-5">
                {companyDescription.innovation.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={22} className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:border-[#333333] transition-all duration-500 hover:-translate-y-2">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#333333] p-6 rounded-2xl">
                    <Settings size={64} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold mb-3 text-[#333333]">Precision Engineering</h3>
                <p className="text-gray-600 text-lg">
                  Combining traditional craftsmanship with modern technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Watchmaking */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#333333]">
              {companyDescription.manufacturing.title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {companyDescription.manufacturing.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:border-[#333333] transition-all duration-500 hover:-translate-y-2 order-2 md:order-1">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#333333] p-6 rounded-2xl">
                    <Sparkles size={64} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold mb-3 text-[#333333]">Quality First</h3>
                <p className="text-gray-600 text-lg">
                  Every watch undergoes rigorous quality control
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#333333]">
                {companyDescription.quality.title}
              </h2>
              <ul className="space-y-5">
                {companyDescription.quality.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={22} className="text-[#333333] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#333333]">
            Company Details
          </h2>
          <div className="max-w-4xl mx-auto bg-white border-2 border-gray-100 rounded-3xl shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {companyDetails.map((detail, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-8 py-5 font-bold text-[#333333] border-r-2 border-gray-100">
                      {detail.label}
                    </td>
                    <td className="px-8 py-5 text-gray-700">{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-28 bg-[#333333] text-white overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Our Location</h2>
          <div className="text-xl text-gray-300 space-y-3">
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
