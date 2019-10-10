import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { CardActions, CardContent, CardHeader, Grid, Divider, TextField } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";

import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {},
  datePicker: {
    margin: 0,
    display: "flex"
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

function AdressForm({
  values,
  changeHandler,
  submitHandler,
  editHandler,
  isEditMode,
  cancelHandler,
  isLoading,
  hasError,
  errors
}) {
  const [isError, setError] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (hasError("street") || hasError("zip") || hasError("city")) {
      setError(true);
    } else {
      setError(false);
    }
  }, [errors]);

  return (
    <GridContainer justify="center">
      <GridItem className={classes.root}>
        <form onSubmit={submitHandler}>
          <CardHeader title="Votre adresse postale :" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  error={hasError("street")}
                  helperText={hasError("street") ? errors.street[0] : null}
                  fullWidth
                  label="Numéro de rue et rue"
                  name="street"
                  onChange={changeHandler}
                  value={(values.address && values.address.street) || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={hasError("zip")}
                  helperText={hasError("zip") ? errors.zip[0] : null}
                  fullWidth
                  type="number"
                  label="Code postal"
                  name="zip"
                  onChange={changeHandler}
                  value={(values.address && values.address.zip) || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                  inputProps={{
                    maxLength: 5
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={hasError("city")}
                  helperText={hasError("city") ? errors.city[0] : null}
                  fullWidth
                  label="Ville"
                  name="city"
                  onChange={changeHandler}
                  value={(values.address && values.address.city) || ""}
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
                <Button color="primary" onClick={editHandler}>
                  Modifier
                </Button>
              ) : (
                <>
                  <Button color="primary" onClick={cancelHandler}>
                    Annuler
                  </Button>
                  <div className={classes.wrapper} style={{ cursor: isError && "not-allowed" }}>
                    <Button type="submit" color="secondary" disabled={isError || isLoading}>
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

AdressForm.propTypes = {
  className: PropTypes.string
};

export default AdressForm;
