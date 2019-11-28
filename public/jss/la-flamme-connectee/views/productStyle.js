import makeStyles from "@material-ui/core/styles/makeStyles";

import { title, grayColor } from "public/jss/la-flamme-connectee";

export const useStyles = makeStyles(theme => ({
  title: {
    ...title,
    marginBottom: 0
  },
  mainPrice: {
    margin: "10px 0px 25px"
  },
  textCenter: {
    textAlign: "center!important"
  },
  features: {
    paddingTop: "30px"
  },
  productPage: {
    padding: "40px",
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto"
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center"
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: grayColor[6]
      },
      "& > div": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8"
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center"
      }
    }
  },
  relatedProducts: {
    marginTop: "50px",
    "& $title": {
      marginBottom: "80px"
    }
  },
  pickSize: {
    marginTop: "50px"
  },
  subtitle: {
    fontSize: "14px",
    fontStyle: "italic"
  }
}));
