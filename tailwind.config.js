/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))'
      },
      fontFamily: {
        lobster: ['var(--font-lobster)'],
        roboto: ['var(--font-roboto)'],
      },
      screens: {
        'sm': '640px',    // Petite taille d'écran (ex: téléphones mobiles)
        'md': '768px',    // Taille moyenne d'écran (ex: tablettes)
        'lg': '1024px',   // Grandes tailles d'écran (ex: ordinateurs de bureau)
        'xl': '1280px',   // Très grandes tailles d'écran (ex: grands moniteurs)
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark']
  }
}