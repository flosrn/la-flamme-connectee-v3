/* eslint import/no-absolute-path:0 */
import React from "react";
import dynamic from "next/dynamic";
// nodejs library that concatenates classes
import clsx from "clsx";
// @material-ui/core
import { Typography, Avatar, IconButton } from "@material-ui/core";
// @material-ui/icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// core components
import Header from "components/Header/Header";
import GridItem from "components/Grid/GridItem";
import HeaderLinks from "components/Header/HeaderLinks";

// sections
import PresentationSection from "src/sections/HomePage/PresentationSection";
import CarouselSection from "src/sections/HomePage/CarouselSection";
// images
import logo from "public/img/logo/laflammeco.png";

// style for this page
import { useStyles } from "public/jss/la-flamme-connectee/views/homePage";
import ModalVideo from "react-modal-video";
import ProjectSection from "../src/sections/HomePage/ProjectSection";
import TeamSection from "../src/sections/HomePage/TeamSection";

import FooterDark from "../components/Footer/FooterDark";
import ProductSection from "../src/sections/HomePage/ProductSection";
import ButtonCustom from "../components/CustomButtons/ButtonCustom";
import { scroller } from "react-scroll";
import { withAuthSync } from "../api/withAuth";

const VideoCover = dynamic(() => import("components/Video/VideoCover"), {
  loading: () => <p>Loading...</p>
});

function HomePage({ currentUser }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleVideo = () => {
    setOpen(!open);
  };

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
        links={<HeaderLinks user={currentUser} />}
        fixed
        user={currentUser}
        hiddenLogo
        changeColorOnScroll={{
          height: 50,
          color: "dark",
          navColor: "black"
        }}
      />
      <VideoCover>
        <div className={classes.containerBackground}>
          <div className={classes.titleContainer}>
            <GridItem xs={12} sm={12} md={12} className={classes.gridItem} id="title">
              <Typography variant="h1" align="center" className={classes.title}>
                La Flamme Connectée
              </Typography>
              <Avatar alt="Logo" src={logo} className={classes.logo} />
              <Typography variant="h3" align="center" className={classes.subtitle}>
                Allumez votre poêle ou insert à distance
              </Typography>
              <ButtonCustom color="danger" animateButton onClick={handleVideo}>
                <i className="fas fa-play" />
                Découvrir en vidéo
              </ButtonCustom>
              <ModalVideo
                channel="youtube"
                isOpen={open}
                videoId="gQ0yT21CaN8"
                onClose={handleVideo}
                className={classes.modalVideo}
              />
            </GridItem>
          </div>
        </div>
      </VideoCover>
      <div className={clsx(classes.main, classes.mainRaised)} id="main-panel">
        <div className={classes.scrollDownContainer} style={{ display: !open ? "flex" : "none" }}>
          <IconButton className={classes.scrollDownButton} onClick={() => scrollTo("presentation")}>
            <ExpandMoreIcon fontSize="large" className={classes.arrowButton} />
          </IconButton>
        </div>
        <PresentationSection />
        <ProductSection />
        <TeamSection />
        <ProjectSection />
        <CarouselSection />
      </div>
      <FooterDark />
    </div>
  );
}

export default withAuthSync(HomePage);
