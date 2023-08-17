import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#222222",
      gray: "#e5e5e5",
      lightGray: "#F5F5F5",
      primary: "#07c655",
      secondary: "#4A8FE7",
      error: "#F2545B",
    },
  },
  plugins: [],
};
export default config;
