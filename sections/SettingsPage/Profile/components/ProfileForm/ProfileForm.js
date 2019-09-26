import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { CardActions, CardContent, CardHeader, Grid, Divider, TextField, colors } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";

import SuccessSnackbar from "../SuccessSnackbar";
import Card from "components/Card/Card";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Box from "@material-ui/core/Box";

import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/fr";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import CircularProgress from "@material-ui/core/CircularProgress";
import Router from "next/router";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900]
    }
  },
  datePicker: {
    margin: 0,
    display: "flex"
  },
  cardActions: {
    display: "flex",
    justifyContent: "center"
  },
  dateOfBirth: {
    display: "flex",
    "& > div": {
      margin: "0 5px"
    }
  },
  menu: {
    width: "200px"
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

const month = [
  {
    value: "1",
    label: "Janvier"
  },
  {
    value: "2",
    label: "Février"
  },
  {
    value: "3",
    label: "Mars"
  },
  {
    value: "4",
    label: "Avril"
  },
  {
    value: "5",
    label: "Mai"
  },
  {
    value: "6",
    label: "Juin"
  },
  {
    value: "7",
    label: "Juillet"
  },
  {
    value: "8",
    label: "Aout"
  },
  {
    value: "9",
    label: "Septembre"
  },
  {
    value: "10",
    label: "Octobre"
  },
  {
    value: "11",
    label: "Novembre"
  },
  {
    value: "12",
    label: "Décembre"
  }
];

function ProfileForm({
  values,
  changeHandler,
  changeDateHandler,
  submitHandler,
  editHandler,
  isEditMode,
  cancelHandler,
  isLoading
}) {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem className={classes.root}>
        <form onSubmit={submitHandler}>
          <CardHeader title="Vos informations :" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Prénom"
                  name="firstName"
                  onChange={changeHandler}
                  value={values.firstName || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Nom"
                  name="lastName"
                  onChange={changeHandler}
                  value={values.lastName || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Adresse Email"
                  name="email"
                  onChange={changeHandler}
                  value={values.emailToClient || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                />
              </Grid>
              <Grid item md={6} xs={12} className={classes.dateOfBirth}>
                {/*<MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>*/}
                {/*  <KeyboardDatePicker*/}
                {/*    margin="normal"*/}
                {/*    id="date-picker-dialog"*/}
                {/*    label="Date de naissance"*/}
                {/*    format="dd/MM/yyyy"*/}
                {/*    value={values.dateOfBirth}*/}
                {/*    onChange={changeDateHandler}*/}
                {/*    disabled={!isEditMode || isLoading}*/}
                {/*    inputVariant="outlined"*/}
                {/*    className={classes.datePicker}*/}
                {/*    KeyboardButtonProps={{*/}
                {/*      "aria-label": "change date"*/}
                {/*    }}*/}
                {/*  />*/}
                {/*</MuiPickersUtilsProvider>*/}
                <TextField
                  label="Jour"
                  type="number"
                  name="day"
                  onChange={changeDateHandler}
                  value={(values.dateOfBirth && values.dateOfBirth.day) || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                  style={{ flexBasis: "20%" }}
                  inputProps={{
                    maxLength: 2
                  }}
                />
                <TextField
                  select
                  label="Mois"
                  type="number"
                  value={(values.dateOfBirth && values.dateOfBirth.month) || ""}
                  onChange={changeDateHandler}
                  variant="outlined"
                  className={classes.menu}
                  disabled={!isEditMode || isLoading}
                  style={{ flexBasis: "50%" }}
                >
                  {month.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Année"
                  type="number"
                  name="year"
                  onChange={changeDateHandler}
                  value={(values.dateOfBirth && values.dateOfBirth.year) || ""}
                  variant="outlined"
                  disabled={!isEditMode || isLoading}
                  style={{ flexBasis: "30%" }}
                  inputProps={{
                    maxLength: 4
                  }}
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
                  <div className={classes.wrapper}>
                    <Button type="submit" color="primary" disabled={isLoading}>
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

ProfileForm.propTypes = {
  className: PropTypes.string
  // profile: PropTypes.object.isRequired
};

export default ProfileForm;
