import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "rgb(253 242 248)",
        "primary-100": "rgb(252 231 243)",
        "primary-200": "rgb(251 207 232)",
        "primary-300": "rgb(249 168 212)",
        "primary-400": "rgb(244 114 182)",
        "primary-500": "rgb(236 72 153)",
        "primary-600": "rgb(219 39 119)",
        "primary-700": "rgb(190 24 93)",
        "primary-800": "rgb(157 23 77)",
        "primary-900": "rgb(131 24 67)",
        "primary-950": "rgb(80 7 36)",
      },
    },
  },
  plugins: [],
};
export default config;
