import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { container, grayColor, main, mainRaised, mlAuto, section, title } from "public/jss/la-flamme-connectee";
// @material-ui/core components
import { IconButton } from "@material-ui/core";
// @material-ui/icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// core components
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";
import Parallax from "../Parallax/Parallax";
import FooterCustom from "../Footer/FooterCustom";
import FooterDark from "../Footer/FooterDark";
import { authInitialProps } from "../../server/api/auth";
import LoginPage from "../../pages/login";

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
    height: "auto",
    backgroundSize: "cover"
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
    top: "-60px",
    display: "flex",
    justifyContent: "center"
  },
  scrollDownButton: {
    color: "#fff",
    animationName: "$bounce",
    animationDuration: "1.5s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease"
  },
  arrowButton: {
    fontSize: "40px"
  },
  "@keyframes bounce": {
    "0%": { top: "0px" },
    "50%": { top: "-20px" },
    "100%": { top: "0px" }
  }
}));

function LayoutPage({ children, backgroundImage, sectionId, backgroundPosition, currentUser, isLoggedIn }) {
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
        links={<HeaderLinks user={currentUser} isLoggedIn={isLoggedIn} />}
        fixed
        user={currentUser}
        isLoggedIn={isLoggedIn}
        changeColorOnScroll={{
          height: 300,
          color: "dark",
          navColor: "black"
        }}
      />
      <Parallax filter="dark" image={backgroundImage} className={classes.parallax} style={{ backgroundPosition }} />
      <div className={classNames(classes.section, classes.sectionGray)} id="main-panel">
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.scrollDownContainer}>
              <IconButton className={classes.scrollDownButton} onClick={() => smoothScroll(sectionId)}>
                <ExpandMoreIcon fontSize="large" className={classes.arrowButton} />
              </IconButton>
            </div>
            {children}
          </div>
        </div>
        <FooterDark />
      </div>
    </div>
  );
}

export default LayoutPage;
