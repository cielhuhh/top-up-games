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
        <footer className="border-t border-dark-border mt-20 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold tracking-tight text-theme-text">
                Sultan <span className="text-brand-400">Top Up</span>
              </span>
              <p className="text-sm text-theme-muted max-w-sm">
                Platform layanan top up game termurah, tercepat, dan terpercaya di Indonesia. Otomatis masuk 24 Jam.
              </p>
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              &copy; {new Date().getFullYear()} Sultan Top Up. Tugas Proyek Perangkat Lunak.
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
