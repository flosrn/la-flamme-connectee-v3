import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
// @material-ui/icons
import { ThumbUp, LocalFlorist, EuroSymbol } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "static/jss/la-flamme-connectee/views/homePageSections/productStyle.jsx";


class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="presentation">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.gridItem}>
            <Typography variant="h3" className={classes.title}>Présentation</Typography>
            <h5 className={classes.description}>
              Avec le système <strong>Flamme Connect</strong>, programmez l'allumage de votre poêle ou insert en votre absence.<br />
              Profitez ainsi de la chaleur du feu de bois dès votre retour.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Pratique"
                description="Avec votre smartphone, vous connaîtrez la température de votre maison à distance et en temps réel."
                icon={ThumbUp}
                iconColor="myPrimary1"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Écologique"
                description="Avec l'allumage inversé, vous rejetez moins de particules fines dans l’atmosphère, encrassez moins votre conduit et votre vitre, et améliorez votre tirage."
                icon={LocalFlorist}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Économique"
                description="En allumant votre foyer bois à l'avance avec Flamme Connect vous économiserez le coût de votre autre source de chaleur (électricité, fioul, gaz...)."
                icon={EuroSymbol}
                iconColor="myPrimary4"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSection);
