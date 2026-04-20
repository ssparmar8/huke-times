import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { companyInfo, companyDescription } from '../data/company';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const companyDetails = [
    { label: 'Nature of Business', value: companyInfo.natureOfBusiness },
    { label: 'Number of Employees', value: companyInfo.employees },
    { label: 'Year of Establishment', value: String(companyInfo.established) },
    { label: 'Market Covered', value: companyInfo.marketCovered },
    { label: 'Name of CEO', value: companyInfo.ceos.join(' & ') },
    { label: 'Annual Turnover', value: companyInfo.annualTurnover },
    { label: 'Legal Status of Firm', value: companyInfo.legalStatus },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14 relative" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1728582543415-f3acc737f1fe?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase">About Us</h1>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            {companyInfo.legalName} &mdash; Manufacturer &amp; Supplier from Rajkot, India
          </p>
        </div>
      </section>

      {/* Workmanship 3-Col */}
      <section className="bg-white border-b border-[#e5e5e5] py-20">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase">HUKE'S WORKMANSHIP</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5]">
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase mb-4 tracking-wider">Who We Are</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{companyDescription.intro}</p>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase mb-4 tracking-wider">{companyDescription.innovation.title}</h3>
              <ul className="space-y-3">
                {companyDescription.innovation.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCircleCheck} size="sm" className="text-black mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase mb-4 tracking-wider">{companyDescription.quality.title}</h3>
              <ul className="space-y-3">
                {companyDescription.quality.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCircleCheck} size="sm" className="text-black mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-20 bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
              {companyDescription.manufacturing.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{companyDescription.manufacturing.description}</p>
          </div>
        </div>
      </section>

      {/* Company Details Table */}
      <section className="py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12">
            Company Details
          </h2>
          <div className="max-w-3xl mx-auto border border-[#e5e5e5]">
            <table className="w-full">
              <tbody>
                {companyDetails.map((detail, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#f5f5f5]' : 'bg-white'}>
                    <td className="px-6 py-4 font-bold text-black border-r border-[#e5e5e5] text-sm uppercase tracking-wide w-1/2">
                      {detail.label}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Location Strip */}
      <section className="bg-black text-white py-16 relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1568154106189-717dc85b0a3b?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase mb-6">Our Location</h2>
          <div className="text-gray-400 text-sm space-y-1.5 uppercase tracking-wider">
            <p>{companyInfo.address.street}</p>
            <p>{companyInfo.address.area}</p>
            <p>
              {companyInfo.address.city}, {companyInfo.address.state} &mdash; {companyInfo.address.pincode}
            </p>
            <p>{companyInfo.address.country}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
