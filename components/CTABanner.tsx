'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Props {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = 'Ready to Transform Your Property?',
  subtext = 'Get a free, no-obligation site survey and fixed-price quotation. We respond within 24 hours.',
}: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#111118]" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 hero-grid" />

      {/* Animated orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[rgba(201,168,76,0.04)] blur-[100px]" />

      {/* Top & bottom lines */}
      <div className="section-divider" />

      <div className="relative section-padding">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="gold-line w-20 mx-auto mb-8" />
            <h2
              className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {heading}
            </h2>
            <p className="text-[#a0a0b0] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.span
                  className="btn-gold font-bold px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Request Your Free Survey →
                </motion.span>
              </Link>
              <a
                href="tel:07521229809"
                className="flex items-center justify-center gap-2 border border-[#2a2a35] hover:border-[#c9a84c] text-[#a0a0b0] hover:text-[#c9a84c] font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-sm"
              >
                <Phone size={16} />
                07521 229809
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-divider" />
    </section>
  );
}
