import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        container: "1320px",
        "desktop-container": "1626px",
      },
      colors: {
        "yellow-900": "#FBFBFE",
        "yellow-800": "#FFFCF0",
        "yellow-700": "#FFFAE5",
        "yellow-600": "#FFF5CC",
        "yellow-500": "#FFEB99",
        "yellow-400": "#FFE066",
        "yellow-300": "#FFD633",
        "yellow-200": "#FFD11A",
        "dark-900": "#666666",
        "dark-800": "#595959",
        "dark-700": "#4D4D4D",
        "dark-600": "#404040",
        "dark-500": "#333333",
        "dark-400": "#262626",
        "dark-300": "#1A1A1A",
        "dark-200": "#141414",
        "grey-900": "#FCFCFD",
        "grey-800": "#F7F7F8",
        "grey-700": "#F1F1F3",
        "grey-600": "#E4E4E7",
        "grey-500": "#CCCCCC",
        "grey-400": "#B3B3B3",
        "grey-300": "#98989A",
        "grey-200": "#7E7E81",
      },
      height: {
        0.5: "2px",
        13: "52px",
      },
      width: {
        "custom-width": "calc(100% + 6.5px)",
        13: "52px",
      },
    },
  },
  plugins: [],
};
export default config;
