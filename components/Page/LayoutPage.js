import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { container, grayColor, main, mainRaised, mlAuto, section, title } from "static/jss/la-flamme-connectee";
// @material-ui/core components
import { IconButton } from "@material-ui/core";
// @material-ui/icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// core components
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";
import Parallax from "../Parallax/Parallax";
import FooterCustom from "../Footer/FooterCustom";

const useStyles = makeStyles(theme => ({
  mlAuto,
  main,
  section,
  container: {
    ...container,
    zIndex: 2,
    paddingBottom: 0
  },
  mainRaised: {
    ...mainRaised,
    marginTop: "-15px"
  },
  parallax: {
    minHeight: "60vh",
    maxHeight: "600px",
    height: "auto"
  },
  title: {
    ...title,
    marginBottom: 0
  },
  sectionGray: {
    background: grayColor[14]
  },
  scrollDownContainer: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: -55,
    display: "flex",
    justifyContent: "center"
  },
  scrollDownButton: {
    color: "#fff"
  }
}));

function LayoutPage({ children, backgroundImage, sectionId, backgroundPosition }) {
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
          height: 120,
          color: "white",
          navColor: "dark"
        }}
      />
      <Parallax filter="dark" image={backgroundImage} className={classes.parallax} style={{ backgroundPosition }} />
      <div className={classNames(classes.section, classes.sectionGray)} id="main-panel">
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.scrollDownContainer}>
              <IconButton className={classes.scrollDownButton} onClick={() => smoothScroll(sectionId)}>
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </div>
            {children}
          </div>
          <FooterCustom />
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;
