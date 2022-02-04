const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        success: '#22772A',
        warning: '#EBCD1B',
        danger: '#772222',
        background: '#151315',
        border: '#FFFFFF',
        test: '#FFFFFF',
        highlight: '#FFDD11',
        blue: {
          ...colors.blue,
          light: '#4466CC',
          medium: '#2F50A2',
          dark: '#113366',
        },
        red: {
          ...colors.red,
          light: '#CC7777',
          medium: '#772222',
          dark: '#550000'
        },
        yellow: {
          ...colors.yellow,
          medium: '#FFDD11'
        }
      }
    },
  },
  plugins: [],
}
