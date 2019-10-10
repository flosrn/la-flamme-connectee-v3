import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import constants style
import { title } from "static/jss/la-flamme-connectee";
// @material-ui/icons
import Icon from "@material-ui/core/Icon";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import { Typography } from "@material-ui/core";
import gif from "static/img/objects/3d-print.gif";

import svg from "static/img/svg/undraw_Data_points_ubvs.svg";
import MediaSvg from "../../../components/Media/MediaSvg";

// styles for this page
const useStyles = makeStyles(theme => ({
  section: {
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
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
  }
}));

function ProjectSection({ ...props }) {
  const classes = useStyles();
  return (
    <div className={classes.section} id="project">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography variant="h3" className={classes.title}>
            Le projet
          </Typography>
        </GridItem>
        <GridItem xs={10} sm={10} md={8}>
          <div className={classes.projectText}>
            <h5 className={classes.description}>
              <strong>En 2012</strong> je décide avec mon épouse d’investir dans un poêle à bois Scandinave de la marque{" "}
              <a href="https://www.contura.eu/fr/france/" target="_blank">
                Contura
              </a>
              ,{" "}
              <a
                href="https://www.contura.eu/fr/france/poeles/poeles-a-bois/pole-bois-contura-610-style/"
                target="_blank"
              >
                modèle 660T
              </a>
              , pour chauffer notre maison.
            </h5>
            <h5 className={classes.description}>
              Pleinement satisfait des performances du poêle, il reste cependant un point noir, le retour du travail, de
              week-end ou de vacances dans une maison froide. Ce qui oblige l’utilisation d’une énergie alternative.
            </h5>
            <h5 className={classes.description}>
              Etant depuis toujours passionné par les innovations, les inventions et les nouvelles technologies, je
              décide donc d’essayer de mettre au point un système me permettant d’allumer mon poêle à bois à distance.
            </h5>
            <h5 className={classes.description}>
              <strong>2014 naissance du premier « Flamme Connect » :</strong>
            </h5>
            <h5 className={classes.description}>
              Persuadé d’avoir inventé un produit déjà existant, je fais des recherches qui s’avèrent infructueuses.
            </h5>
            <h5 className={classes.description}>
              Je décide alors de me rendre au Concours Lépine de Paris avec mon épouse, en tant que visiteur, et je
              mandate une société «{" "}
              <a href="https://www.innovate-design.fr/" target="_blank">
                Innovate Product Design
              </a>{" "}
              » qui me réalise une recherche d’antériorité mondiale, qui confirme que le système n’existe pas.
            </h5>
            <h5 className={classes.description}>
              <strong>2015</strong> je me sers régulièrement du « Flamme Connect » et je supprime ma chaudière fioul.
            </h5>
            <h5 className={classes.description}>
              <strong>C'est en 2018</strong> que mon fils Florian m'incite à acheter une imprimante 3D, ce qui m'a
              offert des possibilitées nouvelles dans la réalisation d'objets divers.
            </h5>
            <h5 className={classes.description}>
              <strong>Avril 2019</strong>, je dépose un Brevet et je décide de présenter mon invention au Concours
              Lépine de Paris.
            </h5>
            <h5 className={classes.description}>
              Ayant remporté une Médaille d’Argent et un franc succès auprès du public et des professionnels du
              chauffage au bois, je décide de retravailler mon produit pour le rendre plus léger, plus design et plus
              convivial, afin de le produire personnellement et le commercialiser au grand public.
            </h5>
            <h5 className={classes.description}>
              <strong>Juin 2019</strong>, après de longues recherches, je commence la production à plus grande échelle
              en aquérant une 2ème imprimante 3D.
            </h5>
            <h5 className={classes.description}>
              Les boîtiers plastiques sont composés de PLA, un polymère thermoplastique entièrement biodégradable et
              d'origine végétale, utilisant de l'amidon de maïs comme matière première.
            </h5>
            <h5 className={classes.description}>
              Pour les allumes feux j'ai choisi de m'associer avec{" "}
              <a href="https://www.energiemarie.fr/" target="_blank">
                la Société Energie Marie
              </a>{" "}
              basée dans la banlieue Nantaise. Ces allumes feux écologiques ont la particularité d'être fabriqués à base
              de composants végétaux et ils émanent une odeur naturelle agréable.
            </h5>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} className={classes.gifContainer}>
          <img src={gif} alt="3dprint" />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default ProjectSection;
