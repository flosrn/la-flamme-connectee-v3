import React from "react";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  bar: {
    height: "4px",
    width: "85px",
    background: "#13c4a1",
    margin: "15px auto 25px",
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    "&:after": {
      content: "''",
      position: "absolute",
      left: "0",
      top: "0",
      height: "100%",
      width: "5px",
      background: "#ffffff",
      animationDuration: "2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationName: "$MOVE-BG"
    }
  },
  "@keyframes MOVE-BG": {
    from: {
      webkitTransform: "translateX(0)",
      transform: "translateX(0)"
    },
    to: {
      webkitTransform: "translateX(85px)",
      transform: "translateX(85px)"
    }
  }
}));

export default function Title(props) {
  const { variant, color, children } = props;
  const classes = useStyles();
  return (
    <div className={classes.sectionTitle}>
      <Typography variant={variant} color={color} className={classes.title}>
        {children}
      </Typography>
      <div className={classes.bar} />
    </div>
  );
}
