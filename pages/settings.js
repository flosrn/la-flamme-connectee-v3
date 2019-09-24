import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import { Tabs, Tab, Divider, colors } from "@material-ui/core";

import Headers from "components/Header/Header.js";
import { Header, Profile, Address, Security, Options } from "sections/SettingsPage";
import HeaderLinks from "../components/Header/HeaderLinks";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import CustomSnackBar from "../components/Snackbar/CustomSnackBar";
import validate from "validate.js";
import { schema } from "sections/SettingsPage/Address/components/AddressForm/AddressFormSchema.js";
import { UserContext } from "src/contexts/UserContext";
import axioswal from "axioswal";

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

function Settings({}) {
  const {
    state: { isLoggedIn, user },
    dispatch
  } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [values, setValues] = useState({});
  const [isEditMode, setEditMode] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [msg, setMsg] = useState("");
  const [tabTitle, setTabTitle] = useState("");
  const classes = useStyles();
  console.log(user);

  // ========== DATA FETCHING ========== //

  useEffect(() => {
    let mounted = true;
    // setLoading(true);
    // setProfile(currentUser);
    setValues(user);
    console.log(values);
  }, [user]);

  // const fetchProfile = () => {
  //   getUserProfile(currentUser._id)
  //     .then(response => {
  //       console.log("response : ", response);
  //       setProfile(response);
  //       setValues(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   setLoading(false);
  // };

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
    axioswal.patch("/api/user", values).then(() => {
      dispatch({ type: "fetch" });
    });
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setError(false);
  //   setOpen(false);
  //   updateMe(values)
  //     .then(res => {
  //       if (!isLoading) {
  //         setLoading(true);
  //         setTimeout(() => {
  //           setLoading(false);
  //           setOpen(true);
  //           setError(false);
  //           setEditMode(false);
  //           setMsg("Vos changements ont bien été pris en compte");
  //           fetchProfile();
  //           console.log(res);
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 1500);
  //         }, 2000);
  //       }
  //     })
  //     .catch(err => {
  //       const error = (err.response && err.response.data) || err.message;
  //       setError(true);
  //       setOpen(true);
  //       setMsg(error);
  //       console.log(error);
  //     });
  // };

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

  const router = useRouter();
  let pathname = router.asPath.split("=");
  const tab = pathname[1];

  useEffect(() => {
    setTitle();
  });

  const handleTabsChange = (event, value) => {
    Router.push({
      pathname: "/settings",
      query: { tab: value }
    });
    setTitle();
  };

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
        <CustomSnackBar open={open} message={msg} duration={4000} closeHandler={() => setOpen(false)} error={isError} />
      </GridContainer>
    </div>
  );
}

export default Settings;
