/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      xs: {max: '897px'}, // Mobile (iPhone 3 - iPhone XS Max).
      md: {min: '898px', max: '1199px'}, // Tablet (matches max: iPad Pro @ 1112px).
      lg: {min: '1200px ' }, // Desktop smallest.
      xl:{min:`1900px`}
    },
    extend: {
      spacing: {
        'input-height': 'calc(100vh - 5rem)',
      },
      overscrollBehavior: ['none'],
      fontFamily: {
        'script-alt': ['Hanley Pro Script Alt', 'cursive'],
      },
      keyframes: {
        loadingAnimation: {
          '0%': { fontSize: '24px' },
          '50%': { fontSize: '36px' },
          '100%': { fontSize: '24px' },
        },
      },
      animation: {
        'loading': 'loadingAnimation 2s infinite',
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
}

