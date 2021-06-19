import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

export const theme = extendTheme(
  {
    breakpoints,
    fontSizes: {
      lg: "18px",
    },
    colors: {
      white: {
        full: "#ffffff",
      },
      blue: {
        light: "#b7d7ea",
      },
      black: {
        full: "#000000",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);
