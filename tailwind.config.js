/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FD721C",
        header: "#222679",
        footer: "#1E246C",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        squada: ['"Squada One"', 'sans-serif']
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};
