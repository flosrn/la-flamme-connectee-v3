import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  loaderContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999999,
    overflow: "hidden"
    // background: "radial-gradient(ellipse at center,#585858 0,#232323 100%)",
    // backgroundSize: "550% 450%",
    // backgroundColor: "#343434"
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    width: "80px",
    height: "80px",
    margin: "0 auto",
    top: "50%",
    marginTop: "-95px",
    color: "#212121",
    "&:after": {
      content: "''",
      display: "block",
      borderRadius: "50%",
      width: "0",
      height: "0",
      margin: "6px",
      boxSizing: "border-box",
      border: `26px solid ${theme.palette.success.main}`,
      borderColor: `${theme.palette.success.main} transparent ${theme.palette.secondary.main} transparent`,
      animationName: "$hourglass",
      animationDuration: " 1.2s",
      animationIterationCount: "infinite"
    }
  },
  "@keyframes hourglass": {
    "0%": {
      transform: "rotate(0)",
      animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    "50%": {
      transform: "rotate(900deg)",
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)"
    },
    "100%": {
      transform: "rotate(1800deg)"
    }
  }
}));

function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader}>CHARGEMENT...</div>
    </div>
  );
}

export default Loader;
