import React, { useMemo } from "react";
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import useResponsiveFontSize from "./useResponsiveFontSize.js";
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";

const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    width: "100%",
    backgroundColor: "#fafafa",
    padding: "20px 10px",
    "& .MuiGrid-root": {
      // margin: "0 5px"
    }
  },
  error: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "20px",
    color: "#e4584c"
  },
  result: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "20px",
    color: "#666ee8"
  }
}));

function CardSection({ changeHandler, error, paymentMethod }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.formContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardNumberElement
              options={{ placeholder: "Numéro de carte", showIcon: true }}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={changeHandler}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardExpiryElement
              options={{ placeholder: "Date d'expiration (MM/AA)" }}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={changeHandler}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardCvcElement
              options={{ placeholder: "Code de sécurité" }}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={changeHandler}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CardSection;
