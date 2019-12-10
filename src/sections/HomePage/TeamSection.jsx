import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";

import { useStyles } from "public/jss/la-flamme-connectee/views/homePageSections/teamStyle";
// import colors
import { facebookColor, instagramColor, linkedinColor, twitterColor } from "public/jss/la-flamme-connectee";

import MediaSvg from "../../../components/Media/MediaSvg";

function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid, classes.imgSize);
  return (
    <div className={classes.section} id="team">
      <div className={classes.relativeContainer}>
        <Typography variant="h3" className={classes.title}>
          L'équipe
        </Typography>
        <p className={classes.description}></p>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Card plain>
                <GridItem xs={8} sm={4} md={6} className={classes.itemGrid}>
                  <img src={require("/public/img/faces/Patrick.jpg")} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Patrick SÉRAN
                  <br />
                  <small className={classes.smallTitle}>Inventeur, entrepreneur et fabriquant</small>
                </h4>
                <CardBody>
                  <GridItem xs={10} md={12} lg={10} className={classes.itemGrid}>
                    <p className={classes.description}>
                      Touche à tout et ayant une imagination débordante il a toujours eu en lui la fibre de l'inventeur,
                      Patrick n'a jamais cessé de chercher des solutions qui lui permettent de lui simplifier la vie.
                    </p>
                  </GridItem>
                </CardBody>
                {/*<Box className={classes.justifyCenter}>*/}
                {/*  <Button justIcon color="transparent" className={classes.margin5}>*/}
                {/*    <i className={classes.socials + " fab fa-facebook"} style={{ color: facebookColor }} />*/}
                {/*  </Button>*/}
                {/*  <Button justIcon color="transparent" className={classes.margin5}>*/}
                {/*    <i className={classes.socials + " fab fa-linkedin"} style={{ color: linkedinColor }} />*/}
                {/*  </Button>*/}
                {/*</Box>*/}
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Card plain>
                <GridItem xs={8} sm={4} md={6} className={classes.itemGrid}>
                  <img src={require("/public/img/faces/Marie.jpg")} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Marie-Laure SÉRAN
                  <br />
                  <small className={classes.smallTitle}>Responsable relation client et SAV</small>
                </h4>
                <CardBody>
                  <GridItem xs={10} md={12} lg={10} className={classes.itemGrid}>
                    <p className={classes.description}>
                      Secrétaire de direction de formation, Marie-Laure a toujours épaulé et soutenu son mari Patrick
                      dans ses projets. Consciencieuse et appliquée elle saura répondre à vos demandes.
                    </p>
                  </GridItem>
                </CardBody>
                {/*<Box className={classes.justifyCenter}>*/}
                {/*  <Button justIcon color="transparent" className={classes.margin5}>*/}
                {/*    <i className={classes.socials + " fab fa-facebook"} style={{ color: facebookColor }} />*/}
                {/*  </Button>*/}
                {/*</Box>*/}
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <Card plain>
                <GridItem xs={8} sm={4} md={6} className={classes.itemGrid}>
                  <img src={require("/public/img/faces/Florian.jpg")} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Florian SÉRAN
                  <br />
                  <small className={classes.smallTitle}>Développeur web et responsable digital</small>
                </h4>
                <CardBody>
                  <GridItem xs={10} md={6} lg={10} className={classes.itemGrid}>
                    <p className={classes.description}>
                      Ayant un diplôme de concepteur développeur informatique, il a réalisé de A à Z le site internet La
                      Flamme Connectée. Florian s'occupe aussi des stratégies de communication à adopter pour faire
                      vivre l'image de la marque au travers des réseaux sociaux.
                    </p>
                  </GridItem>
                </CardBody>
                {/*<Box className={classes.justifyCenter}>*/}
                {/*  <Button justIcon color="transparent" className={classes.margin5}>*/}
                {/*    <i className={classes.socials + " fab fa-facebook"} style={{ color: facebookColor }} />*/}
                {/*  </Button>*/}
                {/*  <Button justIcon color="transparent" className={classes.margin5}>*/}
                {/*    <i className={classes.socials + " fab fa-twitter"} style={{ color: twitterColor }} />*/}
                {/*  </Button>*/}
                {/*  <Button justIcon color="transparent" className={classes.margin5}>*/}
                {/*    <i className={classes.socials + " fab fa-instagram"} style={{ color: instagramColor }} />*/}
                {/*  </Button>*/}
                {/*  <Button justIcon color="transparent" className={classes.margin5}>*/}
                {/*    <i className={classes.socials + " fab fa-linkedin"} style={{ color: linkedinColor }} />*/}
                {/*  </Button>*/}
                {/*</Box>*/}
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
