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
import ProductSection from "sections/HomePage/ProductSection";
import HowWorks from "sections/HomePage/HowWorks";
import DownloadSection from "sections/HomePage/DownloadSection";
import TopDownSection from "sections/HomePage/TopDownSection";
import ConnectSection from "sections/HomePage/ConnectSection";
import ProjectSection from "sections/HomePage/ProjectSection";
import TeamSection from "sections/HomePage/TeamSection";
import ContactSection from "sections/HomePage/ContactSection";
// contexts
// import { ScrollContext } from "src/contexts/scroll.context.js";
// effetcs
// import { smoothScroll } from "src/effects/scrollToSection";
// import { animationsSection } from "src/effects/animationsSection";
// import ScrollMagic from "scrollmagic";
// static img import
import backgroundImage from "static/img/stoves/stove1.png";
import logo from "static/img/laflammeco.png";
import lepine from "static/img/lepine.png";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Favorite } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: "70px"
  }
}));

function ContactPage({ ...props }) {
  // const { classes } = props;
  const classes = useStyles();
  let innerWidth;

  return (
    <div className={classes.root}>
      <Header color="dark" brand="La Flamme Connectée" links={<HeaderLinks />} fixed />
      <div className={classNames(classes.main, classes.mainRaised)} id="main-panel">
        <div className={classes.container}>
          <ContactSection />
        </div>
        <div className={classes.container}>
          <TeamSection />
        </div>
        <div className={classes.container}>
          <ProjectSection />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <Tooltip
                    id="instagram-twitter"
                    title="Suivez nous sur twitter"
                    placement={innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <i className={`${classes.socialIcons} fab fa-twitter`} />
                    </Button>
                  </Tooltip>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Tooltip
                    id="instagram-facebook"
                    title="Suivez nous sur facebook"
                    placement={innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="transparent"
                      href="https://www.facebook.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      className={classes.navLink}
                    >
                      <i className={`${classes.socialIcons} fab fa-facebook`} />
                    </Button>
                  </Tooltip>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Tooltip
                    id="instagram-tooltip"
                    title="Suivez nous sur instagram"
                    placement={innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="transparent"
                      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      className={classes.navLink}
                    >
                      <i className={`${classes.socialIcons} fab fa-instagram`} />
                    </Button>
                  </Tooltip>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              <strong>La Flamme Connectée </strong>
              &copy; {1900 + new Date().getYear()}, made with <Favorite className={classes.icon} /> by{" "}
              <a href="https://www.creative-tim.com?ref=mkr-footer" target="_blank">
                Florian SÉRAN
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default withStyles(homePageStyle)(ContactPage);
