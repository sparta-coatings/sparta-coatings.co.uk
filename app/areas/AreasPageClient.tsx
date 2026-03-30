'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

const primaryAreas = [
  { name: 'Hampshire', desc: 'Our home county and primary operational base.', towns: 'Southampton · Portsmouth · Winchester · Eastleigh · Basingstoke · Andover · Romsey · Fareham · Gosport · Havant · Waterlooville · Petersfield · Fleet' },
  { name: 'West Sussex', desc: 'Full county coverage for all services.', towns: 'Chichester · Worthing · Crawley · Horsham · Bognor Regis · Littlehampton · Shoreham · Burgess Hill · Haywards Heath · East Grinstead' },
  { name: 'East Sussex', desc: 'Full coverage including coastal towns.', towns: 'Brighton · Hove · Eastbourne · Hastings · Lewes · Bexhill · Newhaven · Seaford · Uckfield · Crowborough' },
  { name: 'Surrey', desc: 'Full county coverage.', towns: 'Guildford · Woking · Reigate · Redhill · Epsom · Leatherhead · Dorking · Farnham · Godalming · Camberley · Weybridge' },
  { name: 'Dorset', desc: 'Full coverage across the county.', towns: 'Bournemouth · Poole · Christchurch · Weymouth · Dorchester · Wimborne · Ferndown · Blandford Forum' },
  { name: 'Berkshire', desc: 'Full county coverage.', towns: 'Reading · Slough · Windsor · Maidenhead · Bracknell · Wokingham · Newbury · Thatcham' },
  { name: 'Wiltshire', desc: 'Full coverage across Wiltshire.', towns: 'Salisbury · Swindon · Chippenham · Trowbridge · Devizes · Marlborough · Warminster · Amesbury' },
  { name: 'Kent', desc: 'Full county coverage.', towns: 'Maidstone · Canterbury · Tunbridge Wells · Folkestone · Dover · Ashford · Sevenoaks · Tonbridge · Margate' },
  { name: 'London', desc: 'Commercial and large residential projects only.', towns: 'City · Westminster · Kensington · Hammersmith · Wandsworth · Lambeth · Southwark · Greenwich · Croydon · Bromley' },
];

const ukWideRegions = [
  { region: 'South West', areas: 'Bristol, Bath, Exeter, Plymouth, Gloucester' },
  { region: 'South East', areas: 'All counties including London, Kent, Surrey, Sussex' },
  { region: 'Midlands', areas: 'Birmingham, Coventry, Leicester, Nottingham, Derby' },
  { region: 'North West', areas: 'Manchester, Liverpool, Preston, Blackpool' },
  { region: 'North East', areas: 'Leeds, Sheffield, Hull, Newcastle, Sunderland' },
  { region: 'East of England', areas: 'Norwich, Ipswich, Cambridge, Peterborough' },
  { region: 'Wales', areas: 'Cardiff, Swansea, Newport' },
];

export default function AreasPageClient() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen text-white">
        
        {/* ═══════════════════ EDITORIAL HERO ═══════════════════ */}
        <section className="relative min-h-[70vh] flex flex-col justify-end pt-32 pb-24 px-4 sm:px-6 lg:px-12 border-b border-white/10">
          <div className="relative z-10 max-w-[1400px] w-full mx-auto">
            <motion.div initial="hidden" animate="show" variants={blockVariants} className="max-w-5xl">
              <h1 className="text-[12vw] sm:text-[9vw] lg:text-[8vw] leading-[0.85] font-display font-bold tracking-tighter mb-12 uppercase mix-blend-difference">
                Operational <br />
                <span className="italic text-[#b5955c]">Range.</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-white/80 font-light leading-snug max-w-4xl tracking-tight mb-8">
                Execution zones spanning residential footprints across Southern England, and commercial scaling UK-wide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ RESIDENTIAL ZONES ═══════════════════ */}
        <section className="border-b border-white/10 section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-24">01 / Residential Footprint</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
                {primaryAreas.map((area, idx) => (
                  <div key={idx} className="flex flex-col border-t border-white/10 pt-8 relative">
                     <span className="text-6xl font-display text-white/5 absolute right-0 top-0 mt-6 tracking-tighter">0{idx+1}</span>
                     <h3 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">{area.name}</h3>
                     <p className="text-xl text-[#b5955c] font-light mb-6 tracking-tight">{area.desc}</p>
                     <p className="text-white/40 font-light leading-loose text-sm max-w-[80%]">{area.towns}</p>
                  </div>
                ))}
              </div>

           </div>
        </section>

        {/* ═══════════════════ COMMERCIAL ZONES ═══════════════════ */}
        <section className="border-b border-white/10 section-padding bg-[#050505]">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="lg:w-1/3">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5955c] mb-6 lg:sticky lg:top-32">02 / Commercial Range</h2>
                    <p className="text-white/40 font-light leading-relaxed max-w-sm">
                       For large-scale architectural refurbishments, industrial units, and retail property portfolios, we execute operations on a national scale.
                    </p>
                 </div>
                 <div className="lg:w-2/3">
                    <div className="flex flex-col border-t border-white/10">
                      {ukWideRegions.map((r, i) => (
                        <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center py-8 border-b border-white/10 group">
                           <span className="text-2xl font-display font-bold text-white mb-2 sm:mb-0 group-hover:text-[#b5955c] transition-colors">{r.region}</span>
                           <span className="text-sm text-white/50 font-light max-w-sm text-left sm:text-right">{r.areas}</span>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════════ CALL TO ACTION ═══════════════════ */}
        <section className="section-padding">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="text-[8vw] sm:text-[6vw] font-display font-bold tracking-tighter text-white mb-12 uppercase">
                 Engage <span className="italic text-[#b5955c]">Services.</span>
              </h2>
              <Link href="/contact" className="border border-[#b5955c] text-[#b5955c] hover:bg-[#b5955c] hover:text-black transition-colors px-12 py-6 text-sm uppercase tracking-[0.2em] inline-block font-medium">
                 Verify Coverage
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
