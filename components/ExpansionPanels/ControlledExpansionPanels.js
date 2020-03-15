import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import cartLogo from "public/img/logo/payments/logo-checkout.png"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiExpansionPanel-root.Mui-expanded": {
      margin: 0
    },
    "& .MuiFormGroup-root, .MuiFormControlLabel-root, ": {
      width: "100%"
    },
    width: "100%",
    "& .MuiExpansionPanelDetails-root": {
      backgroundColor: "#fafafa",
      padding: 0
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  cartLogos: {
  width: 120
  }
}));

export default function ControlledExpansionPanels({ panel1, panel2 }) {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const classes = useStyles();

  const GreyRadio = withStyles({
    root: {
      color: "#818992"
    },
    checked: {}
  })(props => <Radio color="secondary" {...props} />);

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={paymentMethod === "stripe"}>
        <ExpansionPanelSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <FormControlLabel
            aria-label="paymentMethod"
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={
              <RadioGroup
                aria-label="paymentMethod-stripe"
                name="stripe"
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel value="stripe" control={<GreyRadio />} label="Carte de crédit" />
              </RadioGroup>
            }
          />
          <div><img src={cartLogo} alt="visa-mastercard" className={classes.cartLogos} /></div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{panel1}</ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={paymentMethod === "paypal"}>
        <ExpansionPanelSummary aria-controls="panel2bh-content" id="panel2bh-header">
          <FormControlLabel
            aria-label="paymentMethod"
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={
              <RadioGroup
                aria-label="paymentMethod-paypal"
                name="paypal"
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel value="paypal" control={<GreyRadio />} label="Paypal" />
              </RadioGroup>
            }
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {panel2}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
