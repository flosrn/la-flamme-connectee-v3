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
import { useStyles } from "static/jss/la-flamme-connectee/views/downloadPageStyle";
// sections for this page
import HowWorks from "src/sections/HomePage/HowWorks";
import DownloadSection from "src/sections/HomePage/DownloadSection";
import TopDownSection from "src/sections/HomePage/TopDownSection";
import ConnectSection from "src/sections/HomePage/ConnectSection";
// static img import
import backgroundImage from "static/img/contura/background-contura4.jpg";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Favorite } from "@material-ui/icons";
import ShoppingCart from "@material-ui/core/SvgIcon/SvgIcon";
import svg1 from "static/img/svg/undraw_questions_75e0.svg";
import svg2 from "static/img/svg/undraw_download_pc33.svg";
import svg3 from "static/img/svg/undraw_signal_searching_bhpc.svg";
import svg4 from "static/img/svg/undraw_light_the_fire_gt58.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MediaSvg from "../components/Media/MediaSvg";
import FooterCustom from "../components/Footer/FooterCustom";

function DownloadPage({ ...props }) {
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
          height: 650,
          color: "white",
          navColor: "dark"
        }}
      />
      <Parallax filter="dark" image={backgroundImage} className={classes.pageHeader}>
        <div className={classes.container} />
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)} id="main-panel">
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.scrollDownContainer}>
              <IconButton className={classes.scrollDownButton} onClick={() => smoothScroll("download")}>
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </div>
            <MediaSvg src={svg2} alt="questions" size="medium" />
            <DownloadSection />
            <MediaSvg src={svg3} alt="questions" size="small" />
            <ConnectSection />
          </div>
          <FooterCustom />
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
