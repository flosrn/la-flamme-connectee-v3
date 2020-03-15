/* eslint no-template-curly-in-string:0 */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CardActions, CardContent, CardHeader, Grid, Divider, TextField, Button, useTheme } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import axios from "axios";
import Link from "next/link";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { CheckoutContext } from "src/contexts/CheckoutContext";
import ButtonLink from "../../../../components/CustomButtons/ButtonLink";
import getApiUrl from "../../../../utils/getApiUrl";
import ButtonCustom from "../../../../components/CustomButtons/ButtonCustom";
import manageLocalStorage from "../../../../utils/manageLocalStorage";
import AddressSummary from "../AddressSummary";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    "& .MuiExpansionPanel-root.Mui-expanded": {
      margin: 0
    },
    "& .MuiFormGroup-root, .MuiFormControlLabel-root, ": {
      width: "100%"
    }
  },
  cardSubTitle: {
    padding: 5,
    marginBottom: 10
  },
  cost: {
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
  },
  cardFooter: {
    margin: "25px 0 5px 0",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row-reverse"
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30
      }
    }
  }
}));

export default function Shipping({ id, nextStep }) {
  const [deliveryMtd, setDeliveryMtd] = useState("colissimo");
  const { address, deliveryMethod, storeDeliveryMethod } = useContext(CheckoutContext);
  const { total, addShippingFees } = useContext(ShoppingCartContext);
  const Router = useRouter();
  const classes = useStyles();

  // useEffect(() => {
  //   addShippingFees("colissimo", total > 49 ? 0 : 4.9);
  // }, []);

  useEffect(() => {
    if (!address) {
      Router.push("/checkout/[id]", `/checkout/${id}?step=contact_informations`);
    }
  }, [address]);

  useEffect(() => {
    if (deliveryMtd === "colissimo") {
      storeDeliveryMethod({
        label: "Colissimo 72h",
        cost: "5 €"
      });
    }
    if (deliveryMtd === "relay") {
      storeDeliveryMethod({
        label: "Point relais",
        cost: "gratuit"
      });
    }
    addShippingFees(deliveryMtd, 5);
  }, [deliveryMtd]);

  const handleNext = () => {
    nextStep("payment_method");
  };

  const GreyRadio = withStyles({
    root: {
      color: "#818992"
    }
  })(props => <Radio color="secondary" {...props} />);

  return (
    <div className={classes.root}>
      <GridContainer justify="center">
        <GridItem md={12}>
          {address && <AddressSummary id={id} address={address} />}
          <div className={classes.cardSubTitle}>
            <Typography variant="h4">Mode d'expédition</Typography>
          </div>
          <ExpansionPanel expanded={false}>
            <ExpansionPanelSummary
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              <FormControlLabel
                aria-label="deliveryMethod"
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
                control={
                  <RadioGroup
                    aria-label="deliveryMethod-colissimo"
                    name="colissimo"
                    value={deliveryMtd}
                    onChange={e => setDeliveryMtd(e.target.value)}
                  >
                    <FormControlLabel value="colissimo" control={<GreyRadio />} label="Colissimo 72h" />
                  </RadioGroup>
                }
              />
              <div className={classes.cost}>4,90 €</div>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel expanded={deliveryMtd === "relay"}>
            <ExpansionPanelSummary
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              <FormControlLabel
                aria-label="deliveryMethod"
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
                control={
                  <RadioGroup
                    aria-label="deliveryMethod-relay"
                    name="relay"
                    value={deliveryMtd}
                    onChange={e => setDeliveryMtd(e.target.value)}
                  >
                    <FormControlLabel value="relay" control={<GreyRadio />} label="Livraison en point relais" />
                  </RadioGroup>
                }
              />
              <div className={classes.cost}>Gratuit</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Bientôt disponible</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.cardFooter}>
        <GridItem sm={6} center>
          <ButtonCustom color="secondary" size="large" animateButton onClick={handleNext}>
            Passer au paeiment
          </ButtonCustom>
        </GridItem>
        <GridItem sm={6} center>
          <Link href="/checkout/[id]" as={`/checkout/${id}?step=contact_informations`}>
            <a>{"< Retour à l'adresse de livraison"}</a>
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
}
