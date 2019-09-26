import { container, title } from "static/jss/la-flamme-connectee.js";

const homePageStyle = theme => ({
  root: {
    overflow: "hidden"
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  containerFull: {
    maxWidth: "100% !important",
    padding: "0 !important"
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center"
    // paddingBottom: "50px"
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
    fontFamily: "Courgette"
  },
  subtitle: {
    maxWidth: "500px",
    margin: "10px auto 0",
    lineHeight: "40px",
    letterSpacing: "3px",
    fontFamily: "Economica",
    color: "#fff"
  },
  bottomText: {
    fontFamily: "Quicksand",
    fontSize: "14px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px"
    }
  },
  logo: {
    width: 100,
    height: 100
  },
  main: {
    background: "#FFFFFF",
    width: "95%",
    margin: "-60px 0px 0px",
    position: "relative",
    zIndex: "3"
    // marginTop: "8000px !important",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px"
    // boxShadow:
    //   "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  scrollToBottom: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 80
  },
  lepine: {
    position: "absolute",
    left: 0,
    top: 0,
    transform: "rotate(-12deg)",
    width: 150,
    [theme.breakpoints.up("sm")]: {
      width: 175
    },
    [theme.breakpoints.up("md")]: {
      width: 200
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
    // height: "100vh",
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

  flammeConnect: {
    width: "450px",
    position: "absolute",
    // top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "-100px"
  },
  phone: {
    width: "500px",
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "-500px"
  },
  textContainer: {
    backgroundColor: "yellow",
    width: "30%",
    height: "300px"
  },
  fakePanel: {
    backgroundColor: "#fff",
    width: "95%",
    position: "fixed",
    bottom: 0,
    height: "70px",
    margin: "-60px 0px 0px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px 6px 0 0",
    zIndex: 1,
    left: "50%",
    transform: "translateX(-50%)"
  },
  testContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: "blue",
    position: "relative",
    marginTop: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  test: {
    backgroundColor: "red",
    width: "100px",
    height: "100px"
    // position: "absolute",
    // bottom: "0px",
    // left: "50%",
    // transform: "translateX(-50%)"
  },
  trigger: {
    position: "absolute",
    bottom: 0,
    height: "10px",
    width: "100%",
    backgroundColor: "red",
    zIndex: 2
  },
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > li": {
      padding: 0
    }
  },
  right: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    color: "red",
    padding: "2px",
    margin: "2px"
  }
});

export default homePageStyle;
