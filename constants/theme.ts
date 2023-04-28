import { extendTheme } from "native-base";

const roastmapColors = {
  primary: {
    100: "#0a2021",
    200: "#0c2527",
    300: "#0e2a2c",
    400: "#0f3032",
    500: "#113537",
    600: "#29494b",
    700: "#415d5f",
    800: "#587273",
    900: "#708687",
  },
  secondary: {
    100: "#998c7d",
    200: "#b3a492",
    300: "#ccbba6",
    400: "#e6d3bb",
    500: "#ffead0",
    600: "#ffecd5",
    700: "#ffeed9",
    800: "#fff0de",
    900: "#fff2e3",
  },
  tertiary: {
    100: "#944355",
    200: "#ad4e63",
    300: "#c65972",
    400: "#de6480",
    500: "#F76F8E",
    600: "#f87d99",
    700: "#f98ca5",
    800: "#f99ab0",
    900: "#faa9bb",
  }
};

export const theme = extendTheme({ colors: roastmapColors });