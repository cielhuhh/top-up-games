"use client";

import { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LacakPesananPage() {
  const [trxId, setTrxId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trxId) return;

    setIsLoading(true);
    setError('');
    setResult(null);

    // Simulate API call for tracking
    setTimeout(() => {
      if (trxId.length > 5) {
        setResult({
          id: trxId,
          status: "SUKSES",
          game: "Mobile Legends",
          product: "70 Diamonds",
          userId: "12345678 (1234)",
          date: new Date().toLocaleString('id-ID'),
          price: "Rp 20.000"
        });
      } else {
        setError("Transaksi tidak ditemukan. Pastikan Nomor Invoice yang Anda masukkan benar.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20 px-6 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mt-12 mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-4">
          Lacak <span className="text-brand-400">Pesanan</span>
        </h1>
        <p className="text-theme-muted">
          Masukkan Nomor Transaksi / Invoice Anda untuk melacak status pesanan secara real-time.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <form onSubmit={handleSearch} className="relative z-10 flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative group">
              <input
                type="text"
                placeholder="Contoh: TRX-123456789"
                value={trxId}
                onChange={(e) => setTrxId(e.target.value)}
                className="w-full bg-dark-bg/80 border border-dark-border rounded-xl pl-4 pr-12 py-4 text-theme-text focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/50 transition-all font-mono shadow-inner group-hover:border-gray-500"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-brand-400 transition-colors" size={20} />
            </div>
            <button 
              type="submit" 
              disabled={isLoading || !trxId}
              className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap min-w-[140px]"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Lacak Sekarang'}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                key="error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-500 text-center p-4 rounded-xl text-sm font-medium mb-4"
              >
                {error}
              </motion.div>
            )}

            {result && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-dark-bg/50 border border-brand-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(20,184,166,0.15)] relative overflow-hidden"
              >
                {/* Success Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 blur-[50px] pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-dark-border relative z-10">
                  <div>
                    <div className="text-theme-muted text-sm mb-1">Status Pesanan</div>
                    <div className="bg-brand-500/20 text-brand-400 px-4 py-1.5 rounded-full text-sm font-bold border border-brand-500/30 inline-flex items-center gap-2 shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                      <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                      {result.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-theme-muted text-sm mb-1">Tanggal Transaksi</div>
                    <div className="text-theme-text text-sm font-medium">{result.date}</div>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between">
                    <span className="text-theme-muted">No. Invoice</span>
                    <span className="text-theme-text font-mono">{result.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-theme-muted">Item</span>
                    <span className="text-theme-text font-bold">{result.product} - {result.game}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-theme-muted">User ID Tujuan</span>
                    <span className="text-theme-text font-mono">{result.userId}</span>
                  </div>
                  <div className="flex justify-between border-t border-dark-border pt-4 mt-2">
                    <span className="text-theme-muted font-medium">Total Harga</span>
                    <span className="text-brand-400 font-bold text-lg">{result.price}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
