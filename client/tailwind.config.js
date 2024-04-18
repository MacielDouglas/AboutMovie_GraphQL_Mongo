module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base_01: "#141824",
        base_card: "#75E4B3",
        button_one: "#1d7874",
        button_two: "#b5dead",
      },
      dropShadow: {
        "3xl": "0 25px 25px rgba(0, 0, 0, 0.35)",
      },
      screens: {
        mmd: "850px",
      },
      fontFamily: {
        roboto: ["Roboto Flex", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nothing_you: ["Nothing You Could Do", "cursive"],
      },
    },
  },
  plugins: [],
};
