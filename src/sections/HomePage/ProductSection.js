import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// @material-ui/icons
import Icon from "@material-ui/core/Icon";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import ButtonCustom from "components/CustomButtons/ButtonCustom";
import MediaSvg from "components/Media/MediaSvg";

import svg from "public/img/svg/undraw_smart_home_28oy.svg";
import projectsStyle from "public/jss/la-flamme-connectee/views/homePageSections/productSection";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles(projectsStyle);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <Card
                raised
                background
                style={{
                  backgroundImage: `url(${require("/public/img/contura/background-contura2-lowres.jpg")})`,
                  backgroundPosition: "right bottom"
                }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>INNOVATION</h6>
                  <Link href="/products">
                    <a>
                      <h3 className={classes.cardTitleWhite}>
                        Avec le Flam'connect, ne rentrez plus dans une maison froide
                      </h3>
                    </a>
                  </Link>
                  <p className={classes.cardDescription}>
                    "Gagnez en confort et privilégiez une énergie renouvelable en vous chauffant 100% au bois !
                    <br />
                    Le Flam'connect s'adapte à tous types de foyer fermé déjà existant sans y apporter de modifications
                    préalables !"
                  </p>
                  <Pulse>
                    <Link href="/products">
                      <ButtonCustom round color="danger" animateButton>
                        <Icon>shopping_cart</Icon> Passer commande
                      </ButtonCustom>
                    </Link>
                  </Pulse>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <GridContainer justify="center">
        <GridItem center>
          <MediaSvg src={svg} alt="smart-home" size="medium" animateUp />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.bottom}>
        <GridItem center>
          <Typography variant="subtitle1" align="center">
            Pour en savoir plus, consultez nos pages{" "}
            <Link href="/documentation">
              <a>Documentation</a>
            </Link>{" "}
            et{" "}
            <Link href="/products">
              <a>Produits</a>
            </Link>
          </Typography>
        </GridItem>
      </GridContainer>
    </>
  );
}
