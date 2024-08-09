import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
        fontFamily: "Roboto, sans-serif",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        bg: "#F8375D",
        color: "white",
        _hover: {
          bg: "#ff96ab",
        },
      },
    },
    NumberInput: {
      baseStyle: {
        field: {
          bg: "#F8375D",
          color: "white",
        },
        stepper: {
          color: "white",
          _active: {
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;
