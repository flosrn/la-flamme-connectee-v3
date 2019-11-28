import { title } from "public/jss/la-flamme-connectee";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  section: {
    textAlign: "center"
    // background: "radial-gradient(ellipse at center, #585858 0, #232323 100%)",
    // fallbacks: {
    //   backgroundColor: "#343434"
    // }
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: "50px",
    "& h1, & h3": {
      textAlign: "center"
    }
  },
  gridLeft: {
    [theme.breakpoints.up("md")]: {
      // alignItems: 'flex-start',
    }
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
    // color: "#fff"
  },
  description: {
    // color: "#999",
    marginLeft: "50px",
    marginRight: "50px"
    // color: "#fff"
  },
  stove: {
    width: "60%"
  }
}));
