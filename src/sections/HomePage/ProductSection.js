/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
import FireplaceIcon from "@material-ui/icons/Fireplace";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";

import projectsStyle from "public/jss/la-flamme-connectee/views/homePageSections/productSection";

import office2 from "public/img/contura/background-contura-max.jpg";
import Link from "next/link";
const useStyles = makeStyles(projectsStyle);

export default function ProductSection({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <Card
                raised
                background
                style={{
                  backgroundImage: `url(${require("/public/img/contura/background-contura2-lowres.jpg")})`,
                  backgroundPosition: "left bottom"
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
                    Faites des économies d'énergie et profitez d'un feu agréable dès votre retour dans votre maison.
                    <br />
                    Chauffez vous 100% au bois et privilégiez une énergie renouvellable, propre, locale et faites des
                    économies sur votre facture d'énergie !
                  </p>
                  <Link href="/products">
                    <Button round color="danger">
                      <Icon>content_copy</Icon> Découvrir
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
