/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        wheat: 'var(--color-wheat)',          // main bg color
        brown: 'var(--color-brown)',          // buttons, primary color
        pink: 'var(--color-pink)',            // accent color
        gray: 'var(--color-gray)',            // neutral color, secondary text
        darkBrown: 'var(--color-darkBrown)',  // dark text, headers, footers
        lightYellow: 'var(--color-lightYellow)', // highlights, accents
      },
    },
  },
  plugins: [],
};
