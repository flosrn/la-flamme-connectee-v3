import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import withStyles from "@material-ui/core/styles/withStyles";
import AddressStep from "src/sections/Checkout/Steps/Address";
import axios from "axios";
import { Card, CardContent, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { withAuthSync } from "../../api/withAuth";
import getApiUrl from "../../utils/getApiUrl";
import Shipping from "../../src/sections/Checkout/Steps/Shipping";
import Payment from "../../src/sections/Checkout/Steps/Payment";
import SimpleExpansionPanel from "../../components/ExpansionPanels/SimpleExpensionPanel";
import CartSummary from "../../src/sections/Checkout/CartSummary";
import manageLocalStorage from "../../utils/manageLocalStorage";
import { ShoppingCartContext } from "../../src/contexts/ShoppingCartContext";
import { CheckoutContext } from "../../src/contexts/CheckoutContext";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  cardContainer: {
    [theme.breakpoints.up("md")]: {
      flexDirection: "row-reverse"
    }
  },
  breadCrumbs: {
    margin: "20px 0 0 10px"
  },
  card: {
    // padding: "0 15px"
  },
  cardContent: {
    padding: "5px 0",
    paddingBottom: "0 !important",
    "& .MuiFormControl-root": {
      "& > p": {
        color: "red"
      }
    },
    inputRoot: {
      fontSize: 10
    },
    labelRoot: {
      fontSize: 10
    }
  },
  cardCart: {
    [theme.breakpoints.up("md")]: {
      marginTop: 45,
      background: "#fafafa"
    },
    padding: "0 10px"
  },
  noSession: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardNoSession: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const StyledBreadcrumbs = withStyles({
  ol: {
    fontSize: "12px",
    fontWeight: 700
  },
  li: {
    paddingLeft: 6
  },
  separator: {
    paddingLeft: 6,
    marginLeft: 0,
    marginRight: 0
  }
})(Breadcrumbs);

function CheckoutPage({ currentUser, id }) {
  const [component, setComponent] = useState(null);
  const [noSession, setNoSession] = useState(false);
  const [cart, setCart] = useState([]);
  const { items, storeCart, total } = useContext(ShoppingCartContext);
  const { deliveryMethod } = useContext(CheckoutContext);

  const Router = useRouter();
  const pathname = Router.asPath.split("=");
  const step = pathname[1];
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  // Load data from server
  const loadDataFromServer = async () => {
    const response = await axios.get(`${getApiUrl()}/checkout/getCheckoutSession/${id}`);
    const { products } = response.data.data.checkoutSession;
    // If products founded on server save it on local storage and context
    if (products) {
      storeCart(products);
      setCart(products);
      // Otherwise the session is lost
    } else {
      setNoSession(true);
    }
  };

  function setComponentStep(step) {
    switch (true) {
      case step === "contact_informations":
        setComponent(<AddressStep id={id} nextStep={setComponentStep} />);
        Router.push("/checkout/[id]", `/checkout/${id}?step=contact_informations`);
        break;
      case step === "shipping_method":
        setComponent(<Shipping id={id} nextStep={setComponentStep} />);
        Router.push("/checkout/[id]", `/checkout/${id}?step=shipping_method`);
        break;
      case step === "payment_method":
        setComponent(<Payment id={id} />);
        Router.push("/checkout/[id]", `/checkout/${id}?step=payment_method`);
        break;
      default:
        setComponent(<AddressStep id={id} nextStep={setComponentStep} />);
    }
  }

  useEffect(() => {
    // Determines which component to display
    setComponentStep(step);
    // Get items cart from context
    if (items && items.length > 0) {
      setCart(items);
    } else {
      // If not get items cart from local storage
      const cartLS = manageLocalStorage("get", "cart");
      if (cartLS && cartLS.length > 0) {
        setCart(cartLS);
      } else {
        // If not get items cart from server checkout session
        loadDataFromServer();
      }
    }
  }, [step]);

  return (
    <div className={classes.root}>
      <NextSeo title="Paiement" noindex />
      <Header color="dark" links={<HeaderLinks user={currentUser} />} fixed user={currentUser} />
      {!noSession ? (
        <GridContainer justify="center" className={classes.cardContainer}>
          <GridItem sm={10} md={5} lg={3} className={clsx(classes.card, classes.cardCart)}>
            <div className={classes.card}>
              <CardContent className={classes.cardContent}>
                {isDesktop ? (
                  <div>
                    <CartSummary cart={cart} total={total} deliveryMethod={deliveryMethod} step={step} />
                  </div>
                ) : (
                  <SimpleExpansionPanel total={total} deliveryMethod={deliveryMethod} step={step}>
                    <CartSummary cart={cart} total={total} deliveryMethod={deliveryMethod} step={step} />
                  </SimpleExpansionPanel>
                )}
              </CardContent>
            </div>
          </GridItem>
          <GridItem sm={10} md={7} lg={5}>
            <GridContainer justify="center">
              <GridItem>
                <StyledBreadcrumbs
                  className={classes.breadCrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link href="/shopping-cart">
                    <a>Panier</a>
                  </Link>
                  <Link href="/checkout/[id]" as={`/checkout/${id}?step=contact_informations`}>
                    <a onClick={() => setComponentStep("contact_informations")}>Informations</a>
                  </Link>
                  <Link href="/checkout/[id]" as={`/checkout/${id}?step=shipping_method`}>
                    <a onClick={() => setComponentStep("shipping_method")}>Livraison</a>
                  </Link>
                  <Link href="/checkout/[id]" as={`/checkout/${id}?step=payment_method`}>
                    <a onClick={() => setComponentStep("payment_method")}>Paiement</a>
                  </Link>
                </StyledBreadcrumbs>
              </GridItem>
            </GridContainer>
            <div className={classes.card}>
              <CardContent className={classes.cardContent}>{component}</CardContent>
            </div>
          </GridItem>
        </GridContainer>
      ) : (
        <GridContainer justify="center" className={classes.cardContainer}>
          <GridItem sm={10} md={5} lg={3} className={clsx(classes.card, classes.cardCart)}>
            <div className={classes.cardNoSession}>
              <CardContent className={classes.noSession}>PANIER VIDE</CardContent>
              <Link href="/products">
                <a>Retourner à la boutique</a>
              </Link>
            </div>
          </GridItem>
        </GridContainer>
      )}
    </div>
  );
}

CheckoutPage.getInitialProps = async ctx => {
  const { id } = ctx.query;
  return { id };
};

export default withAuthSync(CheckoutPage);
