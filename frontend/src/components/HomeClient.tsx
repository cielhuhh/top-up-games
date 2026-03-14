"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Gem, ShieldCheck, Headset, Flame, Gamepad2, Timer, ChevronRight } from 'lucide-react';

export default function HomeClient({ games }: { games: any[] }) {
  const popularGames = games.filter((g: any) => g.isPopular);
  const allGames = games;

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
      {/* Ultra Modern Bento Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-20 bg-dark-bg border-b border-dark-border">
        {/* Abstract Background Orbs */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-purple/15 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">

            {/* Main Hero Card (Span 8) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-dark-card to-dark-bg/80 border border-dark-border/80 hover:border-brand-500/50 hover:shadow-[0_10px_40px_rgba(14,165,233,0.15)] transition-all duration-500 p-10 md:p-14 flex flex-col justify-center"
            >
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] group-hover:bg-brand-500/30 transition-colors"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-bold mb-6 text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                  Super Cepat & Garansi Legal
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-theme-text leading-[1.1]">
                  Top Up Game <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-accent-neonBlue drop-shadow-sm">Level Sultan.</span>
                </h1>

                <p className="max-w-xl text-theme-muted mb-10 leading-relaxed font-medium md:text-lg">
                  Platform top up instan tanpa registrasi. Kami memotong jalur rumit agar Anda bisa langsung terjun kembali ke medan perang.
                </p>

                <Link href="#games" className="inline-block btn-primary text-base md:text-lg px-8 py-4 md:px-10 rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all font-bold tracking-wide">
                  Mulai Top Up Sekarang
                </Link>
              </div>
            </motion.div>

            {/* Side Bento Metrics (Span 4) */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">

              {/* Metric 1 - E-Sports Theme */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-2 sm:col-span-1 lg:col-span-1 relative overflow-hidden rounded-[2rem] bg-dark-card border border-dark-border p-8 flex flex-col justify-center hover:border-accent-purple/50 transition-colors group"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent-purple/10 rounded-full blur-[50px] group-hover:bg-accent-purple/20 transition-colors"></div>
                <div className="relative z-10">
                  <Flame size={40} className="text-accent-purple mb-4 drop-shadow-lg" />
                  <div className="text-4xl font-black text-white mb-1 tracking-tight">1.5M+</div>
                  <div className="text-sm text-theme-muted font-bold tracking-widest uppercase">Transaksi Sukses</div>
                </div>
              </motion.div>

              {/* Metric 2 - Trust Theme */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-2 sm:col-span-1 lg:col-span-1 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-accent-neonBlue border border-brand-400 p-8 flex flex-col justify-center shadow-[0_10px_30px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.4)] transition-all group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={120} className="text-white" />
                </div>
                <div className="relative z-10 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-90">Sistem Aktif</span>
                  </div>
                  <div className="text-3xl font-black mb-1 drop-shadow-md">Proses 1 Detik</div>
                  <div className="text-sm font-medium opacity-90">Otomatis 24/7 tanpa delay.</div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Bento Style */}
      <section className="bg-dark-bg py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Zap size={24} />, title: 'Proses Instan', desc: 'Selesai dalam detik', color: 'text-brand-400', bg: 'bg-brand-500/10', border: 'hover:border-brand-500/50' },
              { icon: <Gem size={24} />, title: 'Harga Bersaing', desc: 'Termurah di pasaran', color: 'text-accent-gold', bg: 'bg-yellow-500/10', border: 'hover:border-accent-gold/50' },
              { icon: <ShieldCheck size={24} />, title: '100% Legal', desc: 'Garansi anti banned', color: 'text-accent-neonBlue', bg: 'bg-blue-500/10', border: 'hover:border-accent-neonBlue/50' },
              { icon: <Headset size={24} />, title: 'CS 24/7', desc: 'Siap bantu kapanpun', color: 'text-accent-purple', bg: 'bg-purple-500/10', border: 'hover:border-accent-purple/50' }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card rounded-2xl p-5 border border-dark-border transition-colors ${badge.border} flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left`}
              >
                <div className={`w-12 h-12 rounded-xl ${badge.bg} flex items-center justify-center flex-shrink-0`}>
                  <div className={`${badge.color}`}>{badge.icon}</div>
                </div>
                <div>
                  <h3 className="font-bold text-theme-text text-sm sm:text-base mb-1">{badge.title}</h3>
                  <p className="text-xs text-theme-muted font-medium">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo & Flash Sale Banner */}
      <section className="py-8 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-600 via-brand-500 to-accent-neonBlue p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_15px_40px_rgba(14,165,233,0.3)] group"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[60px] transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

          {/* Left Content */}
          <div className="relative z-10 text-center md:text-left text-white max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 border border-white/20 text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-md">
              <Timer size={14} className="animate-pulse text-yellow-300" /> Flash Sale Weekend
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight drop-shadow-md">
              Diskon Sultan <br />Hingga <span className="text-yellow-300">50%</span> 💎
            </h2>
            <p className="text-white/80 font-medium md:text-lg">
              Klaim harga termurah khusus periode Flash Sale malam ini. Bebas biaya layanan!
            </p>
          </div>

          {/* Right Action */}
          <div className="relative z-10 flex-shrink-0 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">04</span>
                <span className="text-[10px] font-bold text-white/70 uppercase">Jam</span>
              </div>
              <span className="text-2xl font-black text-white/50 animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">45</span>
                <span className="text-[10px] font-bold text-white/70 uppercase">Mnt</span>
              </div>
              <span className="text-2xl font-black text-white/50 animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-yellow-300 animate-pulse">12</span>
                <span className="text-[10px] font-bold text-yellow-300/70 uppercase">Dtk</span>
              </div>
            </div>

            <Link href="#games" className="w-full bg-white text-brand-600 hover:bg-gray-100 font-black py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group/btn">
              Top Up Sekarang
              <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Game List Section */}
      <section id="games" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mb-16"
          >
            {popularGames.map((game: any) => (
              <motion.div variants={itemVariants} key={game.id} className="h-full">
                <Link href={`/game/${game.id}`} className="group cursor-pointer block h-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/40 border border-white/5 group-hover:border-brand-500/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_40px_rgba(14,165,233,0.35)] h-full flex flex-col">

                    <div className="relative w-full aspect-[3/4] bg-dark-bg">
                      <Image
                        src={game.imageUrl}
                        alt={game.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                      />

                      {/* Seamless Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent z-10 pointer-events-none opacity-95"></div>

                      {/* Hot Badge */}
                      <div className="absolute top-2.5 left-2.5 z-20 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg shadow-red-500/40 flex items-center gap-1 tracking-wide uppercase">
                        <Flame size={12} className="text-yellow-300 animate-pulse" /> HOT
                      </div>

                      {/* Hover Action Overlay */}
                      <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                        <span className="bg-brand-500 text-white text-sm font-bold px-6 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 shadow-[0_4px_20px_rgba(14,165,233,0.5)] border border-brand-400/50 transition-all duration-300 flex items-center gap-2">
                          Top Up
                        </span>
                      </div>

                      {/* Title & Publisher */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex flex-col justify-end text-left">
                        <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight group-hover:text-brand-400 transition-colors drop-shadow-md">
                          {game.name}
                        </h3>
                        <p className="text-[10px] text-brand-300 uppercase tracking-widest font-bold mt-1.5 opacity-90 drop-shadow-md">
                          {game.publisher}
                        </p>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {allGames.length > 0 && (
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
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
            >
              {allGames.map((game: any) => (
                <motion.div variants={itemVariants} key={game.id} className="h-full">
                  <Link href={`/game/${game.id}`} className="group cursor-pointer block h-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm shadow-black/30 border border-white/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(14,165,233,0.2)] group-hover:border-brand-500/30 h-full flex flex-col opacity-90 group-hover:opacity-100">

                      <div className="relative w-full aspect-[3/4] bg-dark-bg">
                        <Image
                          src={game.imageUrl}
                          alt={game.name}
                          fill
                          className="object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-dark-bg/50 to-transparent z-10 pointer-events-none"></div>

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-dark-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                          <span className="bg-dark-card border border-brand-500/50 text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-500">
                            Top Up
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 flex flex-col justify-end text-left">
                          <h3 className="font-bold text-sm sm:text-base text-theme-muted line-clamp-2 leading-tight group-hover:text-brand-300 transition-colors drop-shadow-md">
                            {game.name}
                          </h3>
                        </div>
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
