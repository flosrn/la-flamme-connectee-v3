import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader, CardContent, CardActions, Grid, Divider, TextField, colors } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Swal from "sweetalert2";
import GridItem from "../../../../components/Grid/GridItem";
import GridContainer from "../../../../components/Grid/GridContainer";
// import { updateMyPassword } from "../../../server/lib/api";
import CustomSnackBar from "../../../../components/Snackbar/CustomSnackBar";
import getHost from "../../../../server/api/get-host";

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900]
    }
  },
  cardActions: {
    display: "flex",
    justifyContent: "center"
  },
  footer: {
    marginBottom: theme.spacing(-2),
    display: "flex",
    justifyContent: "space-around"
  },
  wrapper: {
    position: "relative"
  },
  buttonProgress: {
    color: theme.palette.success.main,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

function Security({ userId }) {
  const [values, setValues] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: ""
  });
  const [isEditMode, setEditMode] = useState(false);
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (values.password.length >= 6 && values.passwordConfirm.length >= 6) {
      const valid = values.password === values.passwordConfirm;
      setValid(valid);
    }
  }, [values]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    axios.patch(`${getHost()}/auth/updatePassword`, { userId, values }).then(response => {
      console.log("response : ", response);
      setTimeout(() => {
        Swal.fire({
          type: response.data.status,
          title: response.data.message,
          confirmButtonColor: "#ff7961",
          position: "bottom"
        });
        setEditMode(false);
        setLoading(false);
        if (response.data.status === "success") {
          setValues({
            ...values,
            passwordCurrent: "",
            password: "",
            passwordConfirm: ""
          });
        }
      }, 1500);
    });
  };

  const handleCancel = () => {
    setEditMode(false);
    setLoading(false);
    setValues({
      ...values,
      passwordCurrent: "",
      password: "",
      passwordConfirm: ""
    });
  };

  return (
    <GridContainer justify="center">
      <GridItem className={classes.root}>
        <form onSubmit={handleSubmit}>
          <CardHeader title="Changer de mot de passe" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Ancien mot de passe"
                  name="passwordCurrent"
                  onChange={handleChange}
                  type="password"
                  value={values.passwordCurrent || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Nouveau mot de passe"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={values.password || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                />
                <Box mt={3} />
                <TextField
                  fullWidth
                  label="Confirmation"
                  name="passwordConfirm"
                  onChange={handleChange}
                  type="password"
                  value={values.passwordConfirm || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions className={classes.cardActions}>
            <GridItem xs={6} className={classes.footer}>
              {!isEditMode ? (
                <Button color="primary" onClick={() => setEditMode(!isEditMode)}>
                  Modifier
                </Button>
              ) : (
                <>
                  <Button color="primary" onClick={handleCancel}>
                    Annuler
                  </Button>
                  <div className={classes.wrapper} style={{ cursor: !isValid && "not-allowed" }}>
                    <Button type="submit" color="secondary" disabled={!isValid || isLoading}>
                      Sauvegarder
                    </Button>
                    {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </div>
                </>
              )}
            </GridItem>
          </CardActions>
        </form>
      </GridItem>
    </GridContainer>
  );
}

Security.propTypes = {
  className: PropTypes.string
};

export default Security;
