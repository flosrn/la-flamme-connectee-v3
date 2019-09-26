import React, { useState, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined";
import { UserContext } from "src/contexts/UserContext";
import axios from "axios";
import Swal from "sweetalert2";
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
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    axios.post("/api/auth/authenticate", { email, password }).then(response => {
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        confirmButtonColor: "#ff7961"
      }).then(result => {
        if (response.data.status === "success" && result.value) {
          redirectTo("/");
        }
      });
      dispatch({ type: "fetch" });
      setLoading(false);
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
    </form>
  );
}

export default LoginForm;
