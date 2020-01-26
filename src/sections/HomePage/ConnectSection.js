import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import constants style
import { title } from "public/jss/la-flamme-connectee";
// @material-ui/icons
import { HourglassEmpty, Whatshot, CloudOff } from "@material-ui/icons";
// @material-ui/core
import Grid from "@material-ui/core/Grid";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ConnectExpansionPanels from "components/ExpansionPanels/ConnectExpansionPanels";
import Title from "../../../components/Typography/Title";

// style for this page
const useStyles = makeStyles(theme => ({
  section: {
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "&>ul": {
      textAlign: "left"
    },
    marginBottom: theme.spacing(5)
  },
  videoContainer: {
    margin: "50px 0",
    "& > iframe": {
      width: "100%"
    }
  }
}));

function ConnectSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="connect">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6} className={classes.gridItem}>
          <Title variant="h2" className={classes.title}>
            Appairage du Flam'connect
          </Title>
          <h5 className={classes.description}>
            Pour allumer votre poêle à distance ou programmer une plage horaire à laquelle il s'allumera, veuillez
            suivre les instructions suivante :
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8} lg={6} className={classes.gridItem}>
          <ConnectExpansionPanels />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8} lg={5} className={classes.videoContainer}>
          <iframe
            width="560"
            height="315"
            title="tuto flam'connect"
            src="https://www.youtube.com/embed/P0bTnvAQDeM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default ConnectSection;
