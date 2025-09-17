// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "amritsar-background": "rgb(241, 222, 255)", // Keeping a very light background
        "amritsar-accent": "rgb(203, 150, 242)", // Your new base color
        "amritsar-dark-accent": "rgb(128, 0, 128)", // A darker version for dots
        "amritsar-heading": "rgb(51, 51, 51)",
        "amritsar-text": "rgb(85, 85, 85)",
        "amritsar-link": "rgb(102, 0, 102)",
      },
      boxShadow: {
        "md-top-bottom":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 -4px 6px -1px rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
