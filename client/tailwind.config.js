module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base_01: "#091C30",
        base_card: "#75E4B3",
      },
      dropShadow: {
        "3xl": "0 25px 25px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
