'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

const services = [
  'Kitchen Cabinet Spraying', 'UPVC Window Spraying', 'UPVC Door Spraying',
  'Conservatory Spraying', 'Garage Door Spraying', 'Fascia & Soffit Spraying',
  'Gutter Spraying', 'House Exterior Spraying', 'Fence & Gate Spraying',
  'Ceiling Spraying', 'Cladding Spraying', 'Metal Roof Coating',
  'Warehouse / Industrial Spraying', 'Shop Front Spraying',
  'Steelwork Spraying', 'Lift Door Spraying', 'Other / Not Sure',
];

const sources = [
  'Google Search', 'Google Maps', 'Recommended by someone',
  'Facebook / Instagram', 'Checkatrade / Rated People',
  'Returning customer', 'Other',
];

interface Props {
  preselectedService?: string;
}

const inputClass =
  'w-full bg-[#0a0a0f]/50 border border-[#2a2a35] focus:border-[#c9a84c] rounded-xl px-4 py-3.5 text-white placeholder-[#6b6b7a] outline-none transition-all duration-300 text-sm focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)]';

export default function QuoteForm({ preselectedService }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xyzgpkbq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="glass-card rounded-2xl p-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgba(201,168,76,0.2)] to-[rgba(201,168,76,0.05)] flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={28} className="text-[#c9a84c]" />
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-2">Enquiry Received</h3>
        <p className="text-[#a0a0b0]">
          A member of the Sparta Coatings team will be in touch within 24 hours to arrange your free survey.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Full Name *</label>
          <input name="name" required type="text" placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Phone Number *</label>
          <input name="phone" required type="tel" placeholder="Your phone number" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Email Address *</label>
          <input name="email" required type="email" placeholder="your@email.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Postcode / Location *</label>
          <input name="postcode" required type="text" placeholder="e.g. SO14 1AB" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Service Required *</label>
        <select name="service" required defaultValue={preselectedService || ''} className={`${inputClass} appearance-none`}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => (<option key={s} value={s}>{s}</option>))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Tell us about your project *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe your project — surfaces, approximate size, preferred colours, access considerations..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#a0a0b0] mb-1.5 uppercase tracking-wider">How did you hear about us?</label>
        <select name="source" className={`${inputClass} appearance-none`}>
          <option value="">Select</option>
          {sources.map((s) => (<option key={s} value={s}>{s}</option>))}
        </select>
      </div>

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          <p className="text-red-400 text-sm">Something went wrong. Please call us on 07521 229809.</p>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-gold disabled:opacity-60 font-bold text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-2"
        whileHover={status !== 'submitting' ? { scale: 1.01 } : {}}
        whileTap={status !== 'submitting' ? { scale: 0.99 } : {}}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Request My Free Survey →'
        )}
      </motion.button>

      <p className="text-xs text-[#6b6b7a] text-center">
        We respect your privacy. Your details will never be shared with third parties.
      </p>
    </form>
  );
}
