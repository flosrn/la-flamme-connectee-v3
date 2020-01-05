import React from "react";

// @material-ui/core components
// @material-ui/icons
import { HourglassEmpty, Whatshot, CloudOff } from "@material-ui/icons";
// @material-ui/core
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";
// style for this page
import { useStyles } from "public/jss/la-flamme-connectee/views/homePageSections/topDownStyle";

import topDownImg from "public/img/flamco/topdown-info.jpg";

import { Typography } from "@material-ui/core";
import Title from "../../../components/Typography/Title";

function TopDownSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="topDown">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.gridItem}>
          <Title variant="h2" className={classes.title}>
            La technique de l'allumage inversé
          </Title>
          <h5 className={classes.description}>
            C’est une technique d’allumage de votre poêle ou insert à bois préconisée par l’
            <a href="https://www.ademe.fr/" target="_blank">
              ADEME
            </a>
            , moins polluante, qui permet également une combustion plus progressive. Le principe est simple et similaire
            à l’allumage d’une bougie : le feu est allumé en haut de la pyramide de bûches et il brûle vers le bas.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={11} sm={8} md={6} lg={7} center className={classes.gridImg}>
          <img
            src={require("/public/img/flamco/topdown-info.jpg")}
            alt="explications-topdown"
            className={classes.topDownImg}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={5} className={classes.gridItemBottom}>
          <InfoArea
            title="Mieux contrôler la combustion"
            description="Avec l’allumage inversé la combustion est progressive, le feu prend plus lentement, mais surement. En s'écroulant sur lui même la réserve de combustible durera plus longtemps."
            icon={HourglassEmpty}
            iconColor="myPrimary5"
            // vertical
          />
          <InfoArea
            title="Brûler davantage de gaz de combûstion"
            description="Avec un allumage inversé, les gaz générés par la combustion se retrouvent pris dans les flammes et servent de combustibles à leur tour (moins de dégagement de particules fines)."
            icon={Whatshot}
            iconColor="myPrimary2"
            // vertical
          />
          <InfoArea
            title="Dégager moins de fumée"
            description="En appliquant la technique de l’allumage inversé vous pourrez diminuer fortement les émissions de fumées de votre poêle ou insert afin d’en limiter l’encrassement. Utilisez toujours un bois contenant moins de 20% d'humidité."
            icon={CloudOff}
            iconColor="gray"
            // vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default TopDownSection;
