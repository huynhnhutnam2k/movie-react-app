module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bw: "rgba(0,0,0,0.6)",
        get: " 0px 0px 7px 8px #ff00004d",
        main: "#ff0000",
      },
      dropShadow: {
        get2: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      backgroundImage: {
        gradient: "linear-gradient(to top, black, rgba(0,0,0,0))",
      },
      boxShadow: {
        get: " 0px 0px 7px 8px #ff00004d",
      },
      gridTemplateColumns: {
        layout: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
