/* eslint-disable import/first */
import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// @material-ui/icons
import { Wifi, Category, PhonelinkRing, Whatshot, Build } from "@material-ui/icons";
// @material-ui/core
import { Button, Typography } from "@material-ui/core";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Timeline from "components/Timeline/Timeline";
// style for this page
import { useStyles } from "public/jss/la-flamme-connectee/views/homePageSections/howWorksStyle";
import { scroller } from "react-scroll";
import Title from "../../../components/Typography/Title";

function HowWorks() {
  const classes = useStyles();

  const scrollTo = el => {
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuad"
    });
  };

  const widgetStories = [
    {
      // First story
      inverted: true,
      badgeColor: "primary",
      badgeIcon: Wifi,
      title: "Je connecte le Flam'connect au wifi",
      titleColor: "primary",
      body: (
        <p>
          Lors de la première mise en service, appairez votre <strong>Flam'connect</strong> à votre box internet wifi.
        </p>
      ),
      footerTitle: (
        <>
          <a href="https://youtu.be/P0bTnvAQDeM" target="_blank">
            <Button>Regarder le tutoriel</Button>
          </a>
        </>
      )
    },
    {
      // Second story
      inverted: true,
      badgeColor: "secondary",
      badgeIcon: Category,
      title: "Je prépare mon foyer bois",
      titleColor: "success",
      body: (
        <p>
          Avant de quitter votre habitation préparez votre foyer bois en y ajoutant{" "}
          <strong>l'allume feu Volcano'connect</strong>.<br />
          Pour une meilleure efficacité, utilisez <strong>la technique de l'allumage inversé</strong>.
        </p>
      ),
      footerTitle: <Button onClick={() => scrollTo("topDown")}>Qu'est-ce que l'allumage inversé ?</Button>
    },
    {
      // Third story
      inverted: true,
      badgeColor: "gray",
      badgeIcon: PhonelinkRing,
      title: "Je choisi l'heure d'allumage",
      titleColor: "gray",
      body: (
        <div>
          <p>
            Grâce à <strong>l'application smartphone Ewelink</strong> et une connexion internet prenez connaissance en
            temps réel de la température de votre habitation et allumez instantanément ou programmez l'allumage de votre
            poêle.
          </p>
        </div>
      ),
      footer: (
        <>
          <Link href="/download">
            <Button>Télécharger l'application</Button>
          </Link>
        </>
      )
    },
    {
      // Four story
      inverted: true,
      badgeColor: "secondary",
      badgeIcon: Whatshot,
      title: "Mon poêle s'allume",
      titleColor: "secondary",
      body: (
        <div>
          <p>Quand vous rentrez, votre habitation est à bonne température 😍🔥</p>
        </div>
      )
    }
  ];

  return (
    <div className={classes.section} id="howWorks">
      <GridContainer className={classes.gridContainer}>
        <GridItem xs={12} className={classes.gridItem}>
          <Title variant="h2" className={classes.title}>
            Comment ça marche ?
          </Title>
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

export default HowWorks;
