import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Title from "components/Typography/Title";
// images
import lepineLogo from "public/img/logo/lepine-logo.png";
// styles
import { title } from "public/jss/la-flamme-connectee";
import Fade from "react-reveal/Fade";
import { Typography } from "@material-ui/core";
import LayoutSection from "../../../components/Page/LayoutSection";

const useStyles = makeStyles(theme => ({
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

function PresentationSection({ isDesktop }) {
  const classes = useStyles();
  return (
    <LayoutSection
      title="Présentation"
      id="presentation"
      mt={50}
      desc={[
        {
          text: (
            <>
              Le <strong>Flam'connect</strong> est une invention unique et originale qui permet de programmer à
              distance, via une application dédiée sur smartphone, l'allumage d'un poêle à bois ou insert. <br />
            </>
          )
        }
      ]}
    >
      <GridItem lg={9}>
        <Fade spy={isDesktop} bottom cascade ssrFadeout>
          <GridContainer justify="center">
            <GridItem lg={6} center>
              <img
                src={require("/public/img/objects/volcano-flam_iphone.png")}
                alt="phone"
                className={classes.flamcoIphone}
                id="animateUp"
              />
            </GridItem>
            <GridItem lg={6} className={classes.itemInvention}>
              <GridContainer justify="center">
                <GridItem center>
                  <GridContainer justify="center">
                    <GridItem sm={6} center>
                      <img
                        src={require("/public/img/logo/lepine-black.png")}
                        alt="lepine"
                        className={classes.lepine}
                        id="animateUp"
                      />
                    </GridItem>
                    <GridItem sm={6} center>
                      <img src={lepineLogo} alt="lepine-logo" className={classes.lepineLogo} id="animateUp" />
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </Fade>
      </GridItem>
    </LayoutSection>
  );
}

export default PresentationSection;
