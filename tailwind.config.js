'use strict';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.pug'],
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  theme: {
    extend: {
      boxShadow: {
        main: '0 0 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
