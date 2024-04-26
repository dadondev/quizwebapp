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
        bg: "#f8f8f8",
        white: "#fff",
        purple: "#7C5DFA",
        text: "#141416",
        textGray: "#94A3B8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wave: {
          "0%": {
            color: "text",
          },
          "50%": {
            color: "red",
          },
        },
      },
      animation: {
        "wave-handing": "wave 2s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
export default config;
