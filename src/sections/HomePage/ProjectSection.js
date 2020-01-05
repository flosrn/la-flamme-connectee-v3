import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import constants style
import { title } from "public/jss/la-flamme-connectee";
// @material-ui/icons
import Icon from "@material-ui/core/Icon";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import { Typography } from "@material-ui/core";

import svg from "public/img/svg/undraw_Data_points_ubvs.svg";
import MediaSvg from "../../../components/Media/MediaSvg";
import Title from "../../../components/Typography/Title";

// styles for this page
const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 60
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    color: "#fff"
  },
  projectText: {
    textAlign: "justify"
  },
  description: {
    color: "#999"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  gifContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(8),
    "& > img": {
      marginTop: "30px",
      width: "90%"
    }
  },
  list: {
    "& li:before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 8,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#13c4a1"
    }
  }
}));

function ProjectSection({ ...props }) {
  const classes = useStyles();
  return (
    <div className={classes.section} id="project">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} center>
          <Title variant="h2" className={classes.title}>
            Notre histoire
          </Title>
        </GridItem>
        <GridItem xs={10} sm={10} md={8}>
          <div className={classes.projectText}>
            <h5 className={classes.description}>
              Nous sommes propriétaire depuis 2000 d'une maison de 160 m² en banlieu toulousaine et nous consommions
              1400 L/an de fioul pour avoir une température d'environ 17 degrès.
              <br />
              <br />
            </h5>
            <h5 className={classes.description}>
              <strong>En 2013</strong> nous investissons dans un poêle à bois Scandinave de la marque{" "}
              <a href="https://www.contura.eu/fr/france/" target="_blank">
                Contura,{" "}
              </a>
              modèle{" "}
              <a
                href="https://www.contura.eu/fr/france/poeles/poeles-a-bois/pole-bois-contura-610-style/"
                target="_blank"
              >
                660T
              </a>
              , que nous utilisons comme énergie d'appoint.
            </h5>
            <h5 className={classes.description}>
              La dépense énergétique de notre foyer passe alors à 700 L/an de fioul pour avoir 17 °+ 3 stères de bois/an
              pour monter à une température de 20°-21°
              <br />
              Il reste cependant 2 points noirs :
              <ul className={classes.list}>
                <li>la consommation de fioul</li>
                <li>le retour dans une maison à 17°</li>
              </ul>
            </h5>
            <h5 className={classes.description}>
              Étant depuis toujours passionné par les innovations, les inventions et les nouvelles technologies, je me
              fixe comme objectif de mettre au point un système me permettant d’allumer mon poêle à bois à distance.
              <br />
              <br />
            </h5>
            <h5 className={classes.description}>
              <strong>2014 naissance du premier prototype :</strong>
            </h5>
            <h5 className={classes.description}>
              Nous décidons de nous rendre au Concours Lépine de Paris avec mon épouse, en tant que visiteur, et nous
              mandatons une société qui réalise une recherche d’antériorité mondiale, qui confirme que le système
              n’existe pas.
              <br />
              <br />
            </h5>
            <h5 className={classes.description}>
              <strong>2015,</strong> nous allumons régulièrement notre poêle grace à mon invention et décidons de
              supprimer notre chaudière. <br />
              Nous nous chauffons désormais 100% bois et consommons 7 stères de bois.
              <br />
              Objectifs atteints :
              <ul className={classes.list}>
                <li>plus besoin du fioul</li>
                <li>le retour dans une maison à 20°-21°</li>
              </ul>
            </h5>
            <h5 className={classes.description}>
              <strong>C'est en 2018</strong> que mon fils Florian m'incite à acheter une imprimante 3D, ce qui m'a
              offert des possibilitées nouvelles.
              <br />
              <br />
            </h5>
            <h5 className={classes.description}>
              <strong>Avril 2019</strong>, je dépose un Brevet et je décide de présenter mon invention au Concours
              Lépine de Paris en tant qu'inventeur. Ayant remporté une Médaille d’Argent et un franc succès auprès du
              public et des professionnels du chauffage au bois, je décide de retravailler mon produit pour le rendre
              plus léger, plus design et plus convivial, afin de le produire personnellement et le commercialiser
              <br />
              <br />
            </h5>
            <h5 className={classes.description}>
              <strong>Juin 2019</strong>, après de longues recherches, nous commencons la production à plus grande
              échelle en aquérant une 2ème imprimante 3D.
            </h5>
            <h5 className={classes.description}>
              Les boîtiers plastiques sont composés de PLA, un polymère thermoplastique entièrement biodégradable et
              d'origine végétale, utilisant de l'amidon de maïs comme matière première.
            </h5>
            <h5 className={classes.description}>
              Pour les allumes feux nous avons choisi de nous associer avec{" "}
              <a href="https://www.energiemarie.fr/" target="_blank">
                la Société Energie Marie
              </a>{" "}
              basée dans la banlieue Nantaise qui produit des allume-feu écologiques qui ont une combustion longue durée
              (10 minutes).
              <br />
              <br />
            </h5>
            <h5 className={classes.description}>
              <strong>Octobre 2019</strong>, nous participons au Concours Lépine de Montpellier avec mon nouveau produit
              et remporte une deuxième Médaille d'Argent.
            </h5>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default ProjectSection;
