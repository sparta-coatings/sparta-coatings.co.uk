'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';

const residentialServices = [
  { slug: 'kitchen-cabinet-spraying', name: 'Kitchen Cabinet Spraying', desc: 'Flawless lacquered finishes for bespoke kitchens.' },
  { slug: 'upvc-window-spraying', name: 'UPVC Window Spraying', desc: 'Factory-grade Kolorbond applications.' },
  { slug: 'conservatory-spraying', name: 'Conservatory Spraying', desc: 'Complete structural rejuvenation.' },
  { slug: 'house-exterior-spraying', name: 'Exterior Elevation Spraying', desc: 'Transformative rendering and brick coating.' },
];

const commercialServices = [
  { slug: 'cladding-spraying', name: 'Cladding Panel Spraying', desc: '10-25 year manufacturer backed resprays.' },
  { slug: 'warehouse-industrial-spraying', name: 'Industrial Units', desc: 'Full-scale structural steelwork and elevations.' },
  { slug: 'shop-front-spraying', name: 'Retail Shop Fronts', desc: 'Overnight transformations for high street brands.' },
  { slug: 'metal-roof-coating', name: 'Metal Roof Systems', desc: 'Seamsil cut-edge treatment & full coatings.' },
];

const staggerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16 px-4 sm:px-6 lg:px-16 xl:px-24 bg-white">
          
          {/* Background Structural Image */}
          <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[50vh] lg:h-full overflow-hidden opacity-90 z-0">
             <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-white via-white/40 to-transparent z-10" />
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" 
               alt="Modern bright architectural space" 
               className="w-full h-full object-cover"
             />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-start bg-white/60 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0 rounded-xl lg:rounded-none shadow-2xl lg:shadow-none">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[2px] bg-[#b5955c]" />
              <p className="text-[#b5955c] tracking-[0.2em] uppercase text-xs font-bold">Approved Applicators UK</p>
            </motion.div>

            <motion.h1 
              className="text-[12vw] sm:text-[9vw] lg:text-[7vw] leading-[0.9] font-display font-bold text-gray-900 mb-8 tracking-tighter"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              ARCHITECTURAL <br />
              <span className="text-gray-300">SURFACE</span> COATING.
            </motion.h1>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 w-full items-start lg:items-end justify-between mt-8 lg:mt-auto">
              <motion.p 
                className="text-gray-600 text-lg sm:text-xl max-w-2xl font-medium leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                We execute flawless factory-grade spray applications for residential and industrial properties. Specialising in cladding, structural steel, and bespoke UPVC restorations.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link href="/contact" className="btn-gold px-12 py-5 w-full sm:w-auto text-center font-bold tracking-[0.2em]">
                  REQUEST SURVEY
                </Link>
              </motion.div>
            </div>
            
          </div>
        </section>

        <div className="border-t border-b border-gray-200 bg-gray-50 py-8">
          <TrustBar />
        </div>

        {/* ═══════════════════ SERVICES OVERVIEW ═══════════════════ */}
        <section className="py-[6rem] lg:py-[10rem] bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
            
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
              
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-gray-900 mb-6 font-display">Expertise & <br />Discipline</h2>
                  <div className="w-16 h-[3px] bg-[#b5955c] mb-10" />
                  <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">
                    Our capabilities span the full architectural spectrum. From high-street retail facades requiring overnight 
                    transformations to luxury residential kitchens demanding sub-millimetre precision.
                  </p>
                  <Link href="/services" className="text-[#b5955c] uppercase tracking-[0.2em] text-[11px] font-bold hover:text-gray-900 transition-colors flex items-center gap-3">
                    View Complete Capabilities <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:w-2/3 flex flex-col gap-24">
                
                <motion.div variants={staggerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-10 pb-4 border-b border-gray-200">01 — Residential</h3>
                  <div className="flex flex-col">
                    {residentialServices.map((service, i) => (
                      <motion.div key={i} variants={itemVariants}>
                        <Link href={`/services/${service.slug}`} className="group block py-8 border-b border-gray-100 hover:border-[#b5955c] transition-colors">
                          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                            <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-[#b5955c] transition-colors">{service.name}</h4>
                            <p className="text-gray-500 text-sm font-medium">{service.desc}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={staggerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-10 pb-4 border-b border-gray-200">02 — Commercial & Industrial</h3>
                  <div className="flex flex-col">
                    {commercialServices.map((service, i) => (
                      <motion.div key={i} variants={itemVariants}>
                        <Link href={`/services/${service.slug}`} className="group block py-8 border-b border-gray-100 hover:border-[#b5955c] transition-colors">
                          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                            <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-[#b5955c] transition-colors">{service.name}</h4>
                            <p className="text-gray-500 text-sm font-medium">{service.desc}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════ PROOF / MINIMAL IMAGE BREAK ═══════════════════ */}
        <section className="h-[60vh] w-full relative overflow-hidden bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
            alt="Commercial coating" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white text-center">
              Precision delivered at <br/><span className="text-[#b5955c] italic pr-4">commercial scale.</span>
            </h2>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
