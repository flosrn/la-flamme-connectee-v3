import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: { height: "100vh" },
  box: {
    height: "400px",
    background: "red"
  }
}));

export default function AnimationsSection() {
  const classes = useStyles;
  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Controller>
          <Scene triggerElement=".section" indicators>
            <Timeline target={<div className={classes.box}>box</div>} />
          </Scene>
        </Controller>
      </div>
    </div>
  );
}
