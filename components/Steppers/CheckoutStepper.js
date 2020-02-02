import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { PayPalButton } from "react-paypal-button-v2";
import stripe from "public/img/logo/payments/stripe.png";
import axios from "axios";
import getApiUrl from "../../utils/getApiUrl";
import { getPaypalTransaction } from "../../api/apiRequests";
import scrollToTop from "../../utils/scrollToTop";

const useStyles = makeStyles(theme => ({
  root: {},
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  container: {
    padding: "5px 50px 10px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 15px 10px 15px"
    }
  },
  bottom: {
    padding: "20px 0 20px 20px"
  },
  paymentContainer: {
    [theme.breakpoints.up("sm")]: {
      width: 300
    },
    [theme.breakpoints.up("md")]: {
      width: 400
    }
  },
  stripe: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 300,
      display: "flex"
    }
  },
  buttonOrder: {
    width: "100%",
    height: 45
  }
}));

function getSteps() {
  return ["Méthode de livraison", "Adresse", "Récapitulatif"];
}

function getStepContent(stepIndex, components) {
  switch (stepIndex) {
    case 0:
      return components[0];
    case 1:
      return components[1];
    case 2:
      return components[2];
    default:
      return "Uknown stepIndex";
  }
}

export default function CheckoutStepper({
  components,
  submitHandler,
  storeHandler,
  paymentMethod,
  items,
  total,
  currentUser,
  isError,
  address,
  checked
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  const steps = getSteps();

  function handleNext() {
    if (activeStep === steps.length - 1) {
      submitHandler();
    } else {
      storeHandler();
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      scrollToTop();
    }
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    scrollToTop();
  }

  function handleReset() {
    setActiveStep(0);
    scrollToTop();
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider />
      <div className={classes.container}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Annuler</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep, components)}</div>
            <Divider />
            <div className={classes.bottom}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                Retour
              </Button>
              {activeStep === steps.length - 1 && paymentMethod === "stripe" ? (
                <div className={classes.paymentContainer}>
                  <div style={{ cursor: !checked && "not-allowed" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleNext}
                      className={classes.buttonOrder}
                      disabled={
                        isError ||
                        !checked ||
                        (activeStep !== 0 &&
                          address &&
                          (address.firstName === "" ||
                            address.lastName === "" ||
                            address.zip === "" ||
                            address.city === ""))
                      }
                    >
                      Confirmer et payer
                    </Button>
                  </div>
                  <img src={stripe} alt="stripe" className={classes.stripe} />
                </div>
              ) : activeStep === steps.length - 1 && paymentMethod === "paypal" ? (
                <div className={classes.paymentContainer} style={{ cursor: !checked && "not-allowed" }}>
                  <div style={{ pointerEvents: !checked && "none" }}>
                    <PayPalButton
                      shippingPreference="GET_FROM_FILE" // default is "GET_FROM_FILE"
                      createOrder={() => {
                        // This function sets up the details of the transaction, including the amount and line item details.
                        return fetch(`${getApiUrl()}/checkout/createPaypalTransaction`, {
                          method: "post",
                          headers: {
                            "content-type": "application/json"
                          },
                          body: JSON.stringify({
                            currentUser,
                            amount: {
                              currency_code: "EUR",
                              value: total
                            }
                          })
                        })
                          .then(res => {
                            return res.json();
                          })
                          .then(data => {
                            return data.orderID; // Use the same key name for order ID on the client and server
                          });
                      }}
                      onApprove={data => {
                        getPaypalTransaction({ data, items, currentUser });
                      }}
                    />
                  </div>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNext}
                  disabled={
                    isError ||
                    (activeStep !== 0 && !address) ||
                    (address && (!address.firstName || !address.lastName || !address.zip || !address.city))
                  }
                >
                  Suivant
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
