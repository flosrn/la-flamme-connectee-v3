import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, Hidden, Typography } from "@material-ui/core";
// import constants style
import { title } from "public/jss/la-flamme-connectee";
// @material-ui/icons
import { Android } from "@material-ui/icons";
// core components
import LayoutSection from "components/Page/LayoutSection";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
// logo
import Logo from "public/img/logo/laflammeco.png";

// style for this page
const useStyles = makeStyles(theme => ({
  section: {
    padding: "70px 0",
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
    color: "#999",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px"
  },
  logo: {
    width: "100%"
  },
  buttonIcon: {
    margin: "20px 5px",
    height: "40px"
  },
  icons: {
    // width: "82px",
    height: "42px",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function DownloadSection() {
  const classes = useStyles();
  return (
    <LayoutSection title="Téléchargement" id="download">
      <GridItem>
        <GridContainer justify="center">
          <GridItem xs={4} sm={3} md={2} lg={1} xl={2}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <h5 className={classes.description}>
            Téléchargez l'application Ewelink gratuitement pour allumer votre foyer bois à distance !
          </h5>
        </GridContainer>
        <GridContainer justify="center">
          <a href="https://apps.apple.com/fr/app/ewelink-smart-home-control/id1035163158" target="_blank">
            <Button round color="iOS" className={classes.buttonIcon}>
              <span>
                <i className={classNames(classes.icons, "fab fa-apple")} style={{ display: "flex" }} />
              </span>
              <Hidden xsDown>iOS App</Hidden>
            </Button>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.coolkit&hl=fr" target="_blank">
            <Button round color="android" className={classes.buttonIcon}>
              <Android className={classes.icons} />
              <Hidden xsDown>Android App</Hidden>
            </Button>
          </a>
        </GridContainer>
      </GridItem>
    </LayoutSection>
  );
}

export default DownloadSection;
