'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (logoClicks === 3) {
      console.log("%c [ACCESS GRANTED] %c MSG FinVest Institutional Mandate: Alpha Secure.", "background: #0A192F; color: #C5A059; font-weight: bold; padding: 5px;", "color: #4A5568");
      setLogoClicks(0);
    }
  }, [logoClicks]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-width-container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer select-none group"
          onClick={() => setLogoClicks(prev => prev + 1)}
        >
          <div className="w-10 h-10 bg-institutional-gold rounded-sm flex items-center justify-center font-bold text-institutional-navy shadow-lg transition-transform group-active:scale-95">
            MSG
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-institutional-gold transition-colors">FinVest Experts</span>
            <span className="text-[10px] uppercase tracking-widest text-institutional-gold/80 font-semibold leading-none">Institutional Excellence</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-institutional-gold transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-institutional-gold text-institutional-navy px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl">
            Inquire
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-dark py-8 px-6 flex flex-col gap-6 md:hidden border-t border-white/5"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white hover:text-institutional-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-institutional-gold text-institutional-navy px-6 py-3 rounded-sm font-bold w-full uppercase tracking-wider">
            Inquire
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
