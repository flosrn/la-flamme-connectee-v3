import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import EmailIcon from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined";
import CustomSnackBar from "components/Snackbar/CustomSnackBar";
import Typography from "@material-ui/core/Typography";

import { UserContext } from "src/contexts/UserContext";
import axioswal from "axioswal";
import redirectTo from "lib/redirectTo";

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

function LoginForgotPasswordForm({ className, clickHandler, ...rest }) {
  const { dispatch } = useContext(UserContext);
  const [values, setValues] = useState({});
  const [isError, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError(false);
    setOpen(false);
    setLoading(true);
    // console.log(values);
    // forgotPassword(values)
    //   .then(res => {
    //     setError(false);
    //     setOpen(true);
    //     setLoading(false);
    //     setMsg("mail envoyeé");
    //     setTimeout(() => {
    //       window.location.href = "/";
    //       // Router.replace("/");
    //     }, 2500);
    //   })
    //   .catch(err => {
    //     const error = (err.response && err.response.data) || err.message;
    //     console.log(error);
    //     setMsg(error);
    //     setError(true);
    //     setOpen(true);
    //     setLoading(false);
    //   });
    axioswal.post("/api/forgotPassword", { email: values.email }).then(data => {
      if (data.status === "ok") {
        redirectTo("/");
      }
    });
  };

  const classes = useStyles();
  return (
    <form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
      <div className={classes.text}>Un mot de passe de réccupération vous sera envoyé par mail</div>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Adresse mail"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
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
      <CustomSnackBar handleClose={() => setOpen(!open)} duration={6000} message={msg} open={open} error={isError} />
    </form>
  );
}

LoginForgotPasswordForm.propTypes = {
  className: PropTypes.string
};

export default LoginForgotPasswordForm;
