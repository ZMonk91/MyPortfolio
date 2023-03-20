import { extendTheme } from "@chakra-ui/react";

const lightTheme = extendTheme({
  colors: {
    brand: {
      50: "#f2f2f2",
      100: "#e6e6e6",
      200: "#cccccc",
      300: "#b3b3b3",
      400: "#999999",
      500: "#808080",
      600: "#666666",
      700: "#4d4d4d",
      800: "#333333",
      900: "#1a1a1a",
    },
    primary: {
      50: "#fdf2e8",
      100: "#f6d1b1",
      200: "#edaf7a",
      300: "#e58d43",
      400: "#dc6b0c",
      500: "#c05100",
      600: "#9b4000",
      700: "#763000",
      800: "#512000",
      900: "#2c1000",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
});

export default lightTheme;
