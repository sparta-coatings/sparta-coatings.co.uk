'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute inset-0 hero-glow opacity-30" />

        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-display font-bold text-gradient-gold mb-6">404</div>
          <h1 className="font-display text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-[#a0a0b0] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <Link href="/">
            <motion.span
              className="btn-gold font-bold px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </motion.span>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
