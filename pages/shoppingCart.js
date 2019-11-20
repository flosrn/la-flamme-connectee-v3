import React, { useEffect, useContext, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import ContactSection from "src/sections/HomePage/ContactSection";
// images
import backgroundImage from "static/img/contura/background-contura3.jpg";

// nodejs library that concatenates classes
import classNames from "classnames";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import ClearIcon from "@material-ui/icons/Clear";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Footer from "components/Footer/Footer";
import Table from "components/Table/Table";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";

import product1 from "static/img/objects/detourage/volcano-flam_front.png";
import product2 from "static/img/objects/detourage/volcano-trio.png";
import product3 from "static/img/objects/detourage/flam-connect-pack.png";
import axios from "axios";
import { cardTitle } from "static/jss/la-flamme-connectee";
import ShoppingCart from "@material-ui/core/SvgIcon/SvgIcon";
import svg1 from "../static/img/svg/undraw_add_to_cart_vkjp.svg";
import { ShoppingCartContext } from "../src/contexts/ShoppingCartContext";

const useStyles = makeStyles(theme => ({
  cardTitle,
  cardItem: {
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    },
    position: "relative"
  },
  gridContainer: {
    width: "100%"
  },
  cardColumn: {
    padding: "10px"
  },
  cardPicture: {
    textAlign: "center",
    "& > img": {
      width: "135px"
    },
    [theme.breakpoints.up("sm")]: {
      "& > img": {
        width: "150px"
      }
    }
  },
  cardName: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
  },
  columnName: {
    textAlign: "center",
    "&,rowName": {
      fontWeight: "bold"
    }
  },
  columnContent: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  columnQuantity: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardOrder: {
    padding: "10px",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  rowName: {
    fontWeight: "bold"
  },
  rowTotal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rowPurchase: {
    height: "100%"
  },
  purchaseButton: {
    textAlign: "center",
    padding: "10px 0"
  },
  rowIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gridIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  iconLabel: {
    textAlign: "center",
    padding: "0 15px"
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    right: 5
  },
  cardItemEmpty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px"
  },
  emptyCart: {
    textAlign: "center"
  }
}));

function ShoppingCartPage() {
  const [stripe, setStripe] = useState(null);
  const { items, addItem, removeItem, deleteItem } = useContext(ShoppingCartContext);
  const classes = useStyles();

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY_TEST));
  }, []);

  const goToCheckout = () => {
    const values = {
      name: "flo"
    };
    axios
      .post("/api/checkout/getCheckoutSession", values)
      .then(response => {
        stripe.redirectToCheckout({
          sessionId: response.data.id
        });
      })
      .catch(error => {
        console.log("error : ", error);
      });
  };

  const login = () => {
    console.log("x : ");
  };

  return (
    <LayoutPage backgroundImage={backgroundImage} sectionId="contact" backgroundPosition="30% 85%">
      <MediaSvg src={svg1} alt="contact-us" size="medium" mt={30} />
      <div className={classes.container}>
        <Card plain>
          <CardBody className={classes.cardBody}>
            <h3 className={classes.cardTitle}>Votre panier</h3>
            <GridContainer>
              <GridItem md={6}>
                {items.length > 0 ? (
                  items.map(item => (
                    <Card className={classes.cardItem}>
                      <GridContainer className={classes.gridContainer}>
                        <GridItem sm={4} className={classes.cardColumn}>
                          <div className={classes.cardPicture}>
                            <img src={product1} alt="product" />
                          </div>
                          <div className={classes.cardName}>{item.name}</div>
                        </GridItem>

                        <GridItem sm={4} className={classes.cardColumn}>
                          <div className={classes.columnName}>Quantité</div>
                          <div className={classes.columnContent}>
                            <div className={classes.columnQuantity}>
                              <IconButton color="secondary" onClick={() => removeItem(item)}>
                                <RemoveIcon />
                              </IconButton>
                              {item.quantity}
                              <IconButton color="secondary" onClick={() => addItem(item)}>
                                <AddIcon />
                              </IconButton>
                            </div>
                          </div>
                        </GridItem>

                        <GridItem sm={4} className={classes.cardColumn}>
                          <div className={classes.columnName}>Prix</div>
                          <div className={classes.columnContent}>100</div>
                        </GridItem>
                      </GridContainer>

                      <IconButton
                        color="secondary"
                        className={classes.deleteButton}
                        onClick={() => deleteItem(item.id)}
                      >
                        <ClearIcon />
                      </IconButton>
                    </Card>
                  ))
                ) : (
                  <Card className={classes.cardItemEmpty}>
                    <div className={classes.emptyCart}>Votre panier est vide !</div>
                  </Card>
                )}
              </GridItem>

              <GridItem md={6}>
                <Card className={classes.cardOrder}>
                  <div className={classes.cardRow}>
                    <div className={classes.rowTotal}>
                      <div className={classes.rowName}>Total</div>
                      <div className={classes.rowContent}>100</div>
                    </div>
                    <div className={classes.rowPurchase}>
                      <div className={classes.purchaseButton}>
                        <Button round color="secondary" onClick={login}>
                          Passer commande <KeyboardArrowRight />
                        </Button>
                      </div>
                      <GridContainer className={classes.rowIcons}>
                        <GridItem sm={4} className={classes.gridIcon}>
                          <div className={classes.icon}>
                            <LocalShippingIcon fontSize="large" />
                          </div>
                          <div className={classes.iconLabel}>Frais de port gratuit</div>
                        </GridItem>
                        <GridItem sm={4} className={classes.gridIcon}>
                          <div className={classes.icon}>
                            <SentimentSatisfiedAltIcon fontSize="large" />
                          </div>
                          <div className={classes.iconLabel}>Satisfait ou remboursé</div>
                        </GridItem>
                        <GridItem sm={4} className={classes.gridIcon}>
                          <div className={classes.icon}>
                            <VerifiedUserIcon fontSize="large" />
                          </div>
                          <div className={classes.iconLabel}>Payment sécurisé</div>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </div>
                </Card>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    </LayoutPage>
  );
}

export default ShoppingCartPage;
