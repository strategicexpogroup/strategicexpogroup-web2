import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1E3A8A",
          accent: "#F59E0B",
          neutral: "#F9FAFB",
          text: "#111827",
          muted: "#6B7280"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -12px rgba(17, 24, 39, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
