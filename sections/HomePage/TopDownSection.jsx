import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { HourglassEmpty, Whatshot, CloudOff } from "@material-ui/icons";
// @material-ui/core
import Grid from "@material-ui/core/Grid";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import VerticalLinearStepper from "components/Steppers/VerticalLinearStepper.jsx";
// style for this page
import topDownStyle from "static/jss/la-flamme-connectee/views/homePageSections/topDownStyle.jsx";

// import Stove from "../../../static/img/stoves/stove1.png";
import { Typography } from "@material-ui/core";

function TopDownSection(props) {
  const { classes } = props;
  return (
    <div className={classes.section} id="topDown">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.gridItem}>
          <Typography variant="h3" className={classes.title}>La technique de l'allumage inversé</Typography>
          <h5 className={classes.description}>
            C’est une technique d’allumage de votre poêle ou insert à bois préconisée par l’<a href="https://www.ademe.fr/" target="_blank">ADEME</a>  moins polluante, qui permet également une combustion plus progressive. Le principe est simple et similaire à l’allumage d’une bougie : le feu est allumé en haut de la pyramide de bûches et il brûle vers le bas.
            </h5>
        </GridItem>
      </GridContainer>
      <GridContainer alignItems="center">
        <GridItem xs={12} sm={12} md={6} className={classes.gridItem}>
          {/*<iframe height="315" src="https://www.youtube.com/embed/mqouxltWKvI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
        </GridItem>
        <GridItem xs={12} sm={12} md={6} className={classes.gridItem}>
          <InfoArea
            title="Mieux contrôler la combustion"
            description="Avec l’allumage inversé la combustion est progressive, le feu prend plus lentement, mais surement. En s'écroulant sur lui même la réserve de combustible durera plus longtemps."
            icon={HourglassEmpty}
            iconColor="myPrimary5"
          // vertical
          />
          <InfoArea
            title="Brûler davantage de gaz de combustion"
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

TopDownSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(topDownStyle)(TopDownSection);
