'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const residentialServices = [
  { href: '/services/kitchen-cabinet-spraying', label: 'Kitchen Cabinet Spraying' },
  { href: '/services/upvc-window-spraying', label: 'UPVC Window Spraying' },
  { href: '/services/upvc-door-spraying', label: 'UPVC Door Spraying' },
  { href: '/services/conservatory-spraying', label: 'Conservatory Spraying' },
  { href: '/services/garage-door-spraying', label: 'Garage Door Spraying' },
  { href: '/services/house-exterior-spraying', label: 'House Exterior Spraying' },
  { href: '/services/fascia-soffit-spraying', label: 'Fascia & Soffit Spraying' },
  { href: '/services/fence-gate-spraying', label: 'Fence & Gate Spraying' },
];

const commercialServices = [
  { href: '/services/cladding-spraying', label: 'Cladding Spraying' },
  { href: '/services/metal-roof-coating', label: 'Metal Roof Coating' },
  { href: '/services/warehouse-industrial-spraying', label: 'Warehouse Spraying' },
  { href: '/services/steelwork-spraying', label: 'Steelwork Spraying' },
  { href: '/services/shop-front-spraying', label: 'Shop Front Spraying' },
  { href: '/services/lift-door-spraying', label: 'Lift Door Spraying' },
  { href: '/services/ceiling-spraying', label: 'Ceiling Spraying' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[rgba(201,168,76,0.08)]">
      {/* Subtle mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <ScrollReveal delay={0}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src="/logo.svg" alt="Sparta Coatings" className="h-10 w-auto" />
                <span className="font-display font-bold text-white text-lg">Sparta Coatings</span>
              </div>
              <p className="text-sm text-[#6b6b7a] leading-relaxed mb-6">
                Specialist on-site spray coating contractors. Approved applicators for the UK's leading coating manufacturers.
              </p>
              <div className="space-y-3">
                <a href="tel:07521229809" className="flex items-center gap-3 text-sm text-[#a0a0b0] hover:text-[#c9a84c] transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] flex items-center justify-center group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
                    <Phone size={13} className="text-[#c9a84c]" />
                  </div>
                  07521 229809
                </a>
                <a href="mailto:info@sparta-coatings.co.uk" className="flex items-center gap-3 text-sm text-[#a0a0b0] hover:text-[#c9a84c] transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] flex items-center justify-center group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
                    <Mail size={13} className="text-[#c9a84c]" />
                  </div>
                  info@sparta-coatings.co.uk
                </a>
                <div className="flex items-center gap-3 text-sm text-[#6b6b7a]">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] flex items-center justify-center">
                    <Clock size={13} className="text-[#c9a84c]" />
                  </div>
                  Mon–Fri 8am–6pm · Sat 7am–7pm
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Residential */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
                <span className="text-gradient-gold">Residential</span>
              </h3>
              <ul className="space-y-2.5">
                {residentialServices.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-[#6b6b7a] hover:text-[#c9a84c] transition-colors duration-300 inline-flex items-center gap-1 group">
                      {s.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Commercial */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
                <span className="text-gradient-gold">Commercial</span>
              </h3>
              <ul className="space-y-2.5">
                {commercialServices.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-[#6b6b7a] hover:text-[#c9a84c] transition-colors duration-300 inline-flex items-center gap-1 group">
                      {s.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Company */}
          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
                <span className="text-gradient-gold">Company</span>
              </h3>
              <ul className="space-y-2.5 mb-8">
                {[
                  { href: '/about', label: 'About Us' },
                  { href: '/pricing', label: 'Pricing' },
                  { href: '/areas', label: 'Areas We Cover' },
                  { href: '/contact', label: 'Contact Us' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[#6b6b7a] hover:text-[#c9a84c] transition-colors duration-300 inline-flex items-center gap-1 group">
                      {l.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <motion.span
                  className="btn-gold font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get a Free Quote →
                </motion.span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-14 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#6b6b7a]">
          <p>© {new Date().getFullYear()} Sparta Coatings. All rights reserved.</p>
          <p className="text-xs">Spray Coating Specialists · South of England & UK-Wide</p>
        </div>
      </div>
    </footer>
  );
}
