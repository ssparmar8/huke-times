import { useState, FormEvent } from 'react';

const openings = [
  {
    title: 'Watch Assembly Technician',
    type: 'Full-time',
    location: 'Rajkot, Gujarat',
    description: 'Experienced in assembling and quality testing wrist watch movements and cases. Knowledge of quartz and mechanical mechanisms required.',
  },
  {
    title: 'Quality Control Inspector',
    type: 'Full-time',
    location: 'Rajkot, Gujarat',
    description: 'Responsible for inspecting finished watches against quality standards. Attention to detail and experience in precision manufacturing required.',
  },
  {
    title: 'Sales Executive — B2B',
    type: 'Full-time',
    location: 'Remote / Travel',
    description: 'Drive wholesale and bulk order sales across India. Experience in B2B sales in the watch or fashion accessories industry preferred.',
  },
  {
    title: 'Production Supervisor',
    type: 'Full-time',
    location: 'Rajkot, Gujarat',
    description: 'Oversee daily manufacturing operations, coordinate between assembly teams, and ensure production targets and quality standards are met.',
  },
];

interface CareersProps {
  onNavigate: (path: string) => void;
}

export default function Careers({ onNavigate }: CareersProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', message: '' });
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
          subject: `Job Application – ${formData.position} – ${formData.name}`,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', position: '', message: '' });
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-black text-white py-14">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 uppercase tracking-widest">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span>Careers</span>
          </div>
          <div className="flex items-start gap-4 flex-wrap">
            <h1 className="text-5xl md:text-6xl font-black uppercase">Careers</h1>
            <span className="mt-3 bg-white text-black text-xs font-black uppercase tracking-wider px-3 py-1">
              We're Hiring!
            </span>
          </div>
          <p className="text-gray-400 mt-3 text-sm uppercase tracking-wider">
            Join the Huke Times family
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5]">
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase tracking-wider mb-4">Our Culture</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                At Huke Times, we believe in precision — not just in our watches, but in everything we do. We are a team of passionate craftspeople and business professionals who take pride in creating watches that stand the test of time.
              </p>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase tracking-wider mb-4">What We Offer</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>— Competitive salary and benefits</li>
                <li>— Safe and respectful working environment</li>
                <li>— Skill development opportunities</li>
                <li>— Career growth within a growing company</li>
                <li>— Be part of a Made in India brand</li>
              </ul>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-sm font-black uppercase tracking-wider mb-4">Who We Look For</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>— Attention to detail and precision</li>
                <li>— Passion for quality craftsmanship</li>
                <li>— Team players with strong work ethic</li>
                <li>— Willingness to learn and grow</li>
                <li>— Honesty and accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Open Positions</h2>
          <div className="space-y-px">
            {openings.map(job => (
              <div key={job.title} className="bg-white p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wide">{job.title}</h3>
                  <div className="flex items-center gap-3 mt-1 mb-3">
                    <span className="text-xs text-gray-500">{job.type}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-500">{job.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xl">{job.description}</p>
                </div>
                <a
                  href="#apply"
                  className="flex-shrink-0 border border-black text-black text-xs font-black uppercase tracking-wider px-5 py-2 hover:bg-black hover:text-white transition-colors whitespace-nowrap self-start"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[700px] mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-black uppercase mb-8">Apply Now</h2>
          {submitted ? (
            <div className="text-center py-12 border border-[#e5e5e5]">
              <h3 className="text-lg font-black uppercase mb-2">Application Received!</h3>
              <p className="text-sm text-gray-600">Thank you for your interest. We will review your application and be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2">Phone *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider mb-2">Position Applied For *</label>
                  <select name="position" required value={formData.position} onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm bg-white">
                    <option value="">Select position</option>
                    {openings.map(j => <option key={j.title} value={j.title}>{j.title}</option>)}
                    <option value="General Application">General Application</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-2">Cover Letter / Message *</label>
                <textarea name="message" required value={formData.message} onChange={handleChange} rows={5}
                  placeholder="Tell us about yourself and why you'd like to join Huke Times..."
                  className="w-full px-4 py-3 border border-[#e5e5e5] focus:outline-none focus:border-black transition-colors text-sm" />
              </div>
              <button type="submit"
                disabled={submitting}
                className="w-full bg-black disabled:bg-gray-400 text-white font-black text-sm uppercase tracking-wider py-4 hover:bg-gray-800 transition-colors">
                {submitting ? 'Submitting…' : 'Submit Application'}
              </button>
              {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
