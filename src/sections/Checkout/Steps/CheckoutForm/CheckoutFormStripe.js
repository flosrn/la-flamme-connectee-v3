import React, { useState, useEffect, useContext } from "react";
import { CardNumberElement, useStripe, useElements } from "@stripe/react-stripe-js";
import ControlledExpensionPanels from "components/ExpansionPanels/ControlledExpansionPanels";
import { Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "next/link";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Swal from "sweetalert2";
import redirectTo from "utils/redirectTo";
import CardSection from "./CardSection";
import PaypalSection from "./PaypalSection";
import GridItem from "../../../../../components/Grid/GridItem";
import GridContainer from "../../../../../components/Grid/GridContainer";
import ButtonCustom from "../../../../../components/CustomButtons/ButtonCustom";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCartContext";

const useStyles = makeStyles(theme => ({
  root: {},
  cardFooter: {
    margin: "25px 0 5px 0"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function CheckoutForm({ id, clientSecret, address }) {
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { emptyCart } = useContext(ShoppingCartContext);
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles();
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleChange = event => {
    setCardComplete(event.complete);
    processing && setError(event.error);
  };

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const billingAddress = {
      address: {
        line1: address && address.address_1,
        line2: address && address.address_2,
        city: address && address.city,
        country: "FR",
        postal_code: address && address.zip
      },
      name: address && `${address.firstName} ${address.lastName}`,
      phone: address && address.phone
    };

    setSuccess(false);
    !loading && setLoading(true);
    cardComplete && setProcessing(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: billingAddress
      }
    });

    timer.current = setTimeout(() => {
      setProcessing(false);
      setLoading(false);

      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log("result.error.message: ", result.error.message);
        setError(result.error);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === "succeeded") {
          setError(false);
          setSuccess(true);
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          console.log(result);
          Swal.fire({
            type: "success",
            title: "Paiement effectué avec succès !",
            text: "Merci pour votre achat",
            confirmButtonColor: "#ff7961"
          });
          redirectTo("/");
          emptyCart();
        }
      }
    }, 2000);
  };

  const panel1 = <CardSection changeHandler={handleChange} error={error} />;
  const panel2 = <PaypalSection />;

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert severity="error">{error.message}</Alert>}

      <ControlledExpensionPanels panel1={panel1} panel2={panel2} />

      <GridContainer className={classes.cardFooter}>
        <GridItem sm={6} center>
          <Link href="/checkout/[id]" as={`/checkout/${id}?step=shipping_method`}>
            <a>{"< Retour à l'expédition"}</a>
          </Link>
        </GridItem>
        <GridItem sm={6} center>
          <ButtonCustom
            color="secondary"
            size="large"
            animateButton
            type="submit"
            disabled={processing}
            loading={loading}
          >
            {processing ? "Vérification en cours" : "Passer au paiement"}
          </ButtonCustom>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </GridItem>
      </GridContainer>
    </form>
  );
}
