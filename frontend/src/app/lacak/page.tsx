"use client";

import { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LacakPesananPage() {
  const [trxId, setTrxId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trxId) return;

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/transactions/${trxId}`);
      
      if (!res.ok) {
        setError("Transaksi tidak ditemukan. Pastikan Nomor Invoice yang Anda masukkan benar.");
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      setResult({
        id: data.id,
        status: data.status,
        game: data.game?.name || "Unknown Game",
        product: data.product?.name || "Unknown Product",
        userId: data.gameUserId + (data.gameZoneId ? ` (${data.gameZoneId})` : ""),
        date: new Date(data.createdAt).toLocaleString('id-ID'),
        price: "Rp " + data.amount.toLocaleString('id-ID'),
        paymentMethod: data.paymentMethod,
        paymentCode: data.paymentCode
      });
    } catch (err) {
      setError("Terjadi kesalahan sistem saat mencari transaksi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 overflow-hidden bg-dark-bg relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mt-12 mb-12 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border text-brand-400 font-bold mb-6 text-sm uppercase tracking-wider">
          <Search size={16} /> Lacak Real-Time
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-theme-text mb-6 tracking-tight">
          Lacak <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-neonBlue">Pesanan</span>
        </h1>
        <p className="text-theme-muted font-medium text-lg max-w-xl mx-auto">
          Masukkan Nomor Transaksi / Invoice Anda untuk melacak status pesanan secara instan layaknya radar E-Sports.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto relative z-10"
      >
        <div className="bg-gradient-to-br from-dark-card to-dark-bg/90 p-8 rounded-[2rem] border border-dark-border/80 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-brand-500/30 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-500/20 transition-colors"></div>
          
          <form onSubmit={handleSearch} className="relative z-10 flex flex-col md:flex-row gap-4 mb-2">
            <div className="flex-1 relative group/input">
              <input
                type="text"
                placeholder="TRX-123456789"
                value={trxId}
                onChange={(e) => setTrxId(e.target.value)}
                className="w-full bg-dark-bg border-2 border-dark-border rounded-2xl pl-6 pr-12 py-4 md:py-5 text-theme-text focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 transition-all font-mono text-lg tracking-wider placeholder:text-theme-muted/50 group-hover/input:border-gray-600 uppercase"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-theme-muted group-hover/input:text-brand-400 transition-colors" size={24} />
            </div>
            <button 
              type="submit" 
              disabled={isLoading || !trxId}
              className="btn-primary rounded-2xl flex items-center justify-center gap-2 px-8 py-4 md:py-5 font-bold tracking-wide text-lg shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all min-w-[160px]"
            >
              {isLoading ? <Loader2 className="animate-spin" size={24} /> : 'Scan Kode'}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                key="error"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="mt-6 bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                {error}
              </motion.div>
            )}

            {result && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-10 bg-dark-bg border border-brand-500/50 rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(14,165,233,0.15)] relative overflow-hidden"
              >
                {/* Cyber Receipt Header Overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/10 blur-[50px] pointer-events-none"></div>
                
                {/* Header Struk */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-white/5 relative z-10 gap-4">
                  <div>
                    <div className="text-theme-muted text-xs uppercase tracking-widest font-bold mb-2">Status Terminal</div>
                    <div className={`px-4 py-1.5 rounded-full text-sm font-black border inline-flex items-center gap-2 shadow-lg ${result.status === 'SUCCESS' ? 'bg-green-500/10 text-green-400 border-green-500/30 shadow-green-500/20' : result.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30 shadow-yellow-500/20' : 'bg-red-500/10 text-red-400 border-red-500/30 shadow-red-500/20'}`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse ${result.status === 'SUCCESS' ? 'bg-green-400' : result.status === 'PENDING' ? 'bg-yellow-400' : 'bg-red-400'}`}></span>
                      {result.status}
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-theme-muted text-xs uppercase tracking-widest font-bold mb-2">Sinkronisasi Waktu</div>
                    <div className="text-theme-text text-sm font-mono tracking-tight">{result.date}</div>
                  </div>
                </div>

                {/* Body Struk */}
                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                    <span className="text-theme-muted text-sm font-medium">No. Registri (TRX)</span>
                    <span className="text-theme-text font-mono tracking-wider font-bold">{result.id}</span>
                  </div>
                  <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                    <span className="text-theme-muted text-sm font-medium">Beban Muatan (Item)</span>
                    <span className="text-brand-400 font-black">{result.product} <span className="text-theme-text font-medium opacity-70">| {result.game}</span></span>
                  </div>
                  <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                    <span className="text-theme-muted text-sm font-medium">Target Operasi (ID)</span>
                    <span className="text-theme-text font-mono tracking-wider font-bold text-accent-neonBlue">{result.userId}</span>
                  </div>
                  <div className="flex justify-between items-center group/item hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                    <span className="text-theme-muted text-sm font-medium">Jalur Logistik (Metode)</span>
                    <span className="text-theme-text font-black uppercase text-accent-purple tracking-widest">{result.paymentMethod}</span>
                  </div>
                  
                  {/* Total Separator */}
                  <div className="border-t-2 border-dashed border-dark-border my-6"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-theme-muted text-sm uppercase tracking-widest font-bold">Total Nilai Kontrak</span>
                    <span className="text-brand-400 font-black text-2xl tracking-tighter drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">{result.price}</span>
                  </div>
                </div>

                {/* Render payment instructions if pending */}
                {result.status === "PENDING" && result.paymentCode && (
                  <div className="mt-8 pt-8 border-t border-dark-border relative z-10">
                    <div className="bg-dark-card border border-accent-gold/30 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                      <p className="text-xs uppercase tracking-widest font-bold text-accent-gold mb-3">Otorisasi Pembayaran Diperlukan</p>
                      <p className="text-sm text-theme-muted mb-4">Gunakan kode ini untuk menyelesaikan transfer pada metode yang dipilih.</p>
                      <div className="bg-dark-bg inline-block px-8 py-4 rounded-xl border border-dark-border mb-4">
                        <span className="text-3xl font-mono font-black tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          {result.paymentCode}
                        </span>
                      </div>
                      
                      {/* Tombol pelunasan khusus simulasi/demo admin */}
                      <div>
                        <button
                          onClick={async () => {
                            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
                            await fetch(`${apiUrl}/api/transactions/${result.id}/pay`, { method: "POST" });
                            handleSearch(new Event('submit') as any); // Refresh data
                          }}
                          className="mt-4 text-xs bg-dark-bg text-brand-400 px-4 py-2 rounded-lg border border-brand-500/30 hover:bg-brand-500 hover:text-white transition-colors font-bold tracking-wide uppercase"
                        >
                          [ADMIN] Jalankan Protokol Lunas
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
