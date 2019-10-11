import React, { useState, useEffect, useContext } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { Typography, Avatar, IconButton } from "@material-ui/core";
// @material-ui/icons
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import VerticalNavBar from "components/NavBar/VerticalNavBar";
// style for this page
import homePageStyle from "static/jss/la-flamme-connectee/views/homePage";
// sections for this page
import ProjectSection from "src/sections/HomePage/ProjectSection";
import TeamSection from "src/sections/HomePage/TeamSection";
import ContactSection from "src/sections/HomePage/ContactSection";
// contexts
// import { ScrollContext } from "src/contexts/scroll.context.js";
// effetcs
// import { smoothScroll } from "src/effects/scrollToSection";
// import { animationsSection } from "src/effects/animationsSection";
// import ScrollMagic from "scrollmagic";
// static img import
// import backgroundImage from "static/img/stoves/stove1.png";
import logo from "static/img/logo/laflammeco.png";
import lepine from "static/img/logo/lepine.png";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Favorite } from "@material-ui/icons";
import ShoppingCart from "@material-ui/core/SvgIcon/SvgIcon";
import { useStyles } from "static/jss/la-flamme-connectee/views/contactStyle";
import imageBackground from "static/img/contura/background-contura3.jpg";
import svg3 from "static/img/svg/undraw_status_update_jjgk.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FooterCustom from "../components/Footer/FooterCustom";
import MediaSvg from "../components/Media/MediaSvg";
import svg1 from "../static/img/svg/undraw_contact_us_15o2.svg";
import svg2 from "../static/img/svg/undraw_status_update_jjgk.svg";
import svg from "../static/img/svg/undraw_Data_points_ubvs.svg";

function ContactPage({ ...props }) {
  const classes = useStyles();

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollTo = (element, to, duration) => {
    const start = element.scrollTop;
    const change = to - start + document.getElementById("main-panel").offsetTop;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const smoothScroll = target => {
    const targetScroll = document.getElementById(target);
    scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  };

  return (
    <div className={classes.root}>
      <Header
        color="transparent"
        brand="La Flamme Connectée"
        links={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white",
          navColor: "dark"
        }}
      />
      <Parallax image={imageBackground} filter="dark" className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer className={classes.titleRow}>
            <GridItem md={4} className={classes.mlAuto} />
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)} id="main-panel">
            <div className={classes.scrollDownContainer}>
              <IconButton className={classes.scrollDownButton} onClick={() => smoothScroll("contact")}>
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </div>
            <MediaSvg src={svg1} alt="contact-us" size="medium" mt={30} />
            <div className={classes.container}>
              <ContactSection />
            </div>
            <MediaSvg src={svg2} alt="about-us" size="medium" mt={90} />
            <div className={classes.container}>
              <TeamSection />
            </div>
            <MediaSvg src={svg3} alt="idea" size="medium" mt={90} />
            <div className={classes.container}>
              <ProjectSection />
            </div>
          </div>
          <FooterCustom />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
