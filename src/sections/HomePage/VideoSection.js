import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {});
  return (
    <>
      <GridContainer justify="center">
        <GridItem center>
          <div className={classes.root} id="video-fond">
            <video autoPlay loop className={classes.video}>
              <source type="video/mp4" src={require("/public/img/flamco/stove-start.mp4")} />
              {/* <source type="video/webm" src={require("/public/img/flamco/fire.webm")} /> */}
            </video>
          </div>
        </GridItem>
      </GridContainer>
    </>
  );
}
