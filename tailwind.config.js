module.exports = {
  darkMode: "class", // hoặc 'media' nếu bạn muốn dựa vào cài đặt hệ thống
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...rootColors,
        ...generateColors,
      },
    },
  },
};

const generateColors = {
  darks: "#181A2A",
};

const rootColors = {
  dark: {
    darks: "#181A2A",
  },
  // orange: {
  //   50: "#fdf6f0",
  //   100: "#FDF3E7",
  //   200: "#f7d4af",
  //   300: "#F9CE9F",
  //   400: "#eb944d",
  //   500: "#F4A754",
  //   600: "#c05115",
  //   700: "#963c10",
  //   800: "#6a280a",
  //   900: "#3f1504",
  // },
};
