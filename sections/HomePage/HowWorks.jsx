/* eslint-disable import/first */
import React, { useContext } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { Wifi, Category, PhonelinkRing, Whatshot, Build } from "@material-ui/icons";
// @material-ui/core
import { Button, Typography } from "@material-ui/core";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import VerticalLinearStepper from "components/Steppers/VerticalLinearStepper.jsx";
import Timeline from "components/Timeline/Timeline"
// style for this page
import howWorksStyle from "static/jss/la-flamme-connectee/views/homePageSections/howWorksStyle.jsx";
// img
// import Stove from "../../../static/img/stoves/stove-exemple.png";;
// contexts

function HowWorks({ ...props }) {
  const { classes } = props;

  const widgetStories = [
    {
      // First story
      inverted: true,
      badgeColor: "myPrimary4",
      badgeIcon: Wifi,
      title: "Je connecte la box Flamme Connect au wifi",
      titleColor: "myPrimary4",
      body: (
        <p>
          Lors de la première mise en service, appairez votre <strong>Flamme Connect</strong> à votre box internet wifi.
        </p>
      ),
      footerTitle: (
        <Button onClick={e => {
          e.preventDefault();
          // scrollToSection("connect");
        }}>Comment faire ?</Button>
      )
    },
    {
      // Second story
      inverted: true,
      badgeColor: "myPrimary5",
      badgeIcon: Category,
      title: "Je prépare mon foyer bois",
      titleColor: "myPrimary5",
      body: (
        <p>
          Avant de quitter votre habitation préparez votre foyer bois en y ajoutant <strong>l'allume feu VolcanOh'Connect</strong>.<br />
          Pour une meilleure efficacité, utilisez <strong>la technique de l'allumage inversé</strong>.
        </p>
      ),
      footerTitle: (
        <Button onClick={e => {
          e.preventDefault();
          // scrollToSection("topDown");
        }}>Qu'est-ce que l'allumage inversé ?</Button>
      )
    },
    {
      // Third story
      inverted: true,
      badgeColor: "primary",
      badgeIcon: PhonelinkRing,
      title: "Avec mon smartphone je choisi l'heure d'allumage",
      titleColor: "primary",
      body: (
        <div>
          <p>
            Grâce à <strong>l'application smartphone Ewelink</strong> et une connexion internet prenez connaissance en temps réel de la température de votre habitation et allumez instantanément ou programmer l'allumage de votre poêle.
        </p>
        </div>
      ),
      footer: (
        <Button onClick={e => {
          e.preventDefault();
          // scrollToSection("download");
        }}>Télécharger l'application</Button>
      )
    },
    {
      // Four story
      inverted: true,
      badgeColor: "myPrimary2",
      badgeIcon: Whatshot,
      title: "Mon poêle s'allume",
      titleColor: "myPrimary2",
      body: (
        <div>
          <p>
            Quand vous rentrez, votre habitation est à bonne température.
        </p>
        </div>
      ),
    }
  ];

  return (
    <div className={classes.section} id="howWorks">
      <GridContainer className={classes.gridContainer}>
        <GridItem xs={12} className={classes.gridItem}>
          <Typography variant="h3" className={classes.title}>Comment ça marche ?</Typography>
        </GridItem>
        <GridContainer justify="center" className={classes.gridContainer}>
          {/* <GridItem xs={12} sm={12} md={4} lg={4} className={classes.gridItem}>
            <img src={Stove} alt="stove" className={classes.stove}/>
          </GridItem> */}
          <GridItem xs={10} sm={10} md={7} lg={6} className={classNames(classes.gridItem, classes.gridLeft)}>
            {/* <VerticalLinearStepper /> */}
            <Timeline simple stories={widgetStories} />
          </GridItem>
        </GridContainer>
      </GridContainer>
    </div>
  );
}

HowWorks.propTypes = {
  classes: PropTypes.object
};

export default withStyles(howWorksStyle)(HowWorks);
