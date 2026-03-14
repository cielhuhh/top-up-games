"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LayoutDashboard, Wallet, TrendingUp, AlertCircle, ShoppingCart } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminData = async () => {
    try {
      const [statsRes, trxRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/stats`),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/transactions`)
      ]);
      const statsData = await statsRes.json();
      const trxData = await trxRes.json();
      setStats(statsData);
      setTransactions(trxData);
    } catch (e) {
      console.error("Gagal memuat data admin");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
    // Auto refresh setiap 10 detik
    const interval = setInterval(fetchAdminData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center font-bold text-accent-neonBlue animate-pulse">
      Memuat Dashboard Admin...
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold flex items-center gap-3 text-theme-text">
              <span className="p-2 bg-accent-purple/20 text-accent-purple rounded-xl border border-accent-purple/30">
                <LayoutDashboard size={28} />
              </span>
              Admin Dashboard
            </h1>
            <p className="text-theme-muted mt-2">Ringkasan performa dan riwayat pesanan Sultan Top Up.</p>
          </div>
          <Link href="/" className="btn-primary text-sm px-6 py-2.5">
            Kembali ke Toko
          </Link>
        </div>

        {/* Stats Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="glass-card p-6 border-brand-500/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-[30px] -mr-10 -mt-10 group-hover:bg-brand-500/20 transition-colors"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <p className="text-theme-muted font-medium mb-1">Total Pendapatan</p>
                <h3 className="text-3xl font-bold text-brand-400">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(stats?.totalRevenue || 0)}
                </h3>
              </div>
              <div className="p-3 bg-brand-500/20 text-brand-400 rounded-xl"><Wallet size={24} /></div>
            </div>
            <div className="text-xs text-brand-300 flex items-center gap-1 font-medium"><TrendingUp size={14} /> Hanya transaksi sukses</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-6 border-orange-500/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[30px] -mr-10 -mt-10 group-hover:bg-orange-500/20 transition-colors"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <p className="text-theme-muted font-medium mb-1">Pesanan Pending</p>
                <h3 className="text-3xl font-bold text-orange-400">{stats?.totalPending || 0}</h3>
              </div>
              <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl"><AlertCircle size={24} /></div>
            </div>
            <div className="text-xs text-orange-300 flex items-center gap-1 font-medium">Menunggu pembayaran pelanggan</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass-card p-6 border-green-500/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[30px] -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <p className="text-theme-muted font-medium mb-1">Pesanan Sukses</p>
                <h3 className="text-3xl font-bold text-green-400">{stats?.totalSuccess || 0}</h3>
              </div>
              <div className="p-3 bg-green-500/20 text-green-400 rounded-xl"><ShoppingCart size={24} /></div>
            </div>
            <div className="text-xs text-green-300 flex items-center gap-1 font-medium">Total produk terjual</div>
          </motion.div>
        </div>

        {/* Transactions Table */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="glass-card overflow-hidden"
        >
          <div className="p-6 border-b border-dark-border flex justify-between items-center bg-dark-bg/40">
            <h2 className="text-xl font-bold text-theme-text">Riwayat Transaksi Terbaru</h2>
            <div className="flex items-center gap-2 text-xs text-theme-muted">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Auto-update (10s)
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark-bg/80 text-theme-muted text-sm uppercase tracking-wider relative">
                  <th className="p-4 font-medium">ID / Tanggal</th>
                  <th className="p-4 font-medium">Item & Game</th>
                  <th className="p-4 font-medium">Player ID</th>
                  <th className="p-4 font-medium">Nominal</th>
                  <th className="p-4 font-medium">Metode</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-theme-text text-sm divide-y divide-dark-border/50">
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-theme-muted">Belum ada transaksi.</td>
                  </tr>
                ) : (
                  transactions.map((trx: any) => (
                    <tr key={trx.id} className="hover:bg-dark-bg/40 transition-colors">
                      <td className="p-4">
                        <div className="font-mono text-xs text-brand-300 mb-1">{trx.id.split('-')[0].toUpperCase()}</div>
                        <div className="text-[10px] text-theme-muted">
                          {new Date(trx.createdAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold">{trx.product?.name || '-'}</div>
                        <div className="text-xs text-theme-muted">{trx.game?.name || '-'}</div>
                      </td>
                      <td className="p-4 font-mono text-xs">{trx.gameUserId} {trx.gameZoneId ? `(${trx.gameZoneId})` : ''}</td>
                      <td className="p-4 font-bold text-brand-400">
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(trx.amount)}
                      </td>
                      <td className="p-4 uppercase text-xs font-semibold">{trx.paymentMethod}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                          trx.status === 'SUCCESS' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                            : 'bg-orange-500/20 text-orange-400 border-orange-500/30 animate-pulse'
                        }`}>
                          {trx.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
