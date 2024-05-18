/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-color": "hsla(291, 85%, 25%, 1)",
      },
      backgroundImage: {
        "custom-bg": `
          radial-gradient(
            at 28% 78%,
            hsla(280, 88%, 24%, 1) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 95% 79%,
            hsla(262, 96%, 12%, 1) 0px,
            transparent 50%
          )
        `,
      },
    },
  },
  plugins: [require("daisyui")],
};
