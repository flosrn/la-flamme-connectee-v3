import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Title from "components/Typography/Title";
// images
import lepineLogo from "public/img/logo/lepine-logo.png";
// styles
import { title } from "public/jss/la-flamme-connectee";

const useStyles = makeStyles(theme => ({
  section: {
    padding: "70px 0 10px",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      paddingBottom: 50
    }
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
    marginTop: 130,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50
    }
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

function PresentationSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="presentation">
      <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={8} lg={6} className={classes.gridItem}>
          <Title variant="h2" className={classes.title}>
            Présentation
          </Title>
          <h5 className={clsx(classes.description)}>
            Le <strong>Flam'connect</strong> est une invention unique et originale qui permet de programmer à distance,
            via une application dédiée sur smartphone, l'allumage d'un poêle à bois ou insert. <br />
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
                className={clsx(classes.flamcoIphone, classes.animateUp)}
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
                        className={clsx(classes.lepine, classes.animateUp)}
                      />
                    </GridItem>
                    <GridItem sm={6} center>
                      <img src={lepineLogo} alt="lepine-logo" className={clsx(classes.lepineLogo, classes.animateUp)} />
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default PresentationSection;
