// tailwind.config.js

module.exports = {
  content: ["./src/App.{js,jsx,ts,tsx}",
   "./<custom-folder>/**/*.{js,jsx,ts,tsx}",
    "./src/<custom-folder>/**/*.{js,jsx,ts,tsx}",
     "./src/screens/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
