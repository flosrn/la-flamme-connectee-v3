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
  main,
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
  scrollToBottom: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 80
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
  }
}));
