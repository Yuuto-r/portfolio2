/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#f6f7f4",
        muted: "#666f7a",
        line: "#dfe4ea",
        teal: {
          700: "#0f766e",
          900: "#0b4f4a",
        },
        ember: "#b94662",
        ochre: "#c1842f",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 30, 35, 0.12)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
