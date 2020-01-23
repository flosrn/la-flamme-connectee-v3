import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Swiper from "react-id-swiper";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Title from "components/Typography/Title";
import logoDepeche from "public/img/logo/la-depeche-du-midi.png";
import logoChemine from "public/img/logo/logo-cheminee-actuelle.png";
import logo18h39 from "public/img/logo/18h39.png";
import LayoutSection from "../../../components/Page/LayoutSection";

const useStyles = makeStyles(theme => ({
  slide: {
    width: "250px !important",
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%"
    }
  }
}));

export default function TalkAboutUsSection() {
  const classes = useStyles();
  const params = {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return (
    <LayoutSection title="Ils parlent de nous" id="talkAboutUs">
      <GridItem center sm={11} md={8} lg={7} className={classes.gridItem}>
        <Swiper {...params}>
          <div className={classes.slide}>
            <a href="https://www.ladepeche.fr/2019/11/24/patrick-seran-brevete-dargent-au-concours-lepine,8559819.php">
              <img src={logoDepeche} alt="depecheDuMidi" />
            </a>
          </div>
          <div className={classes.slide}>
            <a href="https://www.18h39.fr/articles/invention-allumer-cheminee-ou-poele-a-distance.html">
              <img src={logo18h39} alt="18h39" />
            </a>
          </div>
          <div className={classes.slide}>
            <img src={logoChemine} alt="chemineActuelle" />
          </div>
        </Swiper>
      </GridItem>
    </LayoutSection>
  );
}
