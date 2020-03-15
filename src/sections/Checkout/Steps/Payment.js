/* eslint no-template-curly-in-string:0 */
import React, { useState, useEffect, useContext } from "react";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CardActions, CardContent, CardHeader, Grid, Divider, TextField, Button, useTheme } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import { CheckoutContext } from "src/contexts/CheckoutContext";
import { ShoppingCartContext } from "src/contexts/ShoppingCartContext";
import CheckoutFormStripe from "./CheckoutForm/CheckoutFormStripe";
import getApiUrl from "../../../../utils/getApiUrl";
import AddressSummary from "../AddressSummary";

const pk = process.env.NODE_ENV === "development" ? process.env.STRIPE_PUBLIC_KEY_TEST : process.env.STRIPE_PUBLIC_KEY;

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiAlert-root": {
      marginBottom: 20
    }
  },
  cardContent: {},
  cardSubTitle: {
    padding: 5,
    marginBottom: 10
  }
}));

export default function Payment({ id }) {
  const [clientSecret, setClientSecret] = useState("");
  const { items, total } = useContext(ShoppingCartContext);
  const { address, deliveryMethod } = useContext(CheckoutContext);
  const Router = useRouter();
  const stripePromise = loadStripe(pk);
  const classes = useStyles();

  const fetchData = () => {
    console.log("address : ", address);
    // axios.get(`${getApiUrl()}/checkout/getCheckoutSession/${id}`).then(response => {
    //   const checkouSession = response.data.data.checkoutSession;
    //   console.log('checkouSession : ', checkouSession);
    if (id) {
      axios.patch(`${getApiUrl()}/checkout/createStripeSession/${id}`, { address, items, total }).then(res => {
        const secret = res.data.data.checkoutSession.paymentIntent.client_secret;
        setClientSecret(secret);
      });
    }
    // });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!address) {
      Router.push("/checkout/[id]", `/checkout/${id}?step=contact_informations`);
    }
  }, [address]);

  return (
    <div className={classes.root}>
      <GridContainer justify="center">
        <GridItem md={12}>
          {address && <AddressSummary id={id} address={address} deliveryMethod={deliveryMethod} />}
          <CardContent className={classes.cardContent}>
            <div className={classes.cardSubTitle}>
              <Typography variant="h4">Paiement</Typography>
              <Typography variant="body1">Toutes les transactions sont sécurisées et cryptées.</Typography>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutFormStripe id={id} clientSecret={clientSecret} address={address} />
            </Elements>
          </CardContent>
        </GridItem>
      </GridContainer>
    </div>
  );
}
