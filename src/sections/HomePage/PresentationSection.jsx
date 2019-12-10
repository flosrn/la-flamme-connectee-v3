import React from "react";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography } from "@material-ui/core";
// @material-ui/icons
import EcoIcon from "@material-ui/icons/Eco";
import EuroIcon from "@material-ui/icons/Euro";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";
import MediaSvg from "components/Media/MediaSvg";
// images
import { title } from "public/jss/la-flamme-connectee";
import svg1 from "public/img/svg/undraw_chore_list_iof3.svg";
// animations
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import lepineLogo from "public/img/logo/lepine-logo.png";

const useStyles = makeStyles(theme => ({
  section: {
    padding: "70px 0 10px",
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
  gridContainer: {
    margin: theme.spacing(20, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(10, 0),
      "&:nth-child(2)": {
        flexDirection: "column-reverse"
      }
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
    marginTop: 130,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50
    }
  },
  avantageTitle: {
    marginBottom: -160
  }
}));

function PresentationSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.section} id="presentation">
      <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={8} lg={6} className={classes.gridItem}>
          <Typography variant="h3" className={classes.title}>
            Présentation
          </Typography>
          <h5 className={classes.description}>
            Le <strong>Flam'connect</strong> est une invention unique et originale qui permet de programmer à distance,
            via une application dédiée sur smartphone, l'allumage d'un poêle ou insert. <br />
            Profitez ainsi de votre maison à bonne température dès votre retour.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.innovate}>
        <GridItem lg={9}>
          <GridContainer justify="center">
            <GridItem lg={6} center>
              <img
                src={require("/public/img/flamco/volcano-flam_iphone.png")}
                alt="phone"
                className={classes.flamcoIphone}
              />
            </GridItem>
            <GridItem lg={6} className={classes.itemInvention}>
              <GridContainer justify="center">
                <GridItem center>
                  <GridContainer justify="center">
                    <GridItem sm={6} center>
                      <img src={require("/public/img/logo/lepine-black.png")} alt="lepine" className={classes.lepine} />
                    </GridItem>
                    <GridItem sm={6} center>
                      <img src={lepineLogo} alt="lepine-logo" className={classes.lepineLogo} />
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              {/*<Typography variant="h5" className={classes.brevet}>*/}
              {/*  🥈 Invention brevetée 🥈*/}
              {/*</Typography>*/}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      {!isPhone ? (
        <div className={classes.relativeContainer}>
          <GridContainer justify="center" className={classes.avantageTitle}>
            <GridItem xs={10} sm={10} md={8} lg={6} className={classes.gridItem}>
              <Typography variant="h3" className={classes.title}>
                Avantages
              </Typography>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.gridContainer} id="trigger1">
            <GridItem md={6} center>
              <InfoArea
                title="Pratique"
                description="Avec votre smartphone, visualisez la température de votre maison en temps réel."
                icon={ThumbUpIcon}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem md={6} center>
              <Controller>
                <Scene triggerElement="#trigger1" offset={isPhone ? 100 : -100} duration={300}>
                  {progress => (
                    <Tween from={{ opacity: 0, y: "200px" }} to={{ opacity: 1, y: 0 }} totalProgress={progress} paused>
                      <div className="tween">
                        <MediaSvg src={svg1} alt="svg1" full />
                      </div>
                    </Tween>
                  )}
                </Scene>
              </Controller>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.gridContainer} id="trigger2">
            <GridItem md={6} center>
              <Controller>
                <Scene triggerElement="#trigger2" offset={isPhone ? 100 : -100} duration={300}>
                  {progress => (
                    <Tween from={{ opacity: 0, y: "200px" }} to={{ opacity: 1, y: 0 }} totalProgress={progress} paused>
                      <div className="tween">
                        <MediaSvg src={require("/public/img/svg/undraw_environment_iaus.svg")} alt="svg2" />
                      </div>
                    </Tween>
                  )}
                </Scene>
              </Controller>
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
          <GridContainer justify="center" className={classes.gridContainer} id="trigger3">
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
              <Controller>
                <Scene triggerElement="#trigger3" offset={isPhone ? 100 : -100} duration={300}>
                  {progress => (
                    <Tween from={{ opacity: 0, y: "200px" }} to={{ opacity: 1, y: 0 }} totalProgress={progress} paused>
                      <div className="tween">
                        <MediaSvg src={require("/public/img/svg/undraw_Savings_dwkw.svg")} alt="svg3" />
                      </div>
                    </Tween>
                  )}
                </Scene>
              </Controller>
            </GridItem>
          </GridContainer>
        </div>
      ) : (
        <div className={classes.relativeContainer}>
          <GridContainer justify="center" className={classes.pro}>
            <GridItem xs={10} sm={10} md={8} lg={6} className={classes.gridItem}>
              <Typography variant="h3" className={classes.title}>
                Avantages
              </Typography>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.gridContainer} id="trigger1">
            <GridItem md={6} center>
              <InfoArea
                title="Pratique"
                description="Avec votre smartphone, visualisez la température de votre maison en temps réel."
                icon={ThumbUpIcon}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem md={6} center>
              <MediaSvg src={svg1} alt="svg1" mt={-50} />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.gridContainer} id="trigger2">
            <GridItem md={6} center>
              <MediaSvg src={require("/public/img/svg/undraw_environment_iaus.svg")} alt="svg2" mt={50} />
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
          <GridContainer justify="center" className={classes.gridContainer} id="trigger3">
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
              <MediaSvg src={require("/public/img/svg/undraw_Savings_dwkw.svg")} alt="svg3" mt={50} />
            </GridItem>
          </GridContainer>
        </div>
      )}
    </div>
  );
}

export default PresentationSection;
