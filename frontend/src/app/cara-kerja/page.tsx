"use client";

import React from 'react';
import { ShoppingCart, CreditCard, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaraKerjaPage() {
  const steps = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-brand-400" />,
      title: "1. Pilih Game & Masukkan User ID",
      desc: "Pilih game favorit Anda dari daftar yang tersedia, lalu masukkan User ID (serta Zone ID jika diperlukan) pada kolom yang disediakan."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-accent-purple" />,
      title: "2. Pilih Nominal & Pembayaran",
      desc: "Tentukan jumlah Diamond, UC, atau Point yang ingin Anda beli. Kemudian pilih metode pembayaran yang paling nyaman untuk Anda (E-Wallet, QRIS, Transfer Bank)."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-accent-gold" />,
      title: "3. Selesaikan Pembayaran",
      desc: "Lakukan pembayaran sesuai dengan instruksi metode yang dipilih. Pastikan nominal yang ditransfer sesuai hingga tiga digit terakhir."
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-neonBlue" />,
      title: "4. Saldo Masuk Instan",
      desc: "Dalam hitungan detik, transaksi akan diproses oleh sistem kami dan saldo game akan langsung bertambah ke akun Anda secara otomatis!"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen py-20 overflow-hidden">
      {/* Header Section */}
      <div className="relative py-20 mb-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card z-0 opacity-80 border-b border-dark-border"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-6">
            Bagaimana <span className="text-brand-400">Cara Kerjanya?</span>
          </h1>
          <p className="text-lg text-theme-muted">
            Top up di Sultan Top Up sangat mudah, cepat, dan 100% aman. Ikuti 4 langkah sederhana di bawah ini untuk menjadi Sultan di game Anda.
          </p>
        </motion.div>
      </div>

      {/* Steps Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20"
      >
        {steps.map((step, index) => (
          <motion.div variants={itemVariants} key={index} className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-dark-bg/50 border border-dark-border w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-shadow">
              {step.icon}
            </div>
            <h2 className="text-2xl font-bold text-theme-text mb-3 group-hover:text-brand-300 transition-colors">
              {step.title}
            </h2>
            <p className="text-theme-muted leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 mt-16 text-center"
      >
        <div className="p-10 rounded-3xl bg-gradient-to-br from-dark-card to-dark-bg border border-brand-500/20 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-brand-500/20 rounded-full blur-[80px]"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-theme-text mb-4 relative z-10">Sudah Mengerti Caranya?</h3>
          <p className="text-theme-muted mb-8 relative z-10">Tunggu apa lagi? Raih kemenanganmu sekarang juga!</p>
          <a href="/#games" className="inline-block btn-primary text-lg px-8 relative z-10">
            Mulai Top Up
          </a>
        </div>
      </motion.div>
    </div>
  );
}
