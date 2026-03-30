'use client';

import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

const faqs = [
  { question: 'Is the survey really free?', answer: 'Yes — completely free, with no call-out charge and no obligation to proceed. We visit, assess, and quote. The rest is entirely up to you.' },
  { question: 'How quickly can you start?', answer: 'Lead times vary depending on the time of year and current workload. Contact us to discuss your preferred timescale.' },
  { question: 'Do you work outside of your core coverage area?', answer: 'For residential projects we cover Hampshire, West Sussex, East Sussex, Surrey, Dorset, Wiltshire, Berkshire, and Kent. For large commercial projects, we operate UK-wide.' },
  { question: 'Do you offer out-of-hours working?', answer: 'Yes — evening and weekend working is available for commercial clients, retail premises, and any project where daytime access is not possible.' },
];

export default function ContactPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen text-white">
        
        {/* ═══════════════════ EDITORIAL HERO ═══════════════════ */}
        <section className="relative min-h-[70vh] flex flex-col justify-end pt-32 pb-24 px-4 sm:px-6 lg:px-12 border-b border-white/10">
          <div className="relative z-10 max-w-[1400px] w-full mx-auto">
            <motion.div initial="hidden" animate="show" variants={blockVariants} className="max-w-5xl">
              <h1 className="text-[12vw] sm:text-[9vw] lg:text-[8vw] leading-[0.85] font-display font-bold tracking-tighter mb-12 uppercase mix-blend-difference">
                Initiate <br />
                <span className="italic text-[#b5955c]">Transmission.</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-white/80 font-light leading-snug max-w-4xl tracking-tight mb-8">
                Connect with our estimation team to secure a technical survey and fixed-price quotation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ COMMUNICATION CHANNELS ═══════════════════ */}
        <section className="border-b border-white/10 section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6">01 / Direct Channels</h2>
                    <p className="text-white/40 font-light leading-relaxed max-w-sm">Reach out via direct transmission lines. Our technical team responds to all digital inquiries within 24 hours.</p>
                 </div>
                 <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
                       
                       {/* Phone */}
                       <a href="tel:07521229809" className="flex flex-col border-t border-white/10 pt-6 group">
                          <div className="flex justify-between items-start mb-4">
                             <span className="text-xs uppercase text-white/20 tracking-widest">Telephone</span>
                             <Phone size={16} className="text-white/20 group-hover:text-[#b5955c] transition-colors" />
                          </div>
                          <span className="text-2xl sm:text-3xl font-display tracking-tight text-white group-hover:text-[#b5955c] transition-colors">07521 229809</span>
                       </a>

                       {/* Email */}
                       <a href="mailto:info@sparta-coatings.co.uk" className="flex flex-col border-t border-white/10 pt-6 group">
                          <div className="flex justify-between items-start mb-4">
                             <span className="text-xs uppercase text-white/20 tracking-widest">Email Address</span>
                             <Mail size={16} className="text-white/20 group-hover:text-[#b5955c] transition-colors" />
                          </div>
                          <span className="text-xl sm:text-2xl font-light text-white group-hover:text-[#b5955c] transition-colors truncate">info@sparta-coatings.co.uk</span>
                       </a>

                       {/* Hours */}
                       <div className="flex flex-col border-t border-white/10 pt-6">
                          <div className="flex justify-between items-start mb-4">
                             <span className="text-xs uppercase text-white/20 tracking-widest">Operating Hours</span>
                             <Clock size={16} className="text-white/20" />
                          </div>
                          <p className="text-lg text-white/80 font-light mb-2">Mon – Fri: 8am – 6pm</p>
                          <p className="text-sm text-white/40 font-light">Site hours: Mon – Sat, 7am – 7pm</p>
                       </div>

                       {/* Coverage */}
                       <div className="flex flex-col border-t border-white/10 pt-6">
                          <div className="flex justify-between items-start mb-4">
                             <span className="text-xs uppercase text-white/20 tracking-widest">Operational Coverage</span>
                             <MapPin size={16} className="text-white/20" />
                          </div>
                          <p className="text-lg text-white/80 font-light mb-2">South England</p>
                          <p className="text-sm text-white/40 font-light">UK-Wide for commercial scaling</p>
                       </div>

                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════════ PROJECT COMMISSION FORM ═══════════════════ */}
        <section className="section-padding bg-[#050505] border-b border-white/10">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 lg:sticky lg:top-32">02 / Commission Form</h2>
                    <p className="text-white/50 font-light leading-relaxed mb-12">
                      Please supply as much technical detail as possible regarding the substrates, approximate dimensions, and site access constraints.
                    </p>
                 </div>
                 <div className="lg:w-2/3">
                    <div className="p-8 sm:p-12 border border-white/10 bg-black shadow-2xl">
                       <QuoteForm />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════════ FAQS ═══════════════════ */}
        <section className="border-b border-white/10 section-padding">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6">03 / Transmission FAQ</h2>
                 </div>
                 <div className="lg:w-2/3">
                    <FAQAccordion faqs={faqs} />
                 </div>
              </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
