'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import ProcessSteps from '@/components/ProcessSteps';
import FAQAccordion from '@/components/FAQAccordion';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';
import { use } from 'react';

type ServiceVisual = {
   src: string;
   alt: string;
};

const DEFAULT_HERO: ServiceVisual = {
   src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop',
   alt: 'Freshly coated modern property exterior',
};

const SERVICE_HERO_IMAGES: Record<string, ServiceVisual> = {
   'kitchen-cabinet-spraying': {
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2670&auto=format&fit=crop',
      alt: 'Modern kitchen cabinetry with premium painted finish',
   },
   'upvc-window-spraying': {
      src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2670&auto=format&fit=crop',
      alt: 'Exterior window frames on contemporary residential property',
   },
   'upvc-door-spraying': {
      src: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2670&auto=format&fit=crop',
      alt: 'Front entrance door and frame on a modern UK home',
   },
   'conservatory-spraying': {
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop',
      alt: 'Bright glazed conservatory extension with clean exterior frames',
   },
   'garage-door-spraying': {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
      alt: 'Contemporary property with integrated garage frontage',
   },
   'fascia-soffit-spraying': {
      src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop',
      alt: 'Residential roofline detail with fascia and soffit profiles',
   },
   'gutter-spraying': {
      src: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2670&auto=format&fit=crop',
      alt: 'Roof edge and rainwater guttering on house exterior',
   },
   'house-exterior-spraying': {
      src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop',
      alt: 'Complete home exterior in freshly finished neutral tones',
   },
   'fence-gate-spraying': {
      src: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2670&auto=format&fit=crop',
      alt: 'Decorative external gate and fencing in dark coated finish',
   },
   'ceiling-spraying': {
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2670&auto=format&fit=crop',
      alt: 'Clean interior ceiling and walls with uniform paint finish',
   },
   'cladding-spraying': {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
      alt: 'Commercial building elevation with modern metal cladding',
   },
   'metal-roof-coating': {
      src: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=2670&auto=format&fit=crop',
      alt: 'Metal roofing profile on industrial property',
   },
   'warehouse-industrial-spraying': {
      src: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=2670&auto=format&fit=crop',
      alt: 'Large industrial interior with structural steel and warehouse scale',
   },
   'shop-front-spraying': {
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2670&auto=format&fit=crop',
      alt: 'Contemporary retail frontage and glazed commercial entrance',
   },
   'steelwork-spraying': {
      src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=2670&auto=format&fit=crop',
      alt: 'Industrial steelwork and architectural metal structures',
   },
   'lift-door-spraying': {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop',
      alt: 'Commercial interior corridor with lift door bays',
   },
};

const blockVariants = {
   hidden: { opacity: 0, y: 30 },
   show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

export default function ServicePageClient({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = use(params);
   const service = getServiceBySlug(slug);
   if (!service) notFound();

   const hero = SERVICE_HERO_IMAGES[slug] || DEFAULT_HERO;

   const mappedFaqs = service.faqs?.map((faq: { q: string; a: string }) => ({ question: faq.q, answer: faq.a })) || [];

   return (
      <>
         <Navbar />
         <main className="bg-white min-h-screen text-gray-900">

            {/* ═══════════════════ EDITORIAL HERO ═══════════════════ */}
            <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-24 px-4 sm:px-6 lg:px-16 xl:px-24">

               {/* Full Screen Image High-Def Overlay */}
               <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] via-[#111111]/80 to-transparent z-10" />
                  <img
                     src={hero.src}
                     alt={hero.alt}
                     className="w-full h-full object-cover"
                     onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = DEFAULT_HERO.src;
                        target.alt = DEFAULT_HERO.alt;
                     }}
                  />
               </div>

               <div className="relative z-10 w-full mx-auto max-w-[1400px]">
                  {/* Breadcrumbs */}
                  <motion.nav
                     className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-16"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                  >
                     <Link href="/" className="hover:text-white transition-colors">Home</Link>
                     <span className="w-8 h-[1px] bg-white/20" />
                     <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                     <span className="w-8 h-[1px] bg-white/20" />
                     <span className="text-[#b5955c]">{service.category}</span>
                  </motion.nav>

                  <motion.div initial="hidden" animate="show" variants={blockVariants} className="max-w-5xl">
                     <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-[1.05] font-bold tracking-tight mb-8 text-white">
                        {service.name}
                     </h1>
                     <p className="text-2xl sm:text-3xl lg:text-4xl text-white/80 font-medium leading-[1.3] max-w-4xl tracking-tight">
                        {service.heroTagline}
                     </p>
                  </motion.div>
               </div>
            </section>

            {/* ═══════════════════ THE BRIEF / OVERVIEW ═══════════════════ */}
            <section className="border-b border-gray-200 py-[6rem] lg:py-[10rem]">
               <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                  <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative">
                     <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32">
                           <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 flex items-center gap-4">
                              <span className="w-8 h-[2px] bg-[#b5955c]" />
                              01 / Specification
                           </h2>
                        </div>
                     </div>
                     <div className="lg:w-2/3">
                        <p className="text-2xl sm:text-3xl text-gray-700 font-medium leading-[1.5] tracking-tight">
                           {service.intro}
                        </p>
                        <div className="mt-16 pt-12 border-t border-gray-200 flex flex-col sm:flex-row gap-16">
                           <div className="flex-1">
                              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-4">Approved Systems</h4>
                              <p className="text-gray-600 font-medium text-lg">{service.products}</p>
                           </div>
                           {service.popularColours.length > 0 && (
                              <div className="flex-1">
                                 <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-4">Select Finishes</h4>
                                 <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                    {service.popularColours.join(' / ')}
                                    <br /><span className="text-gray-400 text-[10px] mt-4 block uppercase tracking-widest font-bold">RAL, BS, F&B Matches Available</span>
                                 </p>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* ═══════════════════ TECHNICAL ADVANTAGES ═══════════════════ */}
            {service.whySpray?.length > 0 && (
               <section className="border-b border-gray-200 py-[6rem] lg:py-[10rem] bg-[#F7F7F7]">
                  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                     <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative">
                        <div className="lg:w-1/3">
                           <div className="lg:sticky lg:top-32">
                              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 flex items-center gap-4">
                                 <span className="w-8 h-[2px] bg-[#b5955c]" />
                                 02 / Engineering
                              </h2>
                           </div>
                        </div>
                        <div className="lg:w-2/3">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                              {service.whySpray.map((item: string, i: number) => (
                                 <div key={i} className="flex flex-col relative pt-8 border-t border-gray-200">
                                    <span className="text-6xl font-display font-bold text-gray-200 absolute right-0 top-0 -mt-6 tracking-tighter">0{i + 1}</span>
                                    <p className="text-lg text-gray-800 font-medium leading-relaxed tracking-tight relative z-10">{item}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            )}

            {/* ═══════════════════ EXECUTION PROTOCOL (PROCESS) ═══════════════════ */}
            {service.process?.length > 0 && (
               <section className="border-b border-gray-200 py-[6rem] lg:py-[10rem]">
                  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                     <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative">
                        <div className="lg:w-1/3">
                           <div className="lg:sticky lg:top-32">
                              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 flex items-center gap-4">
                                 <span className="w-8 h-[2px] bg-[#b5955c]" />
                                 03 / Execution
                              </h2>
                              <p className="text-gray-500 font-medium mt-6 text-sm leading-relaxed max-w-[80%]">Deviating from protocol results in systemic failure. Strict QA adherence guarantees our 10-year warranty.</p>
                           </div>
                        </div>
                        <div className="lg:w-2/3">
                           <ProcessSteps steps={service.process} />
                        </div>
                     </div>
                  </div>
               </section>
            )}

            {/* ═══════════════════ PRICING ARCHITECTURE ═══════════════════ */}
            {service.pricing?.length > 0 && (
               <section className="border-b border-gray-200 py-[6rem] lg:py-[10rem] bg-[#F7F7F7]">
                  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                     <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative">
                        <div className="lg:w-1/3">
                           <div className="lg:sticky lg:top-32">
                              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 flex items-center gap-4">
                                 <span className="w-8 h-[2px] bg-[#b5955c]" />
                                 04 / Expenditure
                              </h2>
                              <p className="text-gray-500 font-medium mt-6 text-sm leading-relaxed max-w-[80%]">Transparent base pricing. A full physical site survey is required to lock in the final contract value.</p>
                           </div>
                        </div>
                        <div className="lg:w-2/3">
                           <div className="w-full">
                              {service.pricing.map((row: { label: string; price: string }, i: number) => {
                                 const rawPrice = row.price.replace('From', '').trim();
                                 const isPOA = rawPrice.toUpperCase().includes('POA');
                                 return (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-10 border-b border-gray-200">
                                       <span className="text-2xl text-gray-800 font-medium tracking-tight mb-4 sm:mb-0 max-w-[70%]">{row.label}</span>
                                       <div className="text-left sm:text-right">
                                          {isPOA ? (
                                             <div className="flex flex-col sm:items-end">
                                                <span className="text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">POA</span>
                                                <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.1em] mt-1">Free Survey Required</span>
                                             </div>
                                          ) : (
                                             <span className="text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">{rawPrice}</span>
                                          )}
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            )}

            {/* ═══════════════════ FAQS ═══════════════════ */}
            {service.faqs?.length > 0 && (
               <section className="py-[6rem] lg:py-[10rem] border-b border-gray-200">
                  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                     <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative">
                        <div className="lg:w-1/3">
                           <div className="lg:sticky lg:top-32">
                              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 flex items-center gap-4">
                                 <span className="w-8 h-[2px] bg-[#b5955c]" />
                                 05 / Parameters
                              </h2>
                           </div>
                        </div>
                        <div className="lg:w-2/3">
                           <FAQAccordion faqs={mappedFaqs} />
                        </div>
                     </div>
                  </div>
               </section>
            )}

            {/* ═══════════════════ COMMISSION A PROJECT (THE FORM) ═══════════════════ */}
            <section className="py-[6rem] lg:py-[10rem] relative overflow-hidden bg-[#111111] text-white">
               <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                  <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
                     <div className="lg:w-1/2">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-8">
                           Request <br />
                           <span className="text-[#b5955c]">Estimate.</span>
                        </h2>
                        <p className="text-xl text-white/70 font-medium leading-relaxed max-w-xl mb-12 tracking-tight">
                           Secure clinical execution protocol and a fixed-price technical specification for your site.
                        </p>
                     </div>

                     <div className="lg:w-1/2 w-full">
                        <div className="bg-white text-gray-900 rounded-lg p-10 sm:p-14 shadow-2xl relative overflow-hidden">
                           <div className="mb-8">
                              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5955c]">Project Intake</span>
                              <h3 className="text-3xl font-bold mt-2 text-gray-900">Start your survey</h3>
                           </div>
                           <QuoteForm preselectedService={service.name} />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

         </main>
         <Footer />
      </>
   );
}
