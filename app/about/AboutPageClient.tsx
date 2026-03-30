'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

const approvals = [
  { name: 'HD Sharmans', detail: 'Temadur 20/50 wall cladding systems; Seamsil cut-edge corrosion systems' },
  { name: 'Giromax', detail: 'BBA-certified polymer hybrid cladding and roof coating systems' },
  { name: 'Liquisil', detail: '25-year guaranteed silicone metal coating and roof systems' },
  { name: 'Kolorbond', detail: 'UPVC window, door, conservatory, fascia, and soffit coating systems' },
  { name: 'Tikkurila', detail: 'Helmi kitchen and furniture lacquers; Otex Akva adhesion systems' },
  { name: 'Jotun', detail: 'Industrial and structural steelwork coating systems' },
  { name: 'Sherwin-Williams', detail: 'Industrial, commercial, and intumescent fire protection systems' },
  { name: 'Rust-Oleum / Mathys', detail: 'Noxyde, CombiColor, Hard Hat, and Damp-Proof systems' },
];

const differentiators = [
  { title: 'Approved Applicator Status', desc: 'We hold approved applicator status with the UK\'s leading coating manufacturers across every category we work in. Every project is warranted by the manufacturer.' },
  { title: 'Substrate-First Approach', desc: 'UPVC windows get Kolorbond. Kitchen cabinets get Tikkurila Helmi. Cladding gets Temadur 20. Steel gets Jotun. The correct product for the correct surface — every time.' },
  { title: 'ISO 12944-Compliant Industrial Coatings', desc: 'For commercial and industrial projects, every coating system is specified to the correct ISO 12944 corrosivity category for the building\'s environment.' },
  { title: 'Full Documentation on Every Project', desc: 'Every project is supported by a method statement, COSHH assessment, surface preparation records, DFT readings where applicable, and a full sign-off document.' },
  { title: 'Safety Without Compromise', desc: 'All working-at-height operations are carried out in full compliance with the Work at Height Regulations 2005.' },
];

export default function AboutPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen text-white">
        
        {/* ═══════════════════ EDITORIAL HERO ═══════════════════ */}
        <section className="relative min-h-[70vh] flex flex-col justify-end pt-32 pb-24 px-4 sm:px-6 lg:px-12 border-b border-white/10">
          <div className="relative z-10 max-w-[1400px] w-full mx-auto">
            <motion.div initial="hidden" animate="show" variants={blockVariants} className="max-w-5xl">
              <h1 className="text-[12vw] sm:text-[9vw] lg:text-[8vw] leading-[0.85] font-display font-bold tracking-tighter mb-12 uppercase mix-blend-difference">
                Sparta <br />
                <span className="italic text-[#b5955c]">Coatings.</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-white/80 font-light leading-snug max-w-4xl tracking-tight mb-8">
                Specialist on-site contractors engineering permanent surface transformations across the UK.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ OUR MANIFESTO ═══════════════════ */}
        <section className="border-b border-white/10 section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6">01 / The Manifesto</h2>
                    <p className="text-white/40 font-light leading-relaxed max-w-sm">We are not painters. We are technical coating contractors specifying advanced polymers for exact substrates.</p>
                 </div>
                 <div className="lg:w-2/3">
                    <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-12">
                      Sparta Coatings was founded on a singular principle: that the UK&apos;s spray coating industry deserved a contractor that thoroughly understood the chemistry of the polymers it applied.
                    </p>
                    <p className="text-lg text-white/60 font-light leading-relaxed mb-6">
                      Every failure in surface coating stems from incorrect substrate preparation or the application of inappropriate products. We engineered a business designed to eliminate both of these variables entirely.
                    </p>
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                      Every operation we undertake is preceded by a rigorous condition survey. Every system is meticulously specified for its exact operational environment, ensuring a flawless visual result backed by structural longevity.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════════ TECHNICAL DIFFERENTIATORS ═══════════════════ */}
        <section className="border-b border-white/10 section-padding bg-[#050505]">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 lg:sticky lg:top-32">02 / Operational Standards</h2>
                 </div>
                 <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
                      {differentiators.map((d, i) => (
                        <div key={i} className="flex flex-col border-t border-white/10 pt-6">
                           <span className="text-xs uppercase text-white/20 tracking-widest mb-4">Standard 0{i+1}</span>
                           <h3 className="text-xl font-display font-medium text-white mb-4">{d.title}</h3>
                           <p className="text-white/60 font-light leading-relaxed">{d.desc}</p>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════════ APPROVED SYSTEMS ═══════════════════ */}
        <section className="border-b border-white/10 section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6">03 / Manufacturer Approvals</h2>
                    <p className="text-white/40 font-light max-w-sm">We undergo continuous auditing to maintain certified applicator status with the world&apos;s leading coating manufacturers.</p>
                 </div>
                 <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                      {approvals.map((a, i) => (
                        <div key={i} className="flex flex-col border-b border-white/5 pb-8">
                           <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">{a.name}</h3>
                           <p className="text-white/50 font-light">{a.detail}</p>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════════ CALL TO ACTION ═══════════════════ */}
        <section className="section-padding bg-[#050505]">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="text-[8vw] sm:text-[6vw] font-display font-bold tracking-tighter text-white mb-12 uppercase">
                 Commission <span className="italic text-[#b5955c]">Project.</span>
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
