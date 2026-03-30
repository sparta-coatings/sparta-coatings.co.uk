'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          className="border border-[#2a2a35] rounded-xl overflow-hidden bg-[#16161e]/80 backdrop-blur-sm"
          initial={false}
          layout
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300 group ${
              open === i
                ? 'bg-[rgba(201,168,76,0.03)]'
                : 'hover:bg-[#1c1c26]'
            }`}
          >
            <span className={`font-medium pr-4 transition-colors duration-300 ${
              open === i ? 'text-[#c9a84c]' : 'text-[#f5f5f5] group-hover:text-white'
            }`}>
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <ChevronDown
                size={18}
                className={`flex-shrink-0 transition-colors duration-300 ${
                  open === i ? 'text-[#c9a84c]' : 'text-[#6b6b7a]'
                }`}
              />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 border-t border-[#2a2a35]/50">
                  <p className="text-[#a0a0b0] leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
