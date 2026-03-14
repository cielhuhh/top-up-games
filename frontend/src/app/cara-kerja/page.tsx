"use client";

import React from 'react';
import { ShoppingCart, CreditCard, Zap, CheckCircle, Shield, Clock, Smartphone, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaraKerjaPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen py-20 overflow-hidden bg-dark-bg">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Header Section */}
      <div className="relative pt-20 pb-12 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border text-brand-400 font-semibold mb-6 text-sm uppercase tracking-wider">
            <Zap size={16} className="text-accent-gold" />
            Super Cepat & Garansi Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-theme-text mb-6 tracking-tight">
            Bagaimana <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-neonBlue">Sistem Bekerja?</span>
          </h1>
          <p className="text-lg md:text-xl text-theme-muted max-w-2xl font-medium">
            Tanpa registrasi, tanpa ribet. Kami merancang arsitektur transaksi yang mulus agar Anda bisa langsung memenangkan pertandingan bermain.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 pb-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]"
        >
          
          {/* STEP 1 - Large Wide Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-dark-card border border-dark-border hover:border-brand-500/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] flex flex-col justify-end p-8">
            <div className="absolute top-0 right-0 p-6 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShoppingCart size={150} className="text-brand-400 transform rotate-12" />
            </div>
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-4 shadow-lg shadow-brand-500/30">
               <span className="text-2xl font-black text-white">1</span>
            </div>
            <h2 className="text-2xl font-bold text-theme-text mb-2 group-hover:text-brand-400 transition-colors">Pilih Game & ID</h2>
            <p className="text-theme-muted text-sm md:text-base pr-4">Temukan game favorit Anda secara instan. Cukup tempel User ID akun game Anda tanpa perlu login di platform kami.</p>
          </motion.div>

          {/* Feature Highlight 1 - Small Card */}
          <motion.div variants={itemVariants} className="hidden lg:flex md:col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border p-6 flex-col justify-center items-center text-center hover:border-accent-purple/50 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield size={32} className="text-accent-purple" />
            </div>
            <h3 className="font-bold text-theme-text mb-1">100% Anti Banned</h3>
            <p className="text-xs text-theme-muted">Pembayaran resmi & legal.</p>
          </motion.div>

          {/* STEP 2 - Tall Card */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-dark-card border border-dark-border hover:border-accent-purple/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] flex flex-col p-8">
            <div className="absolute bottom-0 right-0 p-4 z-0 opacity-5 group-hover:opacity-10 transition-opacity translate-y-10 group-hover:translate-y-0">
              <CreditCard size={200} className="text-accent-purple transform -rotate-12" />
            </div>
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-purple to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
               <span className="text-2xl font-black text-white">2</span>
            </div>
            <h2 className="text-2xl font-bold text-theme-text mb-3 group-hover:text-accent-purple transition-colors">Nominal & Pembayaran</h2>
            <p className="text-theme-muted text-sm leading-relaxed mb-6">Pilih paket sesuai kebutuhan Anda. Kami memiliki metode pembayaran terlengkap mulai dari E-Wallet hingga Bank Transfer.</p>
            
            <div className="mt-auto z-10 flex gap-2 flex-wrap">
              <div className="bg-dark-bg px-3 py-1.5 rounded-lg text-xs font-bold text-theme-muted border border-white/5">QRIS</div>
              <div className="bg-dark-bg px-3 py-1.5 rounded-lg text-xs font-bold text-theme-muted border border-white/5">E-Wallet</div>
              <div className="bg-dark-bg px-3 py-1.5 rounded-lg text-xs font-bold text-theme-muted border border-white/5">VA Bank</div>
            </div>
          </motion.div>

          {/* Feature Highlight 2 - Small Card */}
          <motion.div variants={itemVariants} className="hidden md:flex lg:hidden lg:col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-dark-card border border-dark-border p-6 flex-col justify-center items-center text-center">
            <Smartphone size={40} className="text-theme-muted mb-3" />
            <h3 className="font-bold text-theme-text">Mobile Optimized</h3>
          </motion.div>

          {/* STEP 3 - Medium Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-dark-card border border-dark-border hover:border-accent-gold/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                 <span className="text-xl font-black text-white">3</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-theme-text group-hover:text-accent-gold transition-colors">Lunasi Tagihan</h2>
            </div>
            <p className="text-theme-muted text-sm md:text-base">Bayar sesuai instruksi yang muncul di layar Invoice. Sistem kami memantau secara otomatis.</p>
          </motion.div>

          {/* STEP 4 - The Vibrant Hero Step */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-accent-neonBlue border border-brand-400 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-500 p-8 flex flex-col justify-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/20 w-32 h-32 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-white/20 flex items-center justify-center shadow-2xl flex-shrink-0">
                 <Zap size={32} className="text-brand-500 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 drop-shadow-md">
                  BOOM! Saldo Masuk
                </h2>
                <p className="text-white/90 text-sm md:text-base font-medium max-w-sm">Hanya butuh 1-3 detik setelah pembayaran berhasil, saldo game di akunmu akan langsung menari riang!</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-dark-card border border-dark-border/80 shadow-2xl relative overflow-hidden group hover:border-brand-500/50 transition-colors">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] group-hover:bg-accent-purple/20 transition-colors"></div>
          
          <Gift size={48} className="text-brand-400 mx-auto mb-6 drop-shadow-lg" />
          <h3 className="text-3xl md:text-4xl font-extrabold text-theme-text mb-4 relative z-10">Siap Jadi <span className="text-brand-400">Sultan?</span></h3>
          <p className="text-theme-muted mb-10 relative z-10 text-lg">Jangan tunda lagi top up-mu, beli nominal sultan sekarang juga.</p>
          <a href="/#games" className="inline-block btn-primary text-xl px-12 py-5 relative z-10 rounded-2xl font-black tracking-wide">
            TOP UP SEKARANG
          </a>
        </div>
      </motion.div>
    </div>
  );
}
