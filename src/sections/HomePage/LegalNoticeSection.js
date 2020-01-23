import React from "react";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Title from "components/Typography/Title";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingBottom: 40
  }
}));

export default function LegalNoticeSection() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="legal-notice">
      <GridContainer justify="center" className={classes.mainContainer}>
        <GridItem xs={11} sm={11} md={8} lg={6} className={classes.gridItem}>
          <GridContainer justify="center">
            <GridItem center className={classes.gridItem}>
              <Title variant="h2" className={classes.title}>
                Mentions légales
              </Title>
            </GridItem>
          </GridContainer>
          <p style={{ textAlign: "justify" }}>
            <strong>&nbsp;</strong>
            <br />
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la
            Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et
            visiteurs du site{" "}
            <Link href="/">
              <a>laflammeconnectee.fr</a>
            </Link>{" "}
            les informations suivantes :
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>ÉDITEUR</strong>
          </p>
          <p style={{ textAlign: "justify" }}>
            Le site{" "}
            <Link href="/">
              <a>laflammeconnectee.fr</a>
            </Link>{" "}
            est la propriété exclusive de&nbsp;<strong>SARL&nbsp;</strong>
            <strong>La Flamme Connectée</strong>, qui l'édite.
          </p>
          <strong>La Flamme Connectée </strong>
          <p style={{ textAlign: "justify" }}>
            <strong>Lieu dit Nagut,</strong>
            <strong> 31370 Poucharramet</strong>
            <br />
            Immatriculée au Registre du Commerce et des Sociétés de&nbsp;&nbsp;
            <strong>Toulouse </strong>
            sous le numéro<strong>&nbsp;</strong>
            <strong>877 786 517 00012</strong>
            <br />
            <strong>SARL </strong>au capital de<strong>&nbsp;</strong>
            <strong>2000 </strong>€ Téléphone : <strong>06 10 44 03 73</strong>
          </p>
          <p>
            Numéro TVA intracommunautaire : <strong>FR 16792487738</strong>
            <br />
            Adresse de courrier électronique :{" "}
            <a href="mailto:contact@laflammeconnectee.fr">contact@laflammeconnectee.fr</a>
            <br />
            <br />
            Directeur de la&nbsp; publication&nbsp;: <strong>Monsieur Florian SÉRAN</strong>
            <br />
            Contactez le responsable de la publication :{" "}
            <a href="mailto:florian.seran@gmail.com">florian.seran@gmail.com</a>
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>HÉBERGEMENT</strong>
          </p>
          <p style={{ textAlign: "justify" }}>
            Les données informatiques sont hébergées par l'entreprise suivante :
            <br />
            <strong>Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre</strong>
            <br />
            La navigation sur ce site est soumise à la réglementation en vigueur et aux conditions générales
            d'utilisation définies ci-après :
            <br />
            <Link href="/terms-of-sales">
              <a>CONDITIONS GENERALES D'UTILISATION ET CONDITIONS GENERALES DE VENTE</a>
            </Link>
            <br />
            <br />
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
