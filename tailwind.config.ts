import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Dodaj dodatkowe ścieżki, jeśli to konieczne
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;