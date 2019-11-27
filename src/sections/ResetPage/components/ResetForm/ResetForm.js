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
import axioswal from "axioswal";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import getHost from "../../../../../server/api/get-host";

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

function ResetForm({ token, className, ...rest }) {
  const [values, setValues] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .patch(`${getHost()}/auth/resetPassword`, {
        password: values.password,
        passwordConfirm: values.passwordConfirm,
        token
      })
      .then(response => {
        Swal.fire({
          type: response.data.status,
          title: response.data.message,
          text: response.data.text,
          confirmButtonColor: "#ff7961"
        }).then(result => {
          if (response.data.status === "success" && result.value) {
            window.location.href = "/login";
          }
        });
      });
    setLoading(false);
  };

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
            )
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
        Sauvegarder
      </Button>
    </form>
  );
}

export default ResetForm;
