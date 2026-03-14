"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 rounded-none border-x-0 border-t-0 ${scrolled ? 'bg-dark-bg/85 backdrop-blur-2xl border-b border-brand-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-1' : 'bg-gradient-to-b from-dark-bg/80 to-transparent backdrop-blur-sm border-b border-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-accent-neonBlue flex items-center justify-center font-bold text-white shadow-lg shadow-brand-500/30">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-theme-text">
            Sultan <span className="text-brand-400">Top Up</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-theme-muted">
          <Link href="/" className="hover:text-brand-400 transition-colors">Beranda</Link>
          <Link href="/#games" className="hover:text-theme-text transition-colors">Daftar Game</Link>
          <Link href="/cara-kerja" className="hover:text-theme-text transition-colors">Cara Kerja</Link>
          <Link href="/lacak" className="hover:text-theme-text transition-colors">Lacak Pesanan</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-theme-text hover:text-brand-400 transition-colors" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-card border-b border-dark-border py-4 px-6 flex flex-col gap-4 shadow-xl">
          <Link href="/" className="text-theme-muted hover:text-brand-400 font-medium py-2" onClick={toggleMenu}>Beranda</Link>
          <Link href="/#games" className="text-theme-muted hover:text-theme-text font-medium py-2" onClick={toggleMenu}>Daftar Game</Link>
          <Link href="/cara-kerja" className="text-theme-muted hover:text-theme-text font-medium py-2" onClick={toggleMenu}>Cara Kerja</Link>
          <Link href="/lacak" className="text-theme-muted hover:text-theme-text font-medium py-2" onClick={toggleMenu}>Lacak Pesanan</Link>
        </div>
      )}
    </nav>
  );
}
