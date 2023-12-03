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
        "project-cape":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(53, 53, 53, 0.80) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
