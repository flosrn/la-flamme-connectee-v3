import React, { useState, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined";
import CustomSnackBar from "../../../../components/Snackbar/CustomSnackBar";
import { UserContext } from "src/contexts/UserContext";
import axioswal from "axioswal";
import redirectTo from "lib/redirectTo";

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
    color: theme.palette.text.secondary,
    fontSize: "12px",
    textTransform: "none",
    "&:hover": {
      color: theme.palette.text.secondary,
      backgroundColor: "transparent"
    }
  }
}));

function LoginForm({ className, clickHandler, ...rest }) {
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [button, setButton] = useState(null);


  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    // setError(false);
    // setOpen(false);
    // setLoading(true);
    // try {
    //   const response = await login(values);
    //   if (response.status === "ok") {
    //     console.log(response);
    //     setError(false);
    //     setOpen(true);
    //     setLoading(false);
    //     setMsg("Connexion effectuée avec succès");
    //     dispatch({ type: 'fetch' });
    //     // await createSendToken(response.data.user);
    //   }
    // } catch (err) {
    //   const error = (err.response && err.response.data) || err.message;
    //   console.log(error);
    //   setMsg(error);
    //   setError(true);
    //   setOpen(true);
    //   setLoading(false);
    // }
    axioswal(
      {
        method: "post",
        url: "/api/authenticate",
        data: { email, password }
      },
      {}
    ).then(data => {
      if (data.status === "ok") {
        // Fetch the user data for UserContext here
        dispatch({ type: "fetch" });
        // redirectTo("/");
      }
    });
  }

  const classes = useStyles();
  return (
    <form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Adresse mail"
          name="email"
          onChange={e => setEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={isLoading}
        size="large"
        type="submit"
        variant="contained"
      >
        Connexion
      </Button>
      <div className={classes.forgot}>
        <Button size="small" className={classes.link} onClick={clickHandler}>
          Mot de passe oublié ?
        </Button>
      </div>
      <CustomSnackBar closeHandler={() => setOpen(!open)} duration={6000} message={msg} open={open} error={isError} />
    </form>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
