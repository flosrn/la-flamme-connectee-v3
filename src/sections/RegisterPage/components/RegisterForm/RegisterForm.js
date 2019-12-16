import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import validate from "validate.js";
import { makeStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Slide from "@material-ui/core/Slide";

import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/LockOutlined";
import { Face, RecordVoiceOver } from "@material-ui/icons";
import axios from "axios";
import Swal from "sweetalert2";
import redirectTo from "utils/redirectTo";
import Cookies from "js-cookie";
import getApiUrl from "utils/getApiUrl";
import ButtonCustom from "components/CustomButtons/ButtonCustom";
import { schema } from "./RegisterFormSchema";

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
  const [values, setValues] = useState({});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const classes = useStyles();
  const Router = useRouter();

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
    setLoading(true);
    axios
      .post(`${getApiUrl()}/auth/register`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm
      })
      .then(response => {
        console.log("response : ", response);
        Swal.fire({
          type: response.data.status,
          title: response.data.message,
          confirmButtonColor: "#ff7961"
        }).then(result => {
          if (response.data.status === "success" && result.value) {
            const cart = Cookies.getJSON("cart");
            if (cart.length > 0) {
              Router.push("/shopping-cart").then(() => window.scrollTo(0, 0));
            } else {
              Router.push("/").then(() => window.scrollTo(0, 0));
            }
          }
        });
        if (response.data.status === "success") {
          Cookies.set("token", response.data.data.token, {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)
          });
        }
        setLoading(false);
      });
  }

  const hasError = field => !!(touched[field] && errors[field]);

  return (
    <>
      <form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
        <div className={classes.fields}>
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
          {isClicked && (
            <>
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
            </>
          )}
        </div>
        {isClicked && (
          <ButtonCustom
            className={classes.submitButton}
            color="secondary"
            disabled={isLoading}
            size="large"
            type="submit"
            variant="contained"
            animateButton
          >
            Créer un compte
          </ButtonCustom>
        )}
      </form>
      {!isClicked && (
        <ButtonCustom
          className={classes.submitButton}
          color="secondary"
          disabled={isLoading}
          size="large"
          variant="contained"
          type="button"
          onClick={() => setIsClicked(true)}
          animateButton
        >
          Créer un compte
        </ButtonCustom>
      )}
    </>
  );
}

export default RegisterForm;
