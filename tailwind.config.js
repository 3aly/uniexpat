module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('/src/assets/images/home.png')",
      },
      colors: {
        purple: {
          100: "#4C3B4D",
          200: "#371373",
        },
        green: {
          100: "#009D52",
        },
      },
    },
  },
  plugins: [],
};
