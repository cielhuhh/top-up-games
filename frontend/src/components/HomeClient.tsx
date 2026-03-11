"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Gem, ShieldCheck, Headset, Flame, Gamepad2 } from 'lucide-react';

export default function HomeClient({ games }: { games: any[] }) {
  const popularGames = games.filter((g: any) => g.isPopular);
  const otherGames = games.filter((g: any) => !g.isPopular);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card border-b border-dark-border">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px] animate-glow z-0 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/20 rounded-full blur-[120px] animate-glow z-0 pointer-events-none" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-theme-text"
          >
            Top Up Game <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-neonBlue">Aman, Cepat & Terpercaya</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-theme-muted mb-10 leading-relaxed font-medium"
          >
            Nikmati layanan top-up instan berkualitas premium. Akses cepat, metode pembayaran lengkap, dan 100% aman untuk semua akun Anda.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="#games" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
              Mulai Transaksi
            </Link>
            <Link href="/cara-kerja" className="glass-card flex items-center justify-center gap-2 py-4 px-8 text-lg font-bold text-theme-text transition-all duration-300 cursor-pointer hover:bg-dark-card border border-dark-border hover:border-brand-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] active:scale-95">
              Pelajari Cara Kerja
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-dark-border bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            { icon: <Zap size={32} />, title: '1 Detik', desc: 'Proses Instan', color: 'text-brand-400' },
            { icon: <Gem size={32} />, title: 'Termurah', desc: 'Harga Bersaing', color: 'text-accent-gold' },
            { icon: <ShieldCheck size={32} />, title: 'Anti Banned', desc: '100% Legal & Aman', color: 'text-accent-neonBlue' },
            { icon: <Headset size={32} />, title: '24/7', desc: 'Customer Support', color: 'text-accent-purple' }
          ].map((badge, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" as const }}
              className="flex flex-col items-center"
            >
              <div className={`text-3xl font-bold ${badge.color} mb-2 flex items-center gap-2 drop-shadow-lg transition-transform duration-300 hover:scale-110`}>{badge.icon} {badge.title}</div>
              <div className="text-sm text-theme-muted font-medium tracking-wide uppercase">{badge.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Game List Section */}
      <section id="games" className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Flame className="text-brand-400" size={32} /> Game Populer
          </h2>
          <p className="text-theme-muted">Pilihan game terlaris minggu ini.</p>
        </motion.div>

        {popularGames.length === 0 ? (
          <div className="text-center py-12 glass-card rounded-2xl border-dashed border-2 border-dark-border">
            <p className="text-theme-muted font-medium">Belum ada game populer saat ini.</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8 mb-16"
          >
            {popularGames.map((game: any) => (
              <motion.div variants={itemVariants} key={game.id}>
                <Link href={`/game/${game.id}`} className="group cursor-pointer block h-full relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-500 to-accent-purple rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                  <div className="glass-card overflow-hidden h-full flex flex-col p-3 transition-all duration-500 group-hover:-translate-y-2 bg-dark-bg/60 border border-dark-border/60 relative z-10 group-hover:border-brand-500/30">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-dark-border/50 ring-1 ring-inset ring-white/10 group-hover:ring-brand-500/30">
                      <Image 
                        src={game.imageUrl} 
                        alt={game.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <span className="bg-brand-500/90 text-white text-xs font-bold px-5 py-2 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)] border border-brand-400/50 backdrop-blur-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Top Up Sekarang</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center text-center mt-2 relative">
                      <div className="absolute -top-10 right-0 w-8 h-8 bg-brand-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <h3 className="font-extrabold text-lg text-theme-text mb-1 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-300 group-hover:to-accent-neonBlue transition-all drop-shadow-sm">{game.name}</h3>
                      <p className="text-[10px] text-brand-400/80 uppercase tracking-[0.2em] font-bold">{game.publisher}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {otherGames.length > 0 && (
          <div className="mb-12 mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-theme-text">
                <Gamepad2 className="text-accent-purple" size={28} /> Semua Game
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full mb-8"></div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8"
            >
              {otherGames.map((game: any) => (
                <motion.div variants={itemVariants} key={game.id}>
                  <Link href={`/game/${game.id}`} className="group cursor-pointer block h-full relative">
                    <div className="glass-card overflow-hidden h-full flex flex-col p-3 transition-all duration-300 group-hover:-translate-y-1 bg-dark-bg/40 border border-dark-border/60 group-hover:border-dark-border group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-dark-border border border-dark-border/30">
                        <Image 
                          src={game.imageUrl} 
                          alt={game.name} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1 flex flex-col items-center text-center">
                        <h3 className="font-bold text-base text-theme-text mb-1 leading-tight group-hover:text-brand-300 transition-colors">{game.name}</h3>
                        <p className="text-xs text-theme-muted group-hover:text-theme-muted/80">{game.publisher}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
}
