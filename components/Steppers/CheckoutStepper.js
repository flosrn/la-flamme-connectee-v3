import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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

export default function CheckoutStepper({ components, submitHandler, storeHandler, isError, address }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  const steps = getSteps();

  function handleNext() {
    if (activeStep === steps.length - 1) {
      submitHandler();
    } else {
      storeHandler();
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
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
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                disabled={
                  isError ||
                  (activeStep !== 0 &&
                    address &&
                    (address.firstName === "" || address.lastName === "" || address.zip === "" || address.city === ""))
                }
              >
                {activeStep === steps.length - 1 ? "Confirmer et payer" : "Suivant"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
