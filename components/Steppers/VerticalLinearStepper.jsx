import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// import { ThemeProvider } from '@material-ui/styles';
// @material-ui/core components
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



function getSteps() {
  return [ 'Je connecte la box Flamme Connect au wifi', 'Je prépare mon foyer bois', 'Avec mon smartphone je choisi l\'heure d\'allumage'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Lors de la première mise en service, appairez votre Flamme Connect à votre box internet wifi. Comment faire ?`;
    case 1:
      return `Avant de quitter votre habitation préparez votre foyer bois en y ajoutant le VolcanOh Connect. 
      Pour une meilleure efficacité, utilisez la technique de l\'allumage inversé.`;
    case 2:
      return `Grâce à l'application smartphone Ewelink et une connexion internet vous connaissez la température de  votre habitation et vous pouvez allumer instantanément ou programmer votre poêle.`;
    default:
      return 'Unknown step';
  }
}

function VerticalLinearStepper() {
  const classes = useStyles();
  // let theme = createMuiTheme();
  // theme = responsiveFontSizes(theme);

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      {/* <ThemeProvider theme={theme}> */}
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel className={classes.label}>
                <Typography variant="subtitle2">{label}</Typography>
              </StepLabel>
              <StepContent className={classes.stepContent}>
                <Typography variant="body2" align="justify">{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Retour
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Terminé' : 'Suivant'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Votre poêle s'allume à l'heure souhaitée, vous avez terminé !</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Recommencer
            </Button>
          </Paper>
        )}
      {/* </ThemeProvider> */}
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepContent: {
    paddingLeft: "80px",
    paddingRight: "60px"
  }
}));


// Steppers.propTypes = {
//   classes: PropTypes.object.isRequired,
//   icon: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   iconColor: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   vertical: PropTypes.bool
// };

export default VerticalLinearStepper;
