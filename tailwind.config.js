
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FBA108", 
          black: "#000000",
          grey: "#A3A3A3",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
