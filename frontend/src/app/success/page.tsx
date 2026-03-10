"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const trxId = searchParams.get('trx_id');

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-6">
      <div className="max-w-xl w-full">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(20,184,166,0.1)]"
        >
          {/* Confetti / Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] z-0 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-brand-500/10 rounded-full flex items-center justify-center mb-6"
            >
              <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(20,184,166,0.6)]">
                <Check size={40} strokeWidth={3} />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-extrabold text-theme-text mb-2"
            >
              Top Up Berhasil!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-theme-muted mb-8"
            >
              Terima kasih, pembayaran Anda telah kami terima dan pesanan akan segera diproses masuk ke akun Anda.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full bg-dark-bg/80 border border-dark-border rounded-xl p-6 text-left mb-8 shadow-inner relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-accent-purple/10 rounded-full blur-[40px]"></div>
              <div className="relative z-10">
                <div className="text-sm text-theme-muted mb-1">Nomor Transaksi</div>
                <div className="font-mono text-brand-300 font-bold text-lg mb-4 select-all">{trxId || 'TRX-DEFAULT'}</div>

                <div className="flex justify-between items-center text-sm mb-3">
                  <span className="text-theme-muted">Status Pembayaran</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">LUNAS</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-theme-muted">Status Pesanan</span>
                  <span className="bg-brand-500/20 text-brand-400 px-3 py-1 rounded-full text-xs font-bold border border-brand-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                    SUKSES
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row w-full gap-4"
            >
              <Link href="/" className="flex-1 btn-primary text-center">
                Beli Lagi
              </Link>
              <Link href="/lacak" className="flex-1 glass-card border-brand-500/30 hover:bg-brand-500/10 text-brand-400 font-bold py-3 rounded-xl transition-colors text-center">
                Cek Pesanan
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
