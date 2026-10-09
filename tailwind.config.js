/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: '#0B0D10',        // Near-black charcoal
          surface: '#12161C',   // Dark graphite card surface
          elevated: '#1A202C',  // Elevated element background
          border: '#242C38',    // Subtle dark-gray border
          borderLight: '#333D4D',
          muted: '#8E9AA8',     // Muted gray secondary text
          light: '#F3F5F7',     // Crisp white/light primary text
          accent: '#FF6B00',    // Vivid energetic orange
          accentHover: '#FF8533', // Warm amber glow
          accentGlow: 'rgba(255, 107, 0, 0.25)',
          gold: '#FFB800'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 35px -5px rgba(255, 107, 0, 0.35)',
        'glow-subtle': '0 0 20px -3px rgba(255, 107, 0, 0.15)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
      },
      animation: {
        'pulse-subtle': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatWatch 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        floatWatch: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
