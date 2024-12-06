import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        screens: {
          'mobile': '480px', // Custom breakpoint for mobile devices
          // 'tablet': '768px', // You can define other breakpoints as needed
          // 'laptop': '1024px',
          // 'desktop': '1280px',
      }
    },
  },
  plugins: [],
} satisfies Config;
