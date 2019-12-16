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
import { scroller } from "react-scroll";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";
import Parallax from "../Parallax/Parallax";
import FooterDark from "../Footer/FooterDark";

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
    top: "-85px",
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
    fontSize: "80px"
  },
  "@keyframes bounce": {
    "0%": { top: "0px" },
    "50%": { top: "-20px" },
    "100%": { top: "0px" }
  }
}));

function LayoutPage({ children, backgroundImage, sectionId, backgroundPosition, currentUser, isLoggedIn }) {
  const classes = useStyles();

  const scrollTo = el => {
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuad"
    });
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
              <IconButton className={classes.scrollDownButton} onClick={() => scrollTo(sectionId)}>
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
