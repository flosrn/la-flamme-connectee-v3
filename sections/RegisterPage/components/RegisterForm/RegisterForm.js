import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import validate from "validate.js";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import Slide from "@material-ui/core/Slide";
import CustomSnackBar from "components/Snackbar/CustomSnackBar";

import { schema } from "./RegisterFormSchema.js";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined";
import { Face, RecordVoiceOver } from "@material-ui/icons";
// import { createSendToken } from "../../../../server/utils/auth";
import axioswal from "axioswal";
import redirectTo from "lib/redirectTo";
import { UserContext } from "src/contexts/UserContext";

const useStyles = makeStyles(theme => ({
  root: {
    // "& label.Mui-focused": {
    //   color: theme.palette.primary.main
    // },
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: theme.palette.secondary.main
    //   },
    //   "&:hover fieldset": {
    //     borderColor: "yellow"
    //   },
    //   "&.Mui-focused fieldset": {
    //     borderColor: "green"
    //   }
    // }
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
  }
}));

function RegisterForm({ className, ...rest }) {
  const { dispatch } = useContext(UserContext);
  const [values, setValues] = useState({});
  const [msg, setMsg] = useState("");
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const errors = validate(values, schema);
    setErrors(errors || {});
  }, [values]);

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setTouched({ ...touched, [event.target.name]: true });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    // setOpen(false);
    // setError(false);
    // setLoading(true);
    // try {
    //   const response = await register(values);
    //   if (response.status === "success") {
    //     setOpen(true);
    //     setLoading(false);
    //     setMsg("Votre compte a été créé avec succès !");
    //     // await createSendToken(response.data.newUser);
    //     setTimeout(() => {
    //       // window.location.href = "/";
    //       // Router.replace("/");
    //     }, 2500);
    //   }
    // } catch (err) {
    //   const error = (err.response && err.response.data) || err.message;
    //   setMsg(error);
    //   setOpen(true);
    //   setError(true);
    //   setLoading(false);
    // }
    axioswal
      .post("/api/users", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      })
      .then(data => {
        if (data.status === "ok") {
          dispatch({ type: "fetch" });
          redirectTo("/");
        }
      });
  }

  const hasError = field => !!(touched[field] && errors[field]);

  return (
    <form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <TextField
          error={hasError("firstName")}
          helperText={hasError("firstName") ? errors.firstName[0] : null}
          label="Prénom"
          name="firstName"
          onChange={handleChange}
          value={values.firstName || ""}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Face className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={hasError("lastName")}
          helperText={hasError("lastName") ? errors.lastName[0] : null}
          label="Nom"
          name="lastName"
          onChange={handleChange}
          value={values.lastName || ""}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RecordVoiceOver className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={hasError("email")}
          helperText={hasError("email") ? errors.email[0] : null}
          fullWidth
          label="Adresse mail"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
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
          error={hasError("password")}
          helperText={hasError("password") ? errors.password[0] : null}
          fullWidth
          label="Mot de passe"
          name="password"
          onChange={handleChange}
          type="password"
          value={values.password || ""}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Lock className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
        <TextField
          error={hasError("passwordConfirm")}
          helperText={hasError("passwordConfirm") ? errors.passwordConfirm[0] : null}
          fullWidth
          label="Confirmation de mot de passe"
          name="passwordConfirm"
          onChange={handleChange}
          type="password"
          value={values.passwordConfirm || ""}
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
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={isLoading}
        size="large"
        type="submit"
        variant="contained"
      >
        Créer un compte
      </Button>
      <CustomSnackBar closeHandler={() => setOpen(false)} duration={6000} message={msg} open={open} error={isError} />
    </form>
  );
}

RegisterForm.propTypes = {
  className: PropTypes.string
};

export default RegisterForm;
