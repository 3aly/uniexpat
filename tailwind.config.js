module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('/src/assets/images/home.png')",
      },
      colors: {
        grey: { 100: "#f7f7f7", 200: "#666666" },
        black: { 100: "#262626", 200: "'#030303'" },
        purple: {
          100: "#4C3B4D",
          200: "#371373",
          300: "#30348d",
        },
        green: {
          100: "#009D52",
        },
      },
    },
  },
  plugins: [],
};
