import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
// @material-ui/icons
import EcoIcon from "@material-ui/icons/Eco";
import EuroIcon from "@material-ui/icons/Euro";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";

import { title } from "static/jss/la-flamme-connectee";

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
  }
}));

function PresentationSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="presentation">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.gridItem}>
          <Typography variant="h3" className={classes.title}>
            Présentation
          </Typography>
          <h5 className={classes.description}>
            Avec le système <strong>Flam'connect</strong>, programmez l'allumage de votre poêle ou insert en votre
            absence.
            <br />
            Profitez ainsi de la chaleur du feu de bois dès votre retour.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem md={10} lg={8}>
            <GridContainer justify="center">
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Pratique"
                  description="Avec votre smartphone, vous connaîtrez la température de votre maison à distance et en temps réel."
                  icon={ThumbUpIcon}
                  iconColor="primary"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Écologique"
                  description="Avec l'allumage inversé, vous rejetez moins de particules fines dans l’atmosphère, encrassez moins votre conduit et votre vitre, et améliorez votre tirage."
                  icon={EcoIcon}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Économique"
                  description="En allumant votre foyer bois à l'avance avec Flamme Connect vous économiserez le coût de votre autre source de chaleur (électricité, fioul, gaz...)."
                  icon={EuroIcon}
                  iconColor="secondary"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default PresentationSection;
