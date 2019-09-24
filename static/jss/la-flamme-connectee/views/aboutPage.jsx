import { container, title } from "static/jss/la-flamme-connectee.js";

const aboutPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  containerFull: {
    maxWidth: "100% !important",
    padding: "0 !important"
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    // paddingBottom: "50px"
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h1, & h3': {
      textAlign: 'center'
    }
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  logo: {
    width: 100,
    height: 100
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  scrollToBottom: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 80,
  },
  icon: {
    color: "#fff"
  }
};

export default aboutPageStyle;
