/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: "#ffd500",
        },
      },
      fontSize: {
        lg: ['18px', '26px']
      }
    },
  },
  plugins: [],
};
