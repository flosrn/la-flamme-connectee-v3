import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, Hidden, Typography } from "@material-ui/core";
// import constants style
import { title } from "static/jss/la-flamme-connectee.js";
// @material-ui/icons
import { Wifi, Category, PhonelinkRing, Whatshot, Android,  } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
// logo
import Logo from "static/img/laflammeco.png";


function DownloadSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section} id="download">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.gridItem}>
          <Typography variant="h3" className={classes.title}>Téléchargement</Typography>
        </GridItem>
      </GridContainer>
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
            <i className={classNames(classes.icons, "fab fa-apple")} /> 
            <Hidden xsDown>
              iOS App
            </Hidden>
          </Button>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.coolkit&hl=fr" target="_blank">
          <Button round color="android" className={classes.buttonIcon}>
            <Android className={classes.icons} /> 
            <Hidden xsDown>
              Android App
            </Hidden>
          </Button>
        </a>
      </GridContainer>
    </div>
  );
}

// style for this page
const useStyles = makeStyles(theme => ({
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
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
  }
}));

DownloadSection.propTypes = {
  classes: PropTypes.object
};

export default DownloadSection;
