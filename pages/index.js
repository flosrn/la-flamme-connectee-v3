import React, { useState, useEffect, useContext } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";
// @material-ui/icons
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import VerticalNavBar from "components/NavBar/VerticalNavBar";
// style for this page
import homePageStyle from "static/jss/la-flamme-connectee/views/homePage.jsx";
// sections for this page
import ProductSection from "sections/HomePage/ProductSection.jsx";
import HowWorks from "sections/HomePage/HowWorks.jsx";
import DownloadSection from "sections/HomePage/DownloadSection.jsx";
import TopDownSection from "sections/HomePage/TopDownSection.jsx";
import ConnectSection from "sections/HomePage/ConnectSection.jsx";
import ProjectSection from "sections/HomePage/ProjectSection.jsx";
import TeamSection from "sections/HomePage/TeamSection.jsx";
import ContactSection from "sections/HomePage/ContactSection.jsx";
// contexts
import { ScrollContext } from "src/contexts/scroll.context.js";
// effetcs
import { smoothScroll } from "src/effects/scrollToSection";
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

function HomePage({ ...props }) {
  const { classes } = props;
  let innerWidth;

  return (
    <div className={classes.root}>
      <Header
        color="dark"
        brand="La Flamme Connectée"
        links={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 650,
          color: "white",
          navColor: "black"
        }}
      />
      <Parallax filter="dark" image={backgroundImage}>
        <div className={classes.container}>
          <img alt="Lepine" src={lepine} className={classes.lepine} />
          <div className={classes.titleContainer}>
            <GridItem xs={12} sm={12} md={12} className={classes.gridItem} id="title">
              <Typography variant="h3" align="center" className={classes.title}>
                La Flamme Connectée
              </Typography>
              <Avatar alt="Logo" src={logo} className={classes.logo} />
              <Typography variant="h5" align="center" className={classes.subtitle}>
                Allumez votre poêle ou insert à distance
                <br />
                Ne rentrez plus dans une maison froide
              </Typography>
            </GridItem>
          </div>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={12} sm={12} md={10} className={classNames(classes.gridItem, classes.scrollToBottom)}>
              <Typography variant="h5" align="center" className={classes.bottomText}>
                <i>En partenariat avec Contura, leader suédois des produits de chauffage au bois.</i>
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} id="main-panel">
        <div className={classes.container}>
          <ProductSection />
        </div>
        <div className={classNames(classes.container, classes.containerFull)}>
          <HowWorks />
        </div>
        <div className={classes.container}>
          <ConnectSection />
        </div>
        <div className={classes.container}>
          <TopDownSection />
        </div>
        <div className={classes.container}>
          <DownloadSection />
        </div>
        <div className={classes.container}>
          <ProjectSection />
        </div>
        <div className={classes.container}>
          <TeamSection />
        </div>
        <div className={classes.container}>
          <ContactSection />
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
                      <i className={classes.socialIcons + " fab fa-twitter"} />
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
                      <i className={classes.socialIcons + " fab fa-facebook"} />
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
                      <i className={classes.socialIcons + " fab fa-instagram"} />
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
              {/*{user ? <div>connected</div> : <div>not connected</div>}*/}
            </div>
          </div>
        }
      />
    </div>
  );
}

export default withStyles(homePageStyle)(HomePage);
