'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

const included = [
  'Free site survey and written specification',
  'Full surface preparation to manufacturer standards',
  'Substrate-specific primer — correct product for your exact surface',
  'Minimum two full topcoats by professional spray equipment',
  'Masking and full property protection',
  'Silicone resealing in matched colour (where applicable)',
  'Quality inspection and sign-off',
  'Manufacturer warranty documentation (where applicable)',
  'COSHH assessment and method statement on commercial projects',
];

const residentialPricing = [
  { service: 'Kitchen Cabinet Spraying', rows: [{ label: 'Small kitchen (up to 10 doors)', price: '£975' }, { label: 'Medium kitchen (10–20 doors)', price: '£1,400' }, { label: 'Large kitchen (20–30 doors)', price: '£1,900' }] },
  { service: 'UPVC Window Spraying', rows: [{ label: 'Single window', price: '£275' }, { label: 'Bay or bow window', price: '£375' }] },
  { service: 'UPVC Door Spraying', rows: [{ label: 'Front or back door (single)', price: '£375' }, { label: 'Full house (all doors)', price: '£850' }] },
  { service: 'Conservatory Spraying', rows: [{ label: 'Standard (frames only)', price: '£1,199' }, { label: 'Conservatory inc. roof', price: '£1,699' }] },
  { service: 'Garage Door Spraying', rows: [{ label: 'Single up-and-over', price: '£850' }, { label: 'Double garage door', price: '£1,100' }] },
  { service: 'Exterior Sparying', rows: [{ label: 'Masonry exterior (per m²)', price: '£50/m²' }, { label: 'Fascia & Soffit (per metre)', price: '£75/m' }] },
];

const commercialPricing = [
  { service: 'Cladding Spraying', rows: [{ label: 'Steel / aluminium wall cladding (per m²)', price: '£50/m²' }, { label: 'Full building elevation', price: 'POA' }] },
  { service: 'Metal Roof Coating', rows: [{ label: 'Metal / corrugated roof (per m²)', price: '£99/m²' }, { label: 'Box profile / composite roof', price: '£99/m²' }] },
  { service: 'Warehouse & Industrial', rows: [{ label: 'Masonry industrial elevations (per m²)', price: '£50/m²' }, { label: 'Structural steelwork (per m²)', price: '£75/m²' }] },
  { service: 'Lift & Shutter Spraying', rows: [{ label: 'Roller shutter (commercial)', price: '£850' }, { label: 'Lift door set', price: '£299' }] },
];

const faqs = [
  { question: 'How much does spray coating cost?', answer: 'Sparta Coatings prices start from £150 for a domestic ceiling, £275 for a single UPVC window, £975 for a kitchen respray, £50/m² for cladding, and £99/m² for metal roof coating. All prices include full surface preparation.' },
  { question: 'Do your prices include surface preparation?', answer: 'Yes. All prices include full surface preparation to manufacturer standards — cleaning, degreasing, rust treatment, mechanical keying, and the correct substrate-specific primer.' },
  { question: 'Do you provide fixed-price quotations?', answer: 'Yes. Following a free site survey, we provide a written, fixed-price quotation with no hidden extras.' },
];

export default function PricingPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen text-white">
        
        {/* ═══════════════════ EDITORIAL HERO ═══════════════════ */}
        <section className="relative min-h-[80vh] flex flex-col justify-end pt-32 pb-24 px-4 sm:px-6 lg:px-12 border-b border-white/10">
          <div className="relative z-10 max-w-[1400px] w-full mx-auto">
            <motion.div initial="hidden" animate="show" variants={blockVariants} className="max-w-5xl">
              <h1 className="text-[10vw] sm:text-[8vw] lg:text-[7vw] leading-[0.85] font-display font-bold tracking-tighter mb-12 uppercase mix-blend-difference">
                Financial <br />
                <span className="italic text-[#b5955c]">Architecture.</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-white/80 font-light leading-snug max-w-4xl tracking-tight mb-8">
                Transparent cost guidelines for residential and commercial surface coating. 
              </p>
              <div className="flex flex-col sm:flex-row gap-6 border-t border-white/10 pt-8 mt-8">
                 <Link href="/contact" className="text-sm uppercase tracking-widest text-[#b5955c] hover:text-white transition-colors">Request a Formal Quote →</Link>
                 <a href="tel:07521229809" className="text-sm uppercase tracking-widest text-white/40 hover:text-white transition-colors">Speak to an Estimator</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ MANDATORY INCLUSIONS ═══════════════════ */}
        <section className="border-b border-white/10 section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 lg:sticky lg:top-32">01 / Mandatory Inclusions</h2>
                    <p className="text-white/40 font-light leading-relaxed max-w-sm">Every quotation is fixed-price and includes the following execution protocols as standard.</p>
                 </div>
                 <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
                      {included.map((item: string, i: number) => (
                        <div key={i} className="flex flex-col border-t border-white/10 pt-6">
                           <span className="text-xs uppercase text-white/20 mb-3 tracking-widest">Protocol {String(i + 1).padStart(2, '0')}</span>
                           <p className="text-white/80 font-light text-lg">{item}</p>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════════ RESIDENTIAL RATES ═══════════════════ */}
        <section className="border-b border-white/10 section-padding bg-[#050505]">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-24">02 / Residential Baselines</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
                {residentialPricing.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                     <h3 className="text-3xl font-display font-bold mb-8 uppercase tracking-tight">{item.service}</h3>
                     <div className="flex flex-col border-t border-white/10">
                        {item.rows.map((row, i) => (
                          <div key={i} className="flex justify-between items-center py-6 border-b border-white/10">
                            <span className="text-xl text-white/60 font-light">{row.label}</span>
                            <span className="text-3xl font-display font-bold text-white tracking-tighter">{row.price}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                ))}
              </div>

           </div>
        </section>

        {/* ═══════════════════ COMMERCIAL RATES ═══════════════════ */}
        <section className="border-b border-white/10 section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-24">03 / Commercial Indices</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
                {commercialPricing.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                     <h3 className="text-3xl font-display font-bold mb-8 uppercase tracking-tight">{item.service}</h3>
                     <div className="flex flex-col border-t border-white/10">
                        {item.rows.map((row, i) => (
                          <div key={i} className="flex justify-between items-center py-6 border-b border-white/10">
                            <span className="text-lg sm:text-xl text-white/60 font-light max-w-[60%]">{row.label}</span>
                            <span className="text-3xl font-display font-bold text-white tracking-tighter shrink-0">{row.price}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                ))}
              </div>

           </div>
        </section>

        {/* ═══════════════════ FAQS & CTA ═══════════════════ */}
        <section className="border-b border-white/10 section-padding bg-[#050505]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6">04 / Financial FAQ</h2>
                 </div>
                 <div className="lg:w-2/3">
                    <FAQAccordion faqs={faqs} />
                 </div>
              </div>
            </div>
        </section>

        <section className="section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="text-[8vw] sm:text-[6vw] font-display font-bold tracking-tighter text-white mb-12 uppercase">
                 Request <span className="italic text-[#b5955c]">Estimate.</span>
              </h2>
              <Link href="/contact" className="border border-[#b5955c] text-[#b5955c] hover:bg-[#b5955c] hover:text-black transition-colors px-12 py-6 text-sm uppercase tracking-[0.2em] inline-block font-medium">
                 Initiate Free Survey
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
