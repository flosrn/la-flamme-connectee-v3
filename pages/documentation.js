import React from "react";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import HowWorks from "src/sections/HomePage/HowWorks";
import TopDownSection from "src/sections/HomePage/TopDownSection";
// images
import svg1 from "public/img/svg/undraw_completed_steps_yurw (1).svg";
import svg2 from "public/img/svg/undraw_light_the_fire_gt58.svg";
import { withAuthSync } from "../api/withAuth";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";

const useStyles = makeStyles(theme => ({
  youtubeContainer: {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    paddingTop: 25,
    height: 0
  },
  youtubeVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%"
  }
}));

function DocumentationPage({ currentUser }) {
  const classes = useStyles();
  const opts = {};
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura-400.jpg")}
      sectionId="howWorks"
      backgroundPosition="0 100%"
      currentUser={currentUser}
      meta={{ title: "Documentation" }}
    >
      <MediaSvg src={svg1} alt="questions" size="medium" mt={50} mb={30} />
      <HowWorks />
      {/* <GridContainer justify="center"> */}
      {/*  <GridItem xs={11} md={6} center className={classes.youtubeContainer}> */}
      {/*    <YouTube videoId="2g811Eo7K8U" opts={opts} className={classes.youtubeVideo} /> */}
      {/*  </GridItem> */}
      {/* </GridContainer> */}
      <MediaSvg src={svg2} alt="questions" size="medium" mt={20} />
      <TopDownSection />
    </LayoutPage>
  );
}

export default withAuthSync(DocumentationPage);
