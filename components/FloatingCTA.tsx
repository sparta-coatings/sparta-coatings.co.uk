'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    const timer = setTimeout(() => {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }, 1000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile sticky bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="bg-[#111118]/95 backdrop-blur-xl border-t border-[rgba(201,168,76,0.1)] px-4 py-3 flex gap-3 safe-bottom">
              <a
                href="tel:07521229809"
                className="flex-1 flex items-center justify-center gap-2 border border-[#2a2a35] hover:border-[#c9a84c] text-[#a0a0b0] hover:text-[#c9a84c] text-sm font-medium py-3 rounded-lg transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
              <Link
                href="/contact"
                className="flex-1 text-center btn-gold font-semibold text-sm py-3 rounded-lg"
              >
                Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop floating button */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-8 right-8 z-40 hidden lg:flex flex-col gap-3"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <motion.a
              href="tel:07521229809"
              className="flex items-center gap-2 glass-card text-[#a0a0b0] hover:text-[#c9a84c] text-sm font-medium px-5 py-3 rounded-full shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Phone size={15} />
              07521 229809
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
