import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";

import carouselStyle from "static/jss/la-flamme-connectee/views/componentsSections/carouselStyle";

import image1 from "static/img/flamco/flamco-info.jpg";
import image2 from "static/img/flamco/flamco-hand.jpg";
import image3 from "static/img/flamco/flamconnect-start.gif";

const useStyles = makeStyles(carouselStyle);

export default function CarouselSection() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
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
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <img src={image1} alt="First slide" className="slick-image" />
                <img src={image2} alt="Second slide" className="slick-image" />
                <img src={image3} alt="Third slide" className="slick-image" />
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
