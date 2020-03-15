import React from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { makeStyles } from "@material-ui/core";
import Card from "../../../components/Card/Card";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import { cardTitle } from "../../../public/jss/la-flamme-connectee";

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
      width: "85px",
      height: "auto !important"
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

export default function CartItemSummary({ items, total }) {
  const classes = useStyles();

  return (
    <>
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
                  <div className={classes.columnQuantity}>{item.quantity}</div>
                </div>
              </GridItem>

              <GridItem sm={4} className={classes.cardColumn}>
                <div className={classes.columnName}>Prix</div>
                <div className={classes.columnContent}>{item.price} €</div>
              </GridItem>
            </GridContainer>
          </Card>
        ))
      ) : (
        <Card className={classes.cardItemEmpty}>
          <div className={classes.emptyCart}>Votre panier est vide !</div>
        </Card>
      )}
      <p>
        Montant total de la commande: <strong>{total} €</strong>
      </p>
    </>
  );
}
