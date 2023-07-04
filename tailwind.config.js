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
    themes: [
      {'dark': {
        "primary": "#3e3ef9",
        "primary-focus": "#570df8",
        "primary-content": "#ffffff",
        "secondary": "#f000b8",
        "secondary-focus": "#bd0091",
        "secondary-content": "#ffffff",
        "accent": "#37cdbe",
        "accent-focus": "#2aa79b",
        "accent-content": "#ffffff",
        "neutral": "#2a2e37",
        "neutral-focus": "#16181d",
        "neutral-content": "#ffffff",
        "base-100": "#3d4451",
        "base-200": "#2a2e37",
        "base-300": "#16181d",
        "base-content": "#ebecf0",
        "info": "#66c6ff",
        "success": "#87d039",
        "warning": "#e2d562",
        "error": "#ff6f6f"
      }},
      'light',
    ]
  }
}