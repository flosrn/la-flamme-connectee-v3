import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  container,
  main,
  mainRaised,
  title,
  whiteColor,
  grayColor,
  section,
  hexToRgb
} from "public/jss/la-flamme-connectee";

export const useStyles = makeStyles(theme => ({
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised,
    margin: "-20px 120px -70px"
  },
  parallax: {
    overflow: "hidden",
    backgroundPosition: "bottom",
    alignItems: "flex-start",
    height: "95vh"
  },
  containerBackground: {
    ...container,
    zIndex: "2",
    position: "relative",
    marginTop: theme.spacing(14),
    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing(15)
    }
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    position: " absolute",
    bottom: "100px",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: "1",
    width: "100%"
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h1, & h3": {
      textAlign: "center"
    }
  },
  gridAbsolute: {
    position: "fixed",
    top: 0
  },
  textCenter: {
    display: "flex",
    textAlign: "center"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "20px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    letterSpacing: "3px",
    fontFamily: "Courgette",
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px"
    }
  },
  subtitle: {
    maxWidth: "500px",
    margin: "10px auto 0",
    lineHeight: "40px",
    letterSpacing: "3px",
    fontFamily: "Economica",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px"
    }
  },
  bottomText: {
    fontFamily: "Quicksand",
    fontSize: "14px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      letterSpacing: "2px"
    }
  },
  logo: {
    width: 100,
    height: 100,
    [theme.breakpoints.down("xs")]: {
      width: 85,
      height: 85
    }
  },
  scrollToBottom: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 80
  },
  lepine: {
    zIndex: 2,
    position: "absolute",
    left: 0,
    top: 0,
    transform: "rotate(-12deg)",
    width: 150,
    [theme.breakpoints.up("sm")]: {
      // width: 175
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
      top: 60
    },
    [theme.breakpoints.up("lg")]: {
      width: 215
    }
  },
  fixed: {
    position: "fixed !important",
    top: "100% !important"
  },
  fixedParallax: {
    position: "fixed !important",
    top: 0
  },
  relative: {
    position: "relative"
  },
  absolute: {
    position: "absolute",
    top: "170% !important"
  },
  titleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2
  },
  sectionOverview: {
    backgroundColor: "#33ccff",
    width: "100%",
    position: "relative",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100%"
  },
  overviewContainer: {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  buttonPlay: {
    marginTop: theme.spacing(5)
  },
  scrollDownContainer: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: "-85px",
    display: "flex",
    justifyContent: "center"
  },
  scrollDownButton: {
    color: "#fff",
    animationName: "$bounce",
    animationDuration: "1.5s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease"
  },
  bottom: {
    padding: theme.spacing(5, 0, 5)
  },
  arrowButton: {
    fontSize: "80px"
  },
  "@keyframes bounce": {
    "0%": { top: "0px" },
    "50%": { top: "-20px" },
    "100%": { top: "0px" }
  }
}));
