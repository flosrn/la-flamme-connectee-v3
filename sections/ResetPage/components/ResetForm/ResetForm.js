import React, { useState, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined";
import CustomSnackBar from "components/Snackbar/CustomSnackBar";
import { UserContext } from "src/contexts/UserContext";
import axioswal from "axioswal";

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  link: {
    color: theme.palette.text.secondary,
    fontSize: "12px",
    textTransform: "none",
    "&:hover": {
      color: theme.palette.text.secondary,
      backgroundColor: "transparent",
    },
  },
}));

function ResetForm({ token, className, ...rest }) {
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
    // setError(false);
    // setOpen(false);
    // setLoading(true);
    // resetPassword(token, values)
    //   .then(res => {
    //     setError(false);
    //     setOpen(true);
    //     setLoading(false);
    //     setMsg("ok");
    //     setTimeout(() => {
    //       window.location.href = "/login";
    //       // Router.replace("/");
    //     }, 2500);
    //   })
    //   .catch(err => {
    //     const error = (err.response && err.response.data) || err.message;
    //     setMsg(error);
    //     setError(true);
    //     setOpen(true);
    //     setLoading(false);
    //   });
    axioswal.patch("/api/auth/resetPassword", { password: values.password, token }).then(response => {
      if (response.status === "ok") {
        // redirectTo("/");
      }
    });
  };

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  const classes = useStyles();
  return (
    <form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Nouveau mot de passe"
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
            ),
          }}
        />
        <TextField
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
            ),
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
        Sauvegarder
      </Button>
      <CustomSnackBar handleClose={handleClose} duration={6000} message={msg} open={open} error={isError} />
    </form>
  );
}

export default ResetForm;
