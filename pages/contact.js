import React, { useState, useEffect, useContext } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { Typography, Avatar } from "@material-ui/core";
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
import { useStyles } from "static/jss/la-flamme-connectee/views/productStyle";
import imageBackground from "static/img/contura/contura.jpg";
import svg3 from "static/img/svg/undraw_status_update_jjgk.svg";
import FooterCustom from "../components/Footer/FooterCustom";
import MediaSvg from "../components/Media/MediaSvg";
import svg1 from "../static/img/svg/undraw_contact_us_15o2.svg";
import svg2 from "../static/img/svg/undraw_status_update_jjgk.svg";
import svg from "../static/img/svg/undraw_Data_points_ubvs.svg";

function ContactPage({ ...props }) {
  const classes = useStyles();

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
          <div className={classNames(classes.main, classes.mainRaised)}>
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
