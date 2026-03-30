'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/areas', label: 'Areas' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img src="/logo-black.svg" onError={(e) => (e.currentTarget.src = '/logo.svg')} alt="Sparta Coatings" className="h-10 w-auto invert" />
            </motion.div>
            <span
              className="font-bold text-xl tracking-tighter text-gray-900 group-hover:text-[#b5955c] transition-all duration-300 uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sparta Coatings
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-gray-900 px-4 py-2 rounded-md transition-all duration-300 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#b5955c] group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:07521229809"
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500 hover:text-[#b5955c] transition-colors duration-300"
            >
              <Phone size={14} />
              <span>07521 229809</span>
            </a>
            <Link href="/contact">
              <motion.span
                className="bg-[#111111] text-white hover:bg-[#b5955c] transition-colors duration-300 font-bold tracking-[0.2em] uppercase text-[10px] px-8 py-4 rounded-md inline-flex items-center gap-2 shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Free Quote
                <ChevronDown size={14} className="rotate-[-90deg]" />
              </motion.span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-gray-200" onClick={() => setOpen(false)} />

            {/* Menu content */}
            <motion.div
              className="relative h-full flex flex-col px-6 pt-10 pb-32 overflow-y-auto"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="space-y-2">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 text-3xl font-display font-bold tracking-tighter text-gray-900 hover:text-[#b5955c] border-b border-gray-100 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 space-y-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <a
                  href="tel:07521229809"
                  className="flex items-center gap-4 text-gray-900 py-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Phone size={20} className="text-[#b5955c]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Call us now</p>
                    <p className="text-gray-900 font-bold text-lg tracking-tight">07521 229809</p>
                  </div>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-[#111111] text-white uppercase tracking-[0.2em] font-bold text-xs px-6 py-6 rounded-md hover:bg-[#b5955c] transition-colors"
                >
                  Get a Free Quote →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
