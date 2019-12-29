import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Lock from "@material-ui/icons/LockOutlined";
import { resetPassword } from "api/apiRequests";

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
    resetPassword({ password: values.password, passwordConfirm: values.passwordConfirm, token, setLoading });
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
