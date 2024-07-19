/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: "#ffd500",
        },
        beige: "#f6f3ec",
        green: "#1bba86",
        blue: "#1286cc",
      },
      fontSize: {
        lg: ["18px", "26px"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
