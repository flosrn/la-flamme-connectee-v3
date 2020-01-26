import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import ContactSection from "src/sections/HomePage/ContactSection";
// images
import backgroundImage from "public/img/contura/background-contura3.jpg";

// nodejs library that concatenates classes
import classNames from "classnames";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
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
import { cardTitle } from "public/jss/la-flamme-connectee";
import Swal from "sweetalert2";
import { Typography } from "@material-ui/core";
import payment from "public/img/logo/payments/paiement-securise.png";
import svg1 from "../public/img/svg/undraw_add_to_cart_vkjp.svg";
import { ShoppingCartContext } from "../src/contexts/ShoppingCartContext";

import FooterDark from "../components/Footer/FooterDark";
import ButtonCustom from "../components/CustomButtons/ButtonCustom";
import { withAuthSync } from "../api/withAuth";
import Title from "../components/Typography/Title";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: -50
  },
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
    // height: "200px",
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
  },
  itemPrice: {
    color: theme.palette.secondary.main
  },
  productsMsg: {
    marginTop: 15
  },
  payments: {
    width: "94%",
    marginTop: 20
  }
}));

function ShoppingCartPage({ currentUser }) {
  const { items, addItem, removeItem, total } = useContext(ShoppingCartContext);
  const classes = useStyles();
  const Router = useRouter();

  const login = () => {
    if (Object.keys(currentUser).length !== 0) {
      Router.push("/checkout").then(() => window.scrollTo(0, 0));
    } else {
      Swal.fire({
        title: "Veuillez vous connecter pour effectuer cet achat",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Se connecter",
        cancelButtonText: "S'inscrire",
        confirmButtonColor: "#ff7961",
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          Router.push("/login?action=login").then(() => window.scrollTo(0, 0));
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Router.push("/login?action=register").then(() => window.scrollTo(0, 0));
        }
      });
    }
  };

  return (
    <div className={classes.root}>
      <Header color="dark" links={<HeaderLinks user={currentUser} />} fixed user={currentUser} />
      <GridContainer justify="center">
        <GridItem xs={8} sm={10} md={10} lg={8}>
          <MediaSvg src={svg1} alt="contact-us" size="small" mt={100} />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10} lg={8}>
          <div className={classes.container} id="shoppingCart">
            <Card plain>
              <CardBody className={classes.cardBody}>
                <GridItem center>
                  <Title variant="h2" className={classes.cardTitle}>
                    Votre panier
                  </Title>
                </GridItem>
                <GridContainer>
                  <GridItem md={6}>
                    {items.length > 0 ? (
                      items.map(item => (
                        <Card className={classes.cardItem} key={item.id}>
                          <GridContainer className={classes.gridContainer}>
                            <GridItem sm={4} className={classes.cardColumn}>
                              <div className={classes.cardPicture}>
                                <img src={item.images[0].original} alt="product" />
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
                              <div className={classes.columnContent}>
                                <p className={classes.itemPrice}>{item.price} €</p>
                              </div>
                            </GridItem>
                          </GridContainer>

                          {/* <IconButton color="secondary" className={classes.deleteButton} onClick={() => deleteItem(item)}> */}
                          {/*  <ClearIcon /> */}
                          {/* </IconButton> */}
                        </Card>
                      ))
                    ) : (
                      <Card className={classes.cardItemEmpty}>
                        <div className={classes.emptyCart}>Votre panier est vide !</div>
                        <div className={classes.productsMsg}>
                          <Link href="/products">
                            <a>Voir les produits</a>
                          </Link>
                        </div>
                      </Card>
                    )}
                  </GridItem>

                  <GridItem md={6}>
                    <Card className={classes.cardOrder}>
                      <div className={classes.cardRow}>
                        <div className={classes.rowTotal}>
                          <div className={classes.rowName}>Total</div>
                          <div className={classes.rowContent}>
                            <strong>{Math.floor(total) >= 0 ? Math.floor(total) : 0} €</strong>
                          </div>
                        </div>
                        <div className={classes.rowPurchase}>
                          <div className={classes.purchaseButton}>
                            <ButtonCustom color="secondary" disabled={items.length <= 0} onClick={login} animateButton>
                              Passer commande <KeyboardArrowRight />
                            </ButtonCustom>
                          </div>
                          <GridContainer className={classes.rowIcons}>
                            <GridItem sm={4} className={classes.gridIcon}>
                              <div className={classes.icon}>
                                <LocalShippingIcon fontSize="large" color="primary" />
                              </div>
                              <div className={classes.iconLabel}>Frais de port gratuit</div>
                            </GridItem>
                            <GridItem sm={4} className={classes.gridIcon}>
                              <div className={classes.icon}>
                                <SentimentSatisfiedAltIcon fontSize="large" color="primary" />
                              </div>
                              <div className={classes.iconLabel}>Satisfait ou remboursé</div>
                            </GridItem>
                            <GridItem sm={4} className={classes.gridIcon}>
                              <div className={classes.icon}>
                                <VerifiedUserIcon fontSize="large" color="primary" />
                              </div>
                              <div className={classes.iconLabel}>Paiement sécurisé</div>
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify="center">
                            <img src={payment} alt="paiement-securise" className={classes.payments} />
                          </GridContainer>
                        </div>
                      </div>
                    </Card>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </div>
        </GridItem>
      </GridContainer>
      <FooterDark />
    </div>
  );
}

export default withAuthSync(ShoppingCartPage);
