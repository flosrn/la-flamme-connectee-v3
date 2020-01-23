import { cardTitle, smallTitle } from "public/jss/la-flamme-connectee";
import imagesStyle from "public/jss/la-flamme-connectee/imagesStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    zIndex: 2
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
  }
}));
