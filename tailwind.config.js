/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/assets/layered-waves-haikei.svg)",
        banner2: "url(/assets/wave-haikei.svg)",
        banner3: "url(/assets/stacked-peaks-haikei.svg)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
