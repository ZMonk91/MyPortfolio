import { extendTheme } from "@chakra-ui/react";

const darkTheme = extendTheme({
  colors: {
    brand: {
      50: "#f5f5f5",
      100: "#e0e0e0",
      200: "#b3b3b3",
      300: "#808080",
      400: "#4d4d4d",
      500: "#262626",
      600: "#0f0f0f",
      700: "#000000",
      800: "#000000",
      900: "#000000",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
});

export default darkTheme;