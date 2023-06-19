// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Container from "./components/Container";
const colors = {
  palette: {
    mainDarkBlue: "#121220",
    mainCyan: "#94E4E2",
    primaryViolet: "#26263D",
    secondaryPurple: "#6F5BC6",
    grayText: "#D0D0D0",
    whiteText: "#FFFFFF",
    sectionAbout: "#1A1A2A",
  },
};
const theme = extendTheme({
  colors,
  components: { Container },
  fonts: {
    heading: `'CabinetGrotesk-Extrabold', sans-serif`,
    body: `'Satoshi-Medium', sans-serif`,
  },
});

export default theme;
