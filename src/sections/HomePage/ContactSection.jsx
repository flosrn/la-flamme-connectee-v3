import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import constants style
import { title } from "static/jss/la-flamme-connectee";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import { Typography } from "@material-ui/core";
import axios from "axios";
import Swal from "sweetalert2";
import MediaSvg from "../../../components/Media/MediaSvg";


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
    textAlign: "center",
    marginBottom: theme.spacing(2)
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  textCount: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    color: "#999",
    fontStyle: "italic"
  },
  gridItemRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  svg: {
    width: "100%"
    // padding: theme.spacing(0, 2)
  }
}));

function ContactSection({ ...props }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    axios.post("/api/user/sendMail", { name, email, content }).then(response => {
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 5000
      });
      setLoading(false);
    });
  };

  return (
    <div className={classes.section} id="contact">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6} className={classes.gridItemRight}>
          <Typography variant="h3" className={classes.title}>
            Nous contacter
          </Typography>
          <h4 className={classes.description}>
            Une question ? Une demande spécifique ? Besoin de précisions ? Vous pouvez nous envoyer un message en
            remplissant ce formulaire, nous vous répondrons dans les plus brefs délais.
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre nom"
                  id="name"
                  changeHandler={e => setName(e.target.value)}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre adresse mail"
                  id="email"
                  changeHandler={e => setEmail(e.target.value)}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Votre message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  changeHandler={e => setContent(e.target.value)}
                  inputProps={{
                    multiline: true,
                    rows: 7
                  }}
                />
                {content.length < 80 && (
                  <span className={classes.textCount}>{80 - content.length}</span>
                )}
              </GridItem>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="secondary" type="submit" disabled={isLoading || content.length < 80}>
                    Envoyer
                  </Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default ContactSection;
