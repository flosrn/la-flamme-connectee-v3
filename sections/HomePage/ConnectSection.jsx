import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// import constants style
import { title } from "static/jss/la-flamme-connectee.js";
// @material-ui/icons
import { HourglassEmpty, Whatshot, CloudOff } from "@material-ui/icons";
// @material-ui/core
import Grid from "@material-ui/core/Grid";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomizedExpansionPanels from "components/ExpansionPanels/CustomizedExpansionPanels";



function ConnectSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="connect">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} className={classes.gridItem}>
          <h2 className={classes.title}>Appairage du Flamme Connect</h2>
          <h5 className={classes.description}>
            
            
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} lg={8} className={classes.gridItem}>
          <CustomizedExpansionPanels 
            
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "&>ul": {
      textAlign: "left"
    }
  }
}));

ConnectSection.propTypes = {
  classes: PropTypes.object
};

export default ConnectSection;
