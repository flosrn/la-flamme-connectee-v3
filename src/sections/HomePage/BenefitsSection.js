import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
  section: {
    padding: "0 0 10px",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  gridContainer: {},
  reverse: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse !important"
    }
  },
  innovate: {
    marginTop: 30,
    marginBottom: 5
  },
  itemInvention: {
    marginTop: 40,
    marginBottom: 50,
    [theme.breakpoints.up("md")]: {
      marginTop: 60
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 100
    }
  },
  brevet: {
    ...title
  },
  flamcoIphone: {
    width: 300,
    [theme.breakpoints.up("xl")]: {
      width: 350
    }
  },
  lepine: {
    width: 210
  },
  lepineLogo: {
    width: 270,
    [theme.breakpoints.down("xs")]: {
      marginTop: 40
    }
  },
  relativeContainer: {
    marginTop: 20
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: 50
    // }
  },
  avantageTitle: {
    marginBottom: -160
  },
  animateUp: {
    transition: ".4s",
    "&:hover": {
      transform: "translateY(-10px)"
    }
  },
  noMarginTop: {
    [theme.breakpoints.up("md")]: {
      margin: "0 auto !important"
    }
  },
  marginFirst: {
    marginBottom: 60
  }
}));

function BenefitsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="benefits">
      <div className={classes.relativeContainer}>
        <GridContainer justify="center">
          <GridItem xs={10} sm={10} md={8} lg={6} className={classes.gridItem}>
            <Title variant="h2" className={classes.title}>
              Avantages
            </Title>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={classes.noMarginTop}>
          <GridItem md={6} center className={classes.marginFirst}>
            <InfoArea
              title="Pratique"
              description="Avec votre smartphone, visualisez la température de votre maison en temps réel."
              icon={ThumbUpIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem md={6} center>
            <MediaSvg src={svg1} alt="svg1" mt={-50} animateUp />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={clsx(classes.gridContainer, classes.reverse)}>
          <GridItem md={6} center>
            <MediaSvg src={require("/public/img/svg/undraw_environment_iaus.svg")} alt="svg2" mt={30} animateUp />
          </GridItem>
          <GridItem md={6} center>
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
          <GridItem md={6} center>
            <InfoArea
              title="Économique"
              description="En allumant votre foyer bois à l'avance avec Flam'connect vous économiserez le coût de votre autre source de chaleur (électricité, fioul, gaz...)."
              icon={EuroIcon}
              iconColor="secondary"
              vertical
            />
          </GridItem>
          <GridItem md={6} center>
            <MediaSvg src={require("/public/img/svg/undraw_Savings_dwkw.svg")} alt="svg3" mt={30} animateUp />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default BenefitsSection;
