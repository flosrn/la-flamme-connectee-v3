import { cardTitle, title, smallTitle } from "public/jss/la-flamme-connectee";
import imagesStyle from "public/jss/la-flamme-connectee/imagesStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  section: {
    // padding: "70px 0",
    textAlign: "center",
    backgroundImage: `url(${require("/public/img/contura/background-contura-400.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "left bottom",
    position: "relative",
    padding: "50px 0",
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      backgroundColor: "rgba(0,0,0,.6)"
    },
    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "10% bottom",
      margin: "0 -15px"
    }
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#fff"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    ...smallTitle,
    color: "#fff",
    fontWeight: 800
  },
  description: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 600
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  imgSize: {
    width: 140
  },
  gradientDark: {
    // backgroundImage: `url(${require("/public/img/contura/background-contura-max.jpg")})`,
    // backgroundSize: "cover",
    // backgroundPosition: "left bottom",
    // position: "relative",
    // "&:after": {
    //   content: "''",
    //   display: "block",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   zIndex: 1,
    //   backgroundColor: "rgba(0,0,0,.5)"
    // }
  },
  relativeContainer: {
    position: "relative",
    zIndex: 2
  }
}));
