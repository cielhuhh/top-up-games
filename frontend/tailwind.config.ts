import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24', // Luminous Gold
          500: '#f59e0b', // Primary Sultan Gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        dark: {
          bg: 'rgb(var(--bg-main) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
          border: 'rgb(var(--border-main) / <alpha-value>)',
        },
        theme: {
          text: 'rgb(var(--text-main) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
        },
        accent: {
          gold: '#fbbf24',
          neonBlue: '#06b6d4',
          purple: '#8b5cf6',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #14b8a6, 0 0 10px #14b8a6' },
          '100%': { boxShadow: '0 0 10px #14b8a6, 0 0 20px #14b8a6' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
