import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: "#001e47",
    main: "#0E4473",
    light: "#486fa2"
  },
  secondary: {
    contrastText: white,
    dark: "#F2785C",
    main: "#FF8A73",
    // main: "#ff7961",
    light: "#ffa98a"
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: "#13c4a1",
    light: colors.green[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  title: {
    primary: "#212529"
  },
  text: {
    primary: "#818992",
    secondary: "#fff",
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: "#fff",
    paper: white
  },
  divider: colors.grey[200]
};

// primary: {
//   contrastText: white,
//     dark: colors.indigo[900],
//     main: colors.indigo[500],
//     light: colors.indigo[100]
// },
