function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      //console.log(opacityValue);
      return `rgba(var(${variable}), ${opacityValue})`;
    }

    return `rgb(var(${variable})`;
  };
}

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
        banner4: "url(/assets/review.png)",
        banner5: "url(/assets/hello.png)",
        queryBanner:
          "url(https://i.ibb.co.com/3Cj8zLL/thoughtful-woman-with-laptop-looking-big-question-mark-1150-39362.jpg)",
      },
      colors: {
        text: withOpacity("--text"),
        background: withOpacity("--background"),
        primary: withOpacity("--primary"),

        secondary: withOpacity("--secondary"),
        accent: withOpacity("--accent"),
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
