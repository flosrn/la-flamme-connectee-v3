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
// styles
import { container } from "public/jss/la-flamme-connectee";

const useStyles = makeStyles(theme => ({
  section: {
    paddingBottom: 50
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
          <GridItem xs={12} sm={12} md={9} lg={7} className={classes.marginAuto}>
            <Card className="wow fadeInUp">
              <Carousel {...settings}>
                <img src={require("/public/img/flamco/flamco-info.jpg")} alt="First slide" className="slick-image" />
                <img src={require("/public/img/flamco/flamco-hand.jpg")} alt="Second slide" className="slick-image" />
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
