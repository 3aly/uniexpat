module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('/src/assets/images/home.png')",
      },
      colors: {
        grey: {
          100: "#f7f7f7",
          200: "#666666",
          300: "#3d3d3d",
          400: "#dbdbdb",
        },
        black: { 100: "#262626", 200: "'#030303'" },
        purple: {
          100: "#4C3B4D",
          200: "#371373",
          300: "#30348d",
          400: "#1d64ec",
        },
        orange: { 100: "#fffdf8", 200: "#F45B31" },
        green: {
          100: "#009D52",
        },
      },
    },
  },
  plugins: [],
};
