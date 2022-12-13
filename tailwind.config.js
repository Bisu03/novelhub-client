module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      textColor: {
        skin: {
          base: "var(--color-secondary)",
          muted: "var(--color5)",
          red: "var(--color6)",
          yello: "var(--color8)",
          inverted: "var(--color-primary)",
        },
      },
      backgroundColor: {
        skin: {
          backgroud: "var(--color-backgroud)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          color4: "var(--color4)",
          color5: "var(--color5)",
          color6: "var(--color6)",
          color7: "var(--color7)",
          color8: "var(--color8)",
        },
      },
      borderColor: {
        skin: {
          primary: "var(--color-primary)",
          color7: "var(--color7)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};