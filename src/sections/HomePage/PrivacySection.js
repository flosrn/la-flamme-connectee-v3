import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridItem from "components/Grid/GridItem";
import LayoutSection from "components/Page/LayoutSection";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({}));

export default function PrivacySection() {
  const classes = useStyles();
  return (
    <LayoutSection title="Traitement des données" id="privacy">
      <GridItem xs={11} sm={11} md={8} lg={6}>
        <Typography varian="body1" align="left">
          Lorsque vous consultez notre site Web, il se peut que nous déposions des données sur votre navigateur ou en
          recueillons. Ce dépôt de données s'avère nécessaire pour assurer le bon fonctionnement de notre site, mais il
          peut également être utilisé à des fins de marketing, d'analyses, et de personnalisation, par exemple pour
          enregistrer vos préférences.
        </Typography>
      </GridItem>
    </LayoutSection>
  );
}
