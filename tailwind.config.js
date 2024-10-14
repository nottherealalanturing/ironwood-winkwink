/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
import flowbite from 'flowbite-react/tailwind';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],

  theme: {
    fontFamily: {
      campton: ['CamptonLight', 'sans-serif'],
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('daisyui'), flowbite.plugin()],
  daisyui: {
    themes: ['light'],
  },
};
