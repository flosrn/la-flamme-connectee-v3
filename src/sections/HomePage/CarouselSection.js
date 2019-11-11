import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
// images
import image1 from "static/img/flamco/flamco-info.jpg";
import image2 from "static/img/flamco/flamco-hand.jpg";
import image3 from "static/img/flamco/flamconnect-start.gif";
import image4 from "static/img/contura/background-contura-max.jpg";
import image5 from "static/img/objects/hand-iphone.png";
// animations
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
// styles
import { container } from "static/jss/la-flamme-connectee";

const useStyles = makeStyles(theme => ({
  section: {
    // padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
    overflow: "hidden"
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    overflow: "hidden"
  },
  imageHand: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "30%",
    zIndex: 100
  }
}));

export default function CarouselSection() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  };
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={10} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <img src={image1} alt="First slide" className="slick-image" />
                <img src={image2} alt="Second slide" className="slick-image" />
              </Carousel>
            </Card>
            {/* <div className={classes.imageContainer} id="img"> */}
            {/*  <Controller> */}
            {/*    <Scene triggerElement="#trigger4" duration="50%" triggerHook={matches ? 0.5 : 0} pin="#img"> */}
            {/*      <Timeline target={<img src={image5} alt="image5" className={classes.imageHand} />}> */}
            {/*        <Tween from={{ x: 400 }} to={{ x: 0 }} duration={2} /> */}
            {/*        <Tween from={{ filter: "grayscale(100%) blur(3px)" }} to={{ filter: "none" }} duration={0.5}> */}
            {/*          <img src={image4} alt="image4" className={classes.image} /> */}
            {/*        </Tween> */}
            {/*      </Timeline> */}
            {/*    </Scene> */}
            {/*  </Controller> */}
            {/* </div> */}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
