import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'bg-dark-purple': '#2d2b55',
        'bg-very-dark-purple': '#271B4C',
        'bg-light-gray': '#D9D9D9',
        'bg-very-dark': '#1A1925',
        'bg-dark-blue-gray': '#282c34',
        'bg-main-blue': '#526FFF',
        'bg-purple': '#6E52C2',
        'bg-very-dark-gray': '#16191d',
        'bg-dark-gray-green': '#224041',

        // Syntax highlighting - code
        'syntax-green': '#b1ff96',
        'syntax-pink': '#ff6892',
        'syntax-cyan': '#a3ffff',
        'syntax-light-cyan': '#9effff',
        'syntax-violet': '#bb73d2',
        'syntax-lime': '#98C379',
        'syntax-gold': '#e5c07b',
        'syntax-blue-cyan': '#54b2be',
        'syntax-red': '#da6a73',
        'syntax-light-blue': '#4bafef',
        'syntax-orange': '#d19a59',
        'syntax-comment': '#727272',
        'syntax-blue': '#5E84CD',
        'syntax-yellow': '#F0E16B',
        'syntax-cursor-blue': '#5266e6',

        // Accents
        'accent-orange': '#FFA448',
        'accent-green': '#5ad27a',
        'accent-green-dark': '#4baf66',
        'accent-orange-medium': '#b87635',

        // Borders & secondary
        'border-orange-dark': '#99612a',
        'border-bright-blue': '#5a64ff',

        // Buttons
        'btn-purple': '#4353a5',
        'btn-purple-hover': '#4b5ebb',
      },
    },
  },
  plugins: [],
} satisfies Config
