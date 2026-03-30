'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Step {
  title: string;
  description: string;
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {/* Connecting line for desktop */}
      <div className="hidden lg:block absolute top-[32px] left-[60px] right-[60px] h-[1px] bg-gradient-to-r from-[rgba(201,168,76,0.3)] via-[rgba(201,168,76,0.15)] to-[rgba(201,168,76,0.3)]" />

      {steps.map((s, i) => (
        <ScrollReveal key={i} delay={i * 0.1}>
          <div className="relative">
            <div className="glass-card rounded-xl p-6 h-full relative z-10 group">
              {/* Step number */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgba(201,168,76,0.2)] to-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center mb-5 relative">
                <span className="text-[#c9a84c] font-bold text-sm">{i + 1}</span>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border border-[rgba(201,168,76,0.15)] animate-ping opacity-30" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2 group-hover:text-[#dfc06a] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-[#a0a0b0] leading-relaxed">{s.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
