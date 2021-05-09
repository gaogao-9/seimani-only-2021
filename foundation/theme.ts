import { extendTheme,
    withDefaultColorScheme,
    theme as baseTheme, } from "@chakra-ui/react";

export const theme = extendTheme(
  {
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
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);
