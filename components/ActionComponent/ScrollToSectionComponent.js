import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { scroller } from "react-scroll/modules";

const useStyles = makeStyles(theme => ({
  scrollDownContainer: {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    zIndex: 3,
    "@media (max-height: 600px)": {
      display: "none !important"
    },
    "& .hidden": {
      display: "none"
    }
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

const scrollTo = el => {
  scroller.scrollTo(el, {
    duration: 1500,
    delay: 0,
    smooth: "easeInOutQuad"
  });
};

export default function ScrollToSectionComponent({ open }) {
  const classes = useStyles();
  return (
    <div className={classes.scrollDownContainer} style={{ display: !open ? "flex" : "none" }}>
      <IconButton className={classes.scrollDownButton} onClick={() => scrollTo("presentation")}>
        <ExpandMoreIcon fontSize="large" className={classes.arrowButton} />
      </IconButton>
    </div>
  );
}
