import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import constants style
import { title } from "static/jss/la-flamme-connectee.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import { Typography } from "@material-ui/core";


function ContactSection({ ...props }) {
  const classes = useStyles();
  return (
    <div className={classes.section} id="contact">
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Typography variant="h3" className={classes.title}>Nous contacter</Typography>
          <h4 className={classes.description}>
            Une question ? Une demande spécifique ? Besoin de précisions ?  
            Vous pouvez nous envoyer un message en remplissant ce formulaire, nous vous répondrons dans les plus brefs délais.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre nom"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre adresse mail"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Votre message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem
                  xs={12}
                  sm={12}
                  md={4}
                  className={classes.textCenter}
                >
                  <Button color="primary">Envoyer</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

// styles for this page
const useStyles = makeStyles(theme => ({
  section: {
    // padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
}));

ContactSection.propTypes = {
  classes: PropTypes.object
};

export default ContactSection;
