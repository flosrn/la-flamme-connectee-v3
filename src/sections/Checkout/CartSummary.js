import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
    padding: "0 20px",
    width: "100%",
    "& .MuiDivider-root": {
      margin: 30
    }
  },
  cartItemContainer: {
    height: 80,
    margin: "5px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px"
  },
  cartItemLeft: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiTypography-root": {
      paddingLeft: 10
    }
  },
  cartItemRight: {
    maxWidth: "200px",
    marginRight: 10
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  caption: {
    fontSize: "12px"
  },
  cartItemImg: {
    width: 80,
    height: 80,
    padding: 5,
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    borderRadius: "8px",
    zIndex: "1",
    "& img": {
      width: "100%"
    },
    "&::after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      borderRadius: "8px",
      border: "1px rgba(0,0,0,0.1) solid",
      zIndex: "2"
    }
  },
  subTotal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5px 10px 5px"
  },
  shipping: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 5px 0 5px",
    "& div:nth-child(2)": {
      fontSize: "12px"
    }
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5px 20px 5px"
  },
  total: {
    fontSize: "18px",
    fontWeight: 700
  },
  quantity: {
    fontSize: "0.85714em",
    fontWeight: "500",
    lineHeight: "1.75em",
    whiteSpace: "nowrap",
    textAlign: "center",
    borderRadius: "1.75em",
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    WebkitBoxSizing: "border-box",
    boxSizing: "border-box",
    minWidth: "1.75em",
    height: "1.75em",
    padding: "0 0.58333em",
    position: "absolute",
    right: "-0.75em",
    top: "-0.75em",
    zIndex: "3"
  }
}));

export default function CartSummary({ cart, total, deliveryMethod, step }) {
  const classes = useStyles();

  const totalCalculation = () => {
    const price = [];
    cart.length > 0 &&
      cart.map(item => {
        price.push(item.price * item.quantity);
      });
    return price.length > 0 ? price.reduce((a, b) => a + b, 0) : 0;
  };

  return (
    <div className={classes.root}>
      <div>{cart && cart.length > 0 && cart.map(el => <CartItem item={el} key={el.id} />)}</div>
      <Divider />
      <div className={classes.totalLines}>
        <div className={classes.subTotalContainer}>
          <div className={classes.subTotal}>
            <div>Sous-total</div>
            <div>
              <strong>{totalCalculation().toFixed(2)} €</strong>
            </div>
          </div>
          <div className={classes.shipping}>
            <div>Livraison</div>
            {step === "contact_informations" ? (
              <div>Calculé à l'étape suivante</div>
            ) : (
              <div>
                {deliveryMethod && deliveryMethod.cost !== 0
                  ? `${Number.parseFloat(deliveryMethod.cost).toFixed(2)} €`
                  : "Gratuit"}
              </div>
            )}
          </div>
        </div>
        <Divider />
        <div className={classes.totalContainer}>
          <div className={classes.totalText}>Total</div>
          {step === "contact_informations" ? (
            <>
              {deliveryMethod && deliveryMethod.cost ? (
                <div className={classes.total}>{`${Number.parseFloat(total - deliveryMethod.cost).toFixed(2)} €`}</div>
              ) : (
                <div className={classes.total}>{total.toFixed(2)} €</div>
              )}
            </>
          ) : (
            <div className={classes.total}>{total.toFixed(2)} €</div>
          )}
        </div>
      </div>
    </div>
  );
}

function CartItem({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.cartItemContainer}>
      <div className={classes.cartItemLeft}>
        <div className={classes.cartItemImg}>
          <span className={classes.quantity}>{item.quantity}</span>
          <img src={item.images[0].thumbnail} alt={`${item.title}-thumbnail`} />
        </div>
        <div className={classes.title}>
          <Typography variant="body1">
            <strong>{item.name}</strong>
          </Typography>
          <Typography variant="body2" className={classes.caption}>
            {item.caption}
          </Typography>
        </div>
      </div>
      <div className={classes.cartItemRight}>{Number.parseFloat(item.price).toFixed(2)} €</div>
    </div>
  );
}
