import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Favorite from "@material-ui/icons/Favorite";
import logo from "public/img/logo/laflammeco.png";
import lepine from "public/img/logo/lepine.png";
import payments from "public/img/logo/payments.png";
import Button from "../CustomButtons/Button";
import Footer from "./Footer";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#212121",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  containerLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "90px 0 0 0",
    "& img": {
      width: 100
    },
    [theme.breakpoints.down("xs")]: {
      padding: "70px 0 0 0"
    }
  },
  mainContainer: {
    width: "100%",
    padding: "0 40px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 5px"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 150px"
    }
  },
  gridItem: {
    color: "rgba(255,255,255,.6)",
    fontFamily: "quicksand",
    fontSize: "16px",
    marginTop: 50
  },
  itemTitle: {
    color: "#fff",
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: "1.5px",
    position: "relative",
    "&::before": {
      content: "' '",
      position: "absolute",
      display: "inline-block",
      bottom: -5,
      width: 30,
      height: 2,
      background: "#fff"
    }
  },
  itemText: {
    padding: "25px 0 15px 0",
    fontSize: "15px"
  },
  menu: {
    padding: "25px 0 6px 0",
    listStyle: "none",
    "& li": {
      padding: "5px 0",
      "& a": {
        color: "rgba(255,255,255,.6) !important",
        "&:hover": {
          textDecoration: "underline"
        }
      }
    }
  },
  logoLepine: {
    width: 230,
    transform: "rotate(10deg)",
    marginTop: -20,
    [theme.breakpoints.down("sm")]: {
      marginTop: -60,
      marginLeft: -20,
      width: 180
    }
  },
  payments: {
    width: "95%",
    verticalAlign: "middle",
    [theme.breakpoints.down("sm")]: {
      width: "70%"
    }
  },
  footerBottom: {
    width: "100%",
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid rgba(255,255,255,.1)",
    marginTop: 50,
    color: "rgba(255,255,255,.6)",
    "& p": {
      textAlign: "center",
      verticalAlign: "middle",
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        padding: "0 50px"
      }
    }
  }
}));

function FooterDark() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerLogo}>
        <img src={logo} alt="logo" />
      </div>
      <GridContainer justify="center" className={classes.mainContainer}>
        <GridItem xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <p className={classes.itemTitle}>À propos</p>
          <div className={classes.itemContent}>
            <p className={classes.itemText}>
              La Flamme Connectée, plateforme web permmetant d'acheter un produit innovant pour allumer votre poêle à
              distance
            </p>
            <div className={classes.text}>
              <i className="fa fa-location-arrow" style={{ marginRight: 5 }} /> Lieu dit Nagut, 31370, Poucharramet –
              Midi-Pyrénées
              <br />
              <br />
              <i className="fa fa-mobile" style={{ marginRight: 5 }} /> Tél:{" "}
              <a href="tel:+33 6 10 44 03 73">+33 6 10 44 03 73</a>
              <br />
              <br />
              <i className="fas fa-envelope" style={{ marginRight: 5 }} /> Mail:{" "}
              <a href="mailto:contact@laflammeconnectee.fr">contact@laflammeconnectee.fr</a>
            </div>
            <p>&nbsp;</p>
            <p>
              <img src={payments} alt="payments" className={classes.payments} />
            </p>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <div className={classes.itemTitle}>Informations</div>
          <div className={classes.itemContent}>
            <ul className={classes.menu}>
              <li>
                <Link href="/">
                  <a>Produits</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Mon compte</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Documentation</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Téléchargement</a>
                </Link>
              </li>
            </ul>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <div className={classes.itemTitle}>Nous contacter</div>
          <div className={classes.itemContent}>
            <ul className={classes.menu}>
              <li>
                <Link href="/">
                  <a>Une question sur un produit ?</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Suivi de vos commandes</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Presse</a>
                </Link>
              </li>
            </ul>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
          <img src={lepine} alt="lepine" className={classes.logoLepine} />
        </GridItem>
        <div className={classes.footerBottom}>
          <div className={classes.footer}>
            <p>
              © 2019 <a href="https://www.laflammeconnectee.fr/">LA FLAMME CONNECTÉE</a>. Tous droits réservés
            </p>
          </div>
        </div>
      </GridContainer>
    </div>
  );
}

export default FooterDark;
