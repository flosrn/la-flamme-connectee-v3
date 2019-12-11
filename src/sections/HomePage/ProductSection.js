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
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";

import projectsStyle from "public/jss/la-flamme-connectee/views/homePageSections/productSection";

import Link from "next/link";
import ButtonCustom from "../../../components/CustomButtons/ButtonCustom";

const useStyles = makeStyles(projectsStyle);

export default function ProductSection({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer justify="center" className="wow fadeInUp">
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
                  <Link href="/products">
                    <ButtonCustom round color="danger" animateButton>
                      <Icon>content_copy</Icon> Découvrir
                    </ButtonCustom>
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
