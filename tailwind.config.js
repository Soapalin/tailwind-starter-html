const { withAnimations } = require("animated-tailwindcss");

module.exports = withAnimations({
  content: [],
  mode: "jit",
  content: ["./src/**/*.{html,js,css}", "./src/index.html", "./src/styles.css"],
  theme: {
    colors: {
      lightBlue: "#a2d2ff",
      blue: "#90A8ED",
      blac: "#2a2a2a",
      purple: "#cdb4db",
      pink: "#FF90E8",
      lightPink: "#ffc8dd",
      orange: "#ff7849",
      green: "#23A094",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      ghostwhite: "#f8f8ff",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      fatface: ["Abril Fatface", "serif"],
      bebas: ["Bebas Neue", "display"],
      sans: ["Encode Sans", "sans-serif"],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/img/galaxy.png')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      dropShadow: {
        "3xl": "10px 15px 0px rgba(42, 42, 42, 1)",
      },
    },
  },
  plugins: [],
});
