/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode via class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: '#FD6F00',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        notoSans: ["var(--font-notoSans)"],
        siligrui: ["var(--font-siliguri)"],
        mon: ["var(--font-mon)"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
