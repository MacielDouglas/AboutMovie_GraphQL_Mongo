module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base_01: "#141824",
        base_card: "#75E4B3",
      },
      dropShadow: {
        "3xl": "0 25px 25px rgba(0, 0, 0, 0.35)",
      },
      screens: {
        mmd: "850px",
      },
    },
  },
  plugins: [],
};
