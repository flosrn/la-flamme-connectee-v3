import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles(theme => ({
  root: {},
  text: {
    marginBottom: theme.spacing(2)
  },
  fields: {
    margin: theme.spacing(-1),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%"
  },
  forgot: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(-2)
  },
  link: {
    color: theme.palette.text.secondary,
    fontSize: "12px",
    textTransform: "none",
    "&:hover": {
      color: theme.palette.text.secondary,
      backgroundColor: "transparent"
    }
  }
}));

function LoginForgotPasswordForm({ className, email, changeHandler, submitHandler, isLoading, clickHandler, ...rest }) {
  const classes = useStyles();
  return (
    <form {...rest} className={clsx(classes.root, className)} onSubmit={submitHandler("forgotPassword")}>
      <div className={classes.text}>Un mail vous permettant de changer de mot de passe sera envoyé</div>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Adresse mail"
          name="email"
          onChange={changeHandler("email")}
          value={email || ""}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={isLoading}
        size="large"
        type="submit"
        variant="contained"
      >
        ENVOYER
      </Button>
      <div className={classes.forgot}>
        <Button size="small" className={classes.link} onClick={clickHandler}>
          Retour
        </Button>
      </div>
    </form>
  );
}

export default LoginForgotPasswordForm;
