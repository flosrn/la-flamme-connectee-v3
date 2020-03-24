import React, { useEffect, useState } from "react";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import manageLocalStorage from "../../../utils/manageLocalStorage";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiExpansionPanelSummary-content": {
      justifyContent: "space-between"
    },
    marginBottom: 30
  },
  gridContainer: {
    width: "110%",
    justifyContent: "space-between"
  },
  flexEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  text: {
    display: "flex",
    alignItems: "center"
  },
  info: {
    color: theme.palette.title.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      textAlign: "left"
    }
  }
}));

export default function AddressSummary({ id, address, deliveryMethod }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={false}>
        <ExpansionPanelSummary>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={8} sm={8}>
              <GridContainer className={classes.gridContainer}>
                <GridItem lg={6} className={classes.text}>
                  Contact
                </GridItem>
                <GridItem lg={6} className={classes.info}>
                  <div>{address.email}</div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={4} sm={4} className={classes.flexEnd}>
              <GridContainer className={classes.gridContainer}>
                <GridItem className={classes.flexEnd}>
                  <Link href="/checkout/[id]" as={`/checkout/${id}?step=contact_informations`}>
                    <a>Modifier</a>
                  </Link>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel expanded={false}>
        <ExpansionPanelSummary>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={8} sm={8}>
              <GridContainer className={classes.gridContainer}>
                <GridItem lg={4} className={classes.text}>
                  Expédier à
                </GridItem>
                <GridItem lg={8} className={classes.info}>
                  {address.address_1}, {address.zip}, {address.city}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={4} sm={4} className={classes.flexEnd}>
              <GridContainer className={classes.gridContainer}>
                <GridItem className={classes.flexEnd}>
                  <Link href="/checkout/[id]" as={`/checkout/${id}?step=contact_informations`}>
                    <a>Modifier</a>
                  </Link>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      {deliveryMethod && (
        <ExpansionPanel expanded={false}>
          <ExpansionPanelSummary>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={8} sm={8}>
                <GridContainer className={classes.gridContainer}>
                  <GridItem lg={4} className={classes.text}>
                    Méthode
                  </GridItem>
                  <GridItem lg={8} className={classes.info}>
                    {deliveryMethod.label} - {`${Number.parseFloat(deliveryMethod.cost).toFixed(2)} €`}
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={4} sm={4} className={classes.flexEnd}>
                <GridContainer className={classes.gridContainer}>
                  <GridItem className={classes.flexEnd}>
                    <Link href="/checkout/[id]" as={`/checkout/${id}?step=shipping_method`}>
                      <a>Modifier</a>
                    </Link>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      )}
    </div>
  );
}

// <div>Expédier à</div>
// <div>
// <div>{address.address_1} {address.zip} {address.city}</div>
// </div>
// <div>
// <Link href="/checkout/[id]" as={`/checkout/${id}?step=contact_informations`}>
// <a>Modifier</a>
// </Link>
// </div>
