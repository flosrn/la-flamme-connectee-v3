import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import AddressDetails from "./components/AddressDetails";
import AddressForm from "./components/AddressForm";
import { ProfileForm } from "../Profile/components";

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginRight: 0,
    marginTop: 0
  },
  overview: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "flex-start"
    }
  },
  product: {
    display: "flex",
    alignItems: "center"
  },
  productImage: {
    marginRight: theme.spacing(1),
    height: 48,
    width: 48
  },
  details: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start"
    }
  },
  notice: {
    marginTop: theme.spacing(2)
  }
}));

function Address({
  profile,
  values,
  changeAddressHandler,
  removeAddressHandler,
  submitHandler,
  editHandler,
  cancelHandler,
  isEditMode,
  isLoading,
  hasError,
  errors
}) {
  const classes = useStyles();
  return (
    <>
      {/* <AddressDetails profile={profile} /> */}
      <AddressForm
        values={values}
        changeHandler={changeAddressHandler}
        submitHandler={submitHandler}
        removeHandler={removeAddressHandler}
        editHandler={editHandler}
        isEditMode={isEditMode}
        cancelHandler={cancelHandler}
        isLoading={isLoading}
        hasError={hasError}
        errors={errors}
      />
    </>
  );
}

Address.propTypes = {
  className: PropTypes.string
};

export default Address;
