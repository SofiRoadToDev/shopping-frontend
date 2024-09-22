/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "daenerys-hero": "url(./assets/images/daenerys.png)",
      }),
    },
  },
  plugins: [],
};
