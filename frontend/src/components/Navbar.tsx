"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import LoginModal from './LoginModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 glass-card rounded-none border-x-0 border-t-0 bg-dark-bg/80 backdrop-blur-md">
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

        {/* Login Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-theme-muted hover:text-brand-400 transition-colors bg-dark-card border border-dark-border rounded-lg"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <button 
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Masuk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-theme-muted hover:text-brand-400 transition-colors bg-dark-card border border-dark-border rounded-lg"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
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
          <div className="h-[1px] w-full bg-dark-border my-2"></div>
          <button 
            onClick={() => {
              setIsOpen(false);
              setIsLoginModalOpen(true);
            }}
            className="bg-brand-500 hover:bg-brand-600 text-white w-full py-3 rounded-xl font-semibold transition-colors"
          >
            Masuk / Daftar
          </button>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  );
}
