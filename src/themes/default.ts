import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  primary: {
    main: "#546e7a",
    light: "#819ca9",
    dark: "#29434e",
    contrastText: "#fff"
  },
  secondary: {
    main: "#b0bec5",
    light: "#e2f1f8",
    dark: "#808e95",
    contrastText: "#000"
  }
};
export const theme: ThemeOptions = {
  palette
};
