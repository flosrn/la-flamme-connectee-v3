import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
// @material-ui/icons
import EcoIcon from "@material-ui/icons/Eco";
import EuroIcon from "@material-ui/icons/Euro";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";
import MediaSvg from "components/Media/MediaSvg";
import Title from "components/Typography/Title";
// images
import svg1 from "public/img/svg/undraw_chore_list_iof3.svg";
// styles
import { title } from "public/jss/la-flamme-connectee";
import Fade from "react-reveal/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import LayoutSection from "../../../components/Page/LayoutSection";

const useStyles = makeStyles(theme => ({
  noMarginTop: {
    [theme.breakpoints.up("md")]: {
      margin: "0 auto !important"
    }
  },
  marginFirst: {
    marginBottom: 60
  },
  reverse: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse !important"
    }
  }
}));

function BenefitsSection({ isDesktop }) {
  const classes = useStyles();
  return (
    <LayoutSection title="Avantages" id="benefits">
      <Fade spy={isDesktop} bottom cascade ssrFadeout>
        <GridContainer justify="center" className={classes.noMarginTop}>
          <GridItem md={6} lg={4} center className={classes.marginFirst}>
            <InfoArea
              title="Pratique"
              description="Avec votre smartphone, visualisez la température de votre maison en temps réel."
              icon={ThumbUpIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem md={6} lg={4} center>
            <MediaSvg src={svg1} alt="svg1" mt={-50} animateUp />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={clsx(classes.gridContainer, classes.reverse)}>
          <GridItem md={6} lg={4} center>
            <MediaSvg src={require("/public/img/svg/undraw_environment_iaus.svg")} alt="svg2" mt={30} animateUp />
          </GridItem>
          <GridItem md={6} lg={4} center>
            <InfoArea
              title="Écologique"
              description="Avec l'allumage inversé, vous rejetez moins de particules fines dans l’atmosphère, encrassez moins votre conduit et votre vitre, et améliorez votre tirage."
              icon={EcoIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem md={6} lg={4} center>
            <InfoArea
              title="Économique"
              description="En allumant votre foyer bois à l'avance avec Flam'connect vous économiserez le coût de votre autre source de chaleur (électricité, fioul, gaz...)."
              icon={EuroIcon}
              iconColor="secondary"
              vertical
            />
          </GridItem>
          <GridItem md={6} lg={4} center>
            <MediaSvg src={require("/public/img/svg/undraw_Savings_dwkw.svg")} alt="svg3" mt={30} animateUp />
          </GridItem>
        </GridContainer>
      </Fade>
    </LayoutSection>
  );
}

export default BenefitsSection;
