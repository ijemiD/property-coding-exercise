module.exports = {
  future: {
    removeDeprecatedUtilities: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#515151",
    },
    extend: {
      fontFamily: {
        muli: ["Muli"],
        merriWeather: ["MerriWeather"],
        "noto-sans": ['"Noto Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
