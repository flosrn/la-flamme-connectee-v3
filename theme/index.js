import { createMuiTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

const theme = createMuiTheme({
  palette,
  // typography
  overrides
});

export default theme;

// Create a theme instance.
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#F2785C"
//     },
//     secondary: {
//       main: "#19857b"
//     },
//     error: {
//       main: red.A400
//     },
//     background: {
//       default: "#fff"
//     }
//   }
// });
