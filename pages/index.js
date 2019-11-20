import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core
import { Typography, Avatar, IconButton } from "@material-ui/core";
// @material-ui/icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// core components
import Header from "components/Header/Header";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import FooterCustom from "components/Footer/FooterCustom";
import GridContainer from "components/Grid/GridContainer";
import MediaSvg from "components/Media/MediaSvg";
// sections
import PresentationSection from "src/sections/HomePage/PresentationSection";
import CarouselSection from "src/sections/HomePage/CarouselSection";
// images
import backgroundImage from "static/img/flamco/flamco-main-dark.jpg";
import logo from "static/img/logo/laflammeco.png";
import lepine from "static/img/logo/lepine-double.png";
import svg from "static/img/svg/undraw_smart_home_28oy.svg";
// style for this page
import { useStyles } from "static/jss/la-flamme-connectee/views/homePage";
import svg3 from "static/img/svg/undraw_team_page_pgpr.svg";
import ProjectSection from "../src/sections/HomePage/ProjectSection";
import TeamSection from "../src/sections/HomePage/TeamSection";
import AlertDialogSlide from "../components/Alert/AlertDialogSlide";

function HomePage() {
  const [open, setOpen] = React.useState(false);
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
  // href="https://youtu.be/JNxbjR0GbjU" target="_blank"

  return (
    <div className={classes.root}>
      <Header
        color="transparent"
        links={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
          navColor: "black"
        }}
      />
      <Parallax filter="dark" image={backgroundImage} className={classes.parallax}>
        {/* <img alt="Lepine" src={lepine} className={classes.lepine} /> */}
        <div className={classes.containerBackground}>
          <div className={classes.titleContainer}>
            <GridItem xs={12} sm={12} md={12} className={classes.gridItem} id="title">
              <Typography variant="h3" align="center" className={classes.title}>
                La Flamme Connectée
              </Typography>
              <Avatar alt="Logo" src={logo} className={classes.logo} />
              <Typography variant="h5" align="center" className={classes.subtitle}>
                Allumez votre poêle ou insert à distance
              </Typography>
              <Button color="danger" className={classes.buttonPlay} onClick={() => setOpen(true)}>
                <i className="fas fa-play" />
                Découvrir en vidéo
              </Button>
              <AlertDialogSlide open={open} closeHandler={() => setOpen(false)} />
            </GridItem>
          </div>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} id="main-panel">
        <div className={classes.scrollDownContainer}>
          <IconButton className={classes.scrollDownButton} onClick={() => smoothScroll("presentation")}>
            <ExpandMoreIcon fontSize="large" className={classes.arrowButton} />
          </IconButton>
        </div>
        <div className={classes.container}>
          <PresentationSection />
          <GridContainer justify="center">
            <GridItem center>
              <Typography variant="subtitle2" align="center">
                En partenariat avec{" "}
                <a href="https://www.contura.eu/fr/france/" target="_blank">
                  Contura
                </a>
                , leader du chauffage au bois
              </Typography>
            </GridItem>
          </GridContainer>
          <CarouselSection />
          <GridContainer justify="center">
            <GridItem center>
              <MediaSvg src={svg} alt="smart-home" size="medium" />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.bottom}>
            <GridItem center>
              <Typography variant="subtitle2" align="center">
                Pour en savoir plus, consultez nos pages{" "}
                <Link href="/documentation">
                  <a>Documentation</a>
                </Link>{" "}
                et{" "}
                <Link href="/product">
                  <a>Produits</a>
                </Link>
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
        {/* <MediaSvg src={svg3} alt="about-us" size="medium" mb={0} /> */}
        <TeamSection />
        <ProjectSection />
      </div>
      <FooterCustom />
    </div>
  );
}

export default HomePage;
