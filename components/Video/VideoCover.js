import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ScrollToSectionComponent from "../ActionComponent/ScrollToSectionComponent";

const useStyles = makeStyles(theme => ({
  videoContainer: {
    position: "relative",
    width: "100%",
    height: "95vh",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    maxHeight: "1600px",
    overflow: "hidden",
    "&:after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      content: "''",
      display: "block",
      backgroundColor: "rgba(0,0,0,.2)"
    }
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
    display: "block",
    objectFit: "cover",
    objectPosition: "bottom"
  }
}));

export default function VideoSection({ children }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.videoContainer} id="video-fond">
        <video width="480" autoPlay muted loop playsInline className={classes.video}>
          <source type="video/mp4" src={require("/public/video/fire-video.mp4")} />
          <source type="video/webm" src={require("/public/video/fire-video.webm")} />
        </video>
        <>{children}</>
      </div>
      <ScrollToSectionComponent />
    </>
  );
}
