'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
}

export default function GoldButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  type = 'button',
  disabled = false,
  id,
}: GoldButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary:
      'btn-gold text-black font-bold shadow-lg shadow-[rgba(201,168,76,0.2)]',
    outline:
      'border border-[#2a2a35] hover:border-[#c9a84c] text-[#a0a0b0] hover:text-white font-semibold bg-transparent',
    ghost:
      'text-[#a0a0b0] hover:text-[#c9a84c] font-semibold bg-transparent',
  };

  const base = `inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  if (href && !disabled) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={base}
          target="_blank"
          rel="noopener noreferrer"
          id={id}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className="inline-flex">
        <motion.span className={base} id={id} {...motionProps}>
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      id={id}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
