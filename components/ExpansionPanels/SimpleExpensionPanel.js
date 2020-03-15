import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& .MuiExpansionPanelSummary-root": {
      height: 70
    },
    "& .MuiExpansionPanelSummary-root, .MuiCollapse-container": {
      background: "#fafafa"
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
  }
}));

export default function SimpleExpansionPanel({ children }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <ShoppingCartIcon />
          {expanded ? (
            <Typography className={classes.heading}>Fermer le sommaire de la commande</Typography>
          ) : (
            <Typography className={classes.heading}>Afficher le sommaire de la commande</Typography>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
