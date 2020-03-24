import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& .MuiExpansionPanelSummary-root": {
      height: 70,
      [theme.breakpoints.up("sm")]: {
        padding: "0 90px"
      }
    },
    "& .MuiExpansionPanelSummary-root, .MuiCollapse-container": {
      background: "#fafafa",
      padding: "0 10px 0 24px"
    },
    "& .MuiExpansionPanelDetails-root": {
      paddingBottom: 5
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    alignItems: "center",
    marginLeft: 10
  },
  total: {
    position: "absolute",
    fontWeight: "bold"
  },
  gridContainer: {
    width: "100%"
  },
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    ".MuiSvgIcon-root": {
      marginLeft: -20
    }
  },
  gridItemRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 0
  }
}));

export default function SimpleExpansionPanel({ total, deliveryMethod, step, children }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header">
          <GridContainer justify="center" className={classes.gridContainer}>
            <GridItem xs={9} className={classes.gridItem}>
              <ShoppingCartIcon />
              {expanded ? (
                <Typography className={classes.heading}>
                  Fermer le sommaire de la commande <ExpandLessIcon />
                </Typography>
              ) : (
                <Typography className={classes.heading}>
                  Afficher le sommaire de la commande <ExpandMoreIcon />
                </Typography>
              )}
            </GridItem>
            {!expanded ? (
              <GridItem xs={3} className={classes.gridItemRight}>
                {step === "contact_informations" ? (
                  <>
                    {deliveryMethod && deliveryMethod.cost ? (
                      <div className={classes.total}>{`${Number.parseFloat(total - deliveryMethod.cost).toFixed(
                        2
                      )} €`}</div>
                    ) : (
                      <div className={classes.total}>{total.toFixed(2)} €</div>
                    )}
                  </>
                ) : (
                  <div className={classes.total}>{total.toFixed(2)} €</div>
                )}
              </GridItem>
            ) : (
              <GridItem xs={3} />
            )}
          </GridContainer>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
