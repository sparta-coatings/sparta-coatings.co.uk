'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const residential = [
  { slug: 'kitchen-cabinet-spraying', name: 'Kitchen Cabinet Spraying', tagline: 'A factory-smooth, durable finish on your existing kitchen.', price: 'From £975', products: 'Tikkurila Helmi, Morrells' },
  { slug: 'upvc-window-spraying', name: 'UPVC Window Spraying', tagline: 'Transform tired white UPVC frames with a Kolorbond finish.', price: 'From £275', products: 'Kolorbond (10-yr guarantee)' },
  { slug: 'upvc-door-spraying', name: 'UPVC Door Spraying', tagline: 'Refresh or transform your UPVC doors.', price: 'From £375', products: 'Kolorbond (10-yr guarantee)' },
  { slug: 'conservatory-spraying', name: 'Conservatory Spraying', tagline: 'Full UPVC and aluminium frame respray — including the roof.', price: 'From £1,199', products: 'Kolorbond throughout' },
  { slug: 'garage-door-spraying', name: 'Garage Door Spraying', tagline: 'All materials resprayed in any colour with rust treatment.', price: 'From £850', products: 'Kolorbond, Rust-Oleum 2K' },
  { slug: 'fascia-soffit-spraying', name: 'Fascia & Soffit Spraying', tagline: 'Resprayed without removal.', price: 'From £75/m', products: 'Kolorbond, Rust-Oleum' },
  { slug: 'gutter-spraying', name: 'Gutter Spraying', tagline: 'UPVC and cast iron guttering resprayed on-site.', price: 'From £69.99/m', products: 'Kolorbond, Rust-Oleum CombiColor' },
  { slug: 'house-exterior-spraying', name: 'House Exterior Spraying', tagline: 'Professional masonry and render systems for the full exterior.', price: 'From £50/m²', products: 'Dulux Trade, Tikkurila Facade' },
  { slug: 'fence-gate-spraying', name: 'Fence & Gate Spraying', tagline: 'Metal fencing, gates, and railings precision sprayed.', price: 'From £69.99/m²', products: 'Manor ZP24, Rust-Oleum Hard Hat' },
  { slug: 'ceiling-spraying', name: 'Ceiling Spraying', tagline: 'Smooth, fast, and uniform domestic and commercial ceiling resprays.', price: 'From £150', products: 'Dulux Trade Diamond Matt' },
];

const commercial = [
  { slug: 'cladding-spraying', name: 'Cladding Spraying', tagline: 'HD Sharmans Temadur, Giromax, and Liquisil approved systems.', price: 'From £50/m²', products: 'HD Sharmans, Giromax, Liquisil' },
  { slug: 'metal-roof-coating', name: 'Metal Roof Coating', tagline: 'BBA-certified elastomeric systems for metal roofs.', price: 'From £99/m²', products: 'Rust-Oleum Noxyde, Permagard' },
  { slug: 'warehouse-industrial-spraying', name: 'Warehouse & Industrial', tagline: 'ISO 12944-compliant coating systems for steel cladding and masonry.', price: 'From £75/m²', products: 'Jotun, Sherwin-Williams, Rust-Oleum' },
  { slug: 'shop-front-spraying', name: 'Shop Front Spraying', tagline: 'Aluminium, stainless, UPVC, powder-coat out-of-hours service.', price: 'POA', products: '2K Etch Primer, Rust-Oleum Hard Hat' },
  { slug: 'steelwork-spraying', name: 'Steelwork Spraying', tagline: 'Structural steelwork and intumescent fire protection.', price: 'From £75/m²', products: 'Jotun Jotamastic, Sherwin-Williams' },
  { slug: 'lift-door-spraying', name: 'Lift Door Spraying', tagline: 'Lift doors resprayed overnight to minimise disruption.', price: 'From £299 per set', products: '2K Etch Primer, Rust-Oleum Hard Hat 2K PU' },
];

// Reusable card for services index
function ServiceCard({ s, number }: { s: typeof residential[0], number: string }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group block border border-white/10 p-6 sm:p-8 hover:bg-white/[0.02] transition-colors relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-16">
        <span className="text-xs uppercase tracking-widest text-[#b5955c]">{number}</span>
        <ArrowRight size={18} className="text-white/20 group-hover:text-white transition-colors duration-500 group-hover:translate-x-1" />
      </div>
      <h3 className="text-2xl sm:text-3xl font-display tracking-tight text-white mb-4 group-hover:text-[#b5955c] transition-colors">
        {s.name}
      </h3>
      <p className="text-white/50 font-light text-sm mb-8 line-clamp-2">
        {s.tagline}
      </p>
      <div className="flex justify-between items-end border-t border-white/10 pt-4">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Pricing Guide</span>
          <span className="text-white font-medium">{s.price}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Approved Systems</span>
          <span className="text-white/60 text-xs">{s.products}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        
        {/* Header */}
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-12 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-[12vw] sm:text-[8vw] lg:text-[7vw] leading-[0.85] font-display text-white mb-8 tracking-tighter uppercase mix-blend-difference">
                Technical <br />
                <span className="text-[#b5955c] italic pr-4">Capabilities.</span>
              </h1>
              <p className="text-white/60 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
                Professional architectural surface coating protocols for residential and industrial infrastructures. 
                Executed by fully insured, manufacturer-approved applicators.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commercial Grid */}
        <section className="border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start justify-between">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
                01 — Commercial <br/><span className="text-white/40">& Industrial</span>
              </h2>
              <p className="max-w-md text-white/50 font-light leading-relaxed">
                ISO 12944-compliant coating systems engineered for scale. Backed by extensive manufacturer warranties.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
              {commercial.map((s, idx) => (
                <div key={s.slug} className="border-r border-b border-white/10 -ml-[1px] -mt-[1px]">
                  <ServiceCard s={s} number={`C.${String(idx + 1).padStart(2, '0')}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential Grid */}
        <section className="border-b border-white/10 bg-black">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start justify-between">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
                02 — Residential <br/><span className="text-white/40">Properties</span>
              </h2>
              <p className="max-w-md text-white/50 font-light leading-relaxed">
                Bespoke exterior and interior finishings, providing a flawless factory-grade appearance for private residencies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
              {residential.map((s, idx) => (
                <div key={s.slug} className="border-r border-b border-white/10 -ml-[1px] -mt-[1px]">
                  <ServiceCard s={s} number={`R.${String(idx + 1).padStart(2, '0')}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
