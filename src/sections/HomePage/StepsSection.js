import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LayoutSection from "components/Page/LayoutSection";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import { cardTitle, smallTitle } from "public/jss/la-flamme-connectee";
import imagesStyle from "public/jss/la-flamme-connectee/imagesStyles";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    zIndex: 2
  },
  itemGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative"
  },
  itemLeft: {
    [theme.breakpoints.between("sm", "md")]: {
      justifyContent: "flex-end"
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      marginBottom: 40
    }
  },
  itemRight: {
    [theme.breakpoints.between("sm", "md")]: {
      justifyContent: "flex-start",
      "& > div": {
        marginRight: "20%"
      }
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      "& > div": {
        marginRight: 0
      }
    }
  },
  ...imagesStyle,
  cardTitle,
  smallTitle: {
    ...smallTitle,
    color: "#fff",
    fontWeight: 800
  },
  description: {
    color: "#fff",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: 800
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  imgSize: {
    maxWidth: 190,
    height: 190
  }
}));

export default function StepsSection() {
  const classes = useStyles();
  const imageClasses = clsx(classes.imgFluid, classes.imgSize);
  return (
    <LayoutSection title="Le Flam'connect en trois étapes" bgColor="#FF8A73" whiteTitle id="steps">
      <GridContainer justify="center">
        <GridItem md={3} className={classes.itemContainer}>
          <Card plain id="animateUp">
            <GridContainer justify="center">
              <GridItem sm={5} md={12} className={clsx(classes.itemGrid, classes.itemLeft)}>
                <img src={require("/public/img/objects/steps/step-1.png")} alt="..." className={imageClasses} />
              </GridItem>
              <GridItem sm={7} md={12} className={clsx(classes.itemGrid, classes.itemRight)}>
                <CardBody>
                  <p className={classes.description}>J'appaire mon boitier Flam'connect à ma box wifi</p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
        <GridItem md={3}>
          <Card plain id="animateUp">
            <GridContainer justify="center">
              <GridItem sm={5} md={12} className={clsx(classes.itemGrid, classes.itemLeft)}>
                <img src={require("/public/img/objects/steps/step-2.png")} alt="..." className={imageClasses} />
              </GridItem>
              <GridItem sm={7} md={12} className={clsx(classes.itemGrid, classes.itemRight)}>
                <CardBody>
                  <p className={classes.description}>Je pose mon allume-feux Volcano'connect dans mon poêle</p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
        <GridItem md={3}>
          <Card plain id="animateUp">
            <GridContainer justify="center">
              <GridItem sm={5} md={12} className={clsx(classes.itemGrid, classes.itemLeft)}>
                <img src={require("/public/img/objects/steps/step-3.png")} alt="..." className={imageClasses} />
              </GridItem>
              <GridItem sm={7} md={12} className={clsx(classes.itemGrid, classes.itemRight)}>
                <CardBody>
                  <p className={classes.description}>Je profite d'un bon feu de bois en un clic sur mon smartphone</p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </LayoutSection>
  );
}
