import React, { useState, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined";
import ButtonCustom from "../../../../../components/CustomButtons/ButtonCustom";

const useStyles = makeStyles(theme => ({
  root: {},
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
    color: theme.palette.title.primary,
    fontSize: "16px",
    textTransform: "none",
    "&:hover": {
      color: theme.palette.success.main,
      backgroundColor: "transparent"
    }
  }
}));

function LoginForm({ className, email, password, changeHandler, submitHandler, isLoading, clickHandler, ...rest }) {
  const classes = useStyles();
  return (
    <form {...rest} className={clsx(classes.root, className)} onSubmit={submitHandler("login")}>
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
                <Email className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
        <TextField
          fullWidth
          label="Mot de passe"
          name="password"
          onChange={changeHandler("password")}
          type="password"
          value={password || ""}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Lock className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
      </div>
      <ButtonCustom
        className={classes.submitButton}
        color="secondary"
        disabled={isLoading}
        size="large"
        type="submit"
        variant="contained"
        animateButton
      >
        Connexion
      </ButtonCustom>
      <div className={classes.forgot}>
        <Button size="small" className={classes.link} onClick={clickHandler}>
          Mot de passe oublié ?
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
