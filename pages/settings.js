import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/styles";
import { Tabs, Tab, Divider, colors } from "@material-ui/core";

import Headers from "components/Header/Header";
import { Header, Profile, Address, Security, Options } from "sections/SettingsPage";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import CustomSnackBar from "components/Snackbar/CustomSnackBar";
import validate from "validate.js";
import { schema } from "sections/SettingsPage/Address/components/AddressForm/AddressFormSchema";
import { UserContext } from "src/contexts/UserContext";
import axioswal from "axioswal";
import axios from "axios";
import Swal from "sweetalert2";
import HeaderLinks from "components/Header/HeaderLinks";

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    marginTop: theme.spacing(7)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

function Settings() {
  const {
    state: { user },
    dispatch
  } = useContext(UserContext);
  const [values, setValues] = useState({});
  const [isEditMode, setEditMode] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [tabTitle, setTabTitle] = useState("");
  const classes = useStyles();

  // ========== DATA FETCHING ========== //

  useEffect(() => {
    setValues(user);
  }, [user]);

  // ========== CHANGE HANDLERS ========== //

  const handleProfileChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAddressChange = event => {
    setValues({
      ...values,
      address: {
        ...values.address,
        [event.target.name]: event.target.value
      }
    });
    setTouched({
      ...touched,
      [event.target.name]: true
    });
  };

  const handleDateChange = event => {
    if (event.target.name) {
      setValues({
        ...values,
        dateOfBirth: {
          ...values.dateOfBirth,
          [event.target.name]: event.target.value
        }
      });
    } else {
      setValues({
        ...values,
        dateOfBirth: {
          ...values.dateOfBirth,
          month: event.target.value
        }
      });
    }
  };

  // ========== SUBMIT HANDLER ========== //

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    axios.patch("/api/user/updateProfileData", values).then(response => {
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000
      });
      dispatch({ type: "fetch" });
      setEditMode(false);
      setLoading(false);
    });
  };

  const handleCancel = () => {
    setEditMode(false);
    setValues(user);
  };

  // ========== FORM VALIDATION ========== //

  useEffect(() => {
    const errors = validate(values.address, schema);
    setErrors(errors || {});
  }, [values]);

  const hasError = field => !!(touched[field] && errors[field]);

  // ========== TABS ========== //

  const tabs = [
    { value: "profile", label: "Profil" },
    { value: "address", label: "Adresse" },
    { value: "security", label: "Sécurité" },
    { value: "options", label: "Options" }
  ];

  const Router = useRouter();
  const pathname = Router.asPath.split("=");
  const tab = pathname[1];

  function setTitle() {
    switch (tab) {
      case "profile":
        setTabTitle("Vérifiez ou modifiez les informations de votre compte");
        break;
      case "address":
        setTabTitle("Vérifiez ou renseignez votre adresse");
        break;
      case "security":
        setTabTitle("Modifiez le mot de passe de votre compte");
        break;
      case "options":
        setTabTitle("Gérez les options de votre compte");
        break;
      default:
        setTabTitle("Compte");
    }
  }

  const handleTabsChange = (event, value) => {
    Router.push({
      pathname: "/settings",
      query: { tab: value }
    });
    setTitle();
  };

  return (
    <div className={classes.root}>
      <Headers
        color="dark"
        brand="La Flamme Connectée"
        links={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 650,
          color: "white",
          navColor: "black"
        }}
      />
      <GridContainer className={classes.container} direction="column" justify="center" alignItems="center" spacing={0}>
        <GridItem xs={12} sm={10} lg={6}>
          <Card className={classes.card}>
            <Header title={tabTitle} />
            <Tabs className={classes.tabs} onChange={handleTabsChange} scrollButtons="auto" value={tab} centered>
              {tabs.map(tab => (
                <Tab key={tab.value} label={tab.label} value={tab.value} onClick={handleCancel} />
              ))}
            </Tabs>
            <Divider className={classes.divider} />
            <div className={classes.content}>
              {tab === "profile" && (
                <Profile
                  profile={user}
                  values={values}
                  changeProfileHandler={handleProfileChange}
                  changeDateHandler={handleDateChange}
                  submitHandler={handleSubmit}
                  editHandler={() => setEditMode(!isEditMode)}
                  cancelHandler={handleCancel}
                  isEditMode={isEditMode}
                  isLoading={isLoading}
                />
              )}
              {tab === "address" && (
                <Address
                  profile={user}
                  values={values}
                  changeAddressHandler={handleAddressChange}
                  submitHandler={handleSubmit}
                  editHandler={() => setEditMode(!isEditMode)}
                  cancelHandler={handleCancel}
                  isEditMode={isEditMode}
                  isLoading={isLoading}
                  hasError={hasError}
                  errors={errors}
                />
              )}
              {tab === "security" && <Security />}
              {tab === "options" && <Options />}
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Settings;
