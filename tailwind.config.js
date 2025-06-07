export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14F195",
        dark: "#0f0f0f",
      },
      backgroundImage: {
        "hero-canvas": "url('/assets/canvas-bg.jpg')",
      },
    },
  },
  plugins: [],
};