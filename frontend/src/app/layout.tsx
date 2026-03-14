import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../components/ThemeProvider';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Sultan Top Up | Platform Top Up Game Cepat & Termurah',
  description: 'Top up Diamond Mobile Legends, Free Fire, Valorant Points instan dan aman hanya di Sultan Top Up.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans`}>
        <ThemeProvider>
          {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-dark-border bg-dark-bg/50 mt-20 pt-16 pb-8 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 border-b border-dark-border/50 pb-10 mb-8 relative z-10">
            <div className="flex flex-col gap-4 w-full md:w-1/3">
              <span className="text-2xl font-black tracking-tight text-theme-text flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-accent-neonBlue flex items-center justify-center font-bold text-white shadow-lg">S</div>
                Sultan <span className="text-brand-400">Top Up</span>
              </span>
              <p className="text-sm text-theme-muted leading-relaxed">
                Platform top up game termurah, tercepat, dan terpercaya di Indonesia. Proses instan otomatis masuk 24 Jam Non-Stop.
              </p>
            </div>
            
            <div className="flex gap-16 w-full md:w-2/3 justify-start md:justify-end">
              <div className="flex flex-col gap-3">
                <h4 className="text-theme-text font-bold mb-2">Menu Utama</h4>
                <a href="/#games" className="text-sm text-theme-muted hover:text-brand-400 transition-colors">Daftar Game</a>
                <a href="/cara-kerja" className="text-sm text-theme-muted hover:text-brand-400 transition-colors">Cara Kerja</a>
                <a href="/lacak" className="text-sm text-theme-muted hover:text-brand-400 transition-colors">Lacak Pesanan</a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-theme-text font-bold mb-2">Bantuan & Legal</h4>
                <a href="/bantuan" className="text-sm text-theme-muted hover:text-brand-400 transition-colors">Hubungi Bantuan</a>
                <a href="/syarat-ketentuan" className="text-sm text-theme-muted hover:text-brand-400 transition-colors">Syarat & Ketentuan</a>
                <a href="/kebijakan-privasi" className="text-sm text-theme-muted hover:text-brand-400 transition-colors">Kebijakan Privasi</a>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-theme-muted/60 text-center flex flex-col items-center gap-2 relative z-10">
            <p>&copy; {new Date().getFullYear()} Sultan Top Up. Seluruh hak cipta dilindungi.</p>
            <p className="text-xs">Dibuat dengan bangga untuk Gamers Indonesia.</p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
