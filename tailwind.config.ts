import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#CC2F25",
          alt: "#FF5555",
        },
        gray: {
          main: "#F3EED9",
          alt: "#F2F2F2",
        },
      },
      fontFamily: {
        primary: ["Righteous", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
