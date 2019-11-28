import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/styles";
import { Tabs, Tab, Divider, colors } from "@material-ui/core";

import Headers from "components/Header/Header";
import { Header, Profile, Address, Security, Options } from "src/sections/SettingsPage";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import CustomSnackBar from "components/Snackbar/CustomSnackBar";
import validate from "validate.js";
import { schema } from "src/sections/SettingsPage/Address/components/AddressForm/AddressFormSchema";
import { UserContext } from "src/contexts/UserContext";
import axioswal from "axioswal";
import axios from "axios";
import Swal from "sweetalert2";
import HeaderLinks from "components/Header/HeaderLinks";
import Cookies from "js-cookie";
import { authInitialProps } from "../server/api/auth";
import HomePage from "./index";
import getHost from "../server/api/get-host";
import { withAuthSync } from "../server/api/withAuth";

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

function SettingsPage({ currentUser, isLoggedIn }) {
  const [values, setValues] = useState({});
  const [isEditMode, setEditMode] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [tabTitle, setTabTitle] = useState("");
  const classes = useStyles();

  // ========== DATA FETCHING ========== //

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

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

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    axios
      .patch(`${getHost()}/users/updateProfile`, {
        values
      })
      .then(response => {
        console.log("response : ", response);
        setTimeout(() => {
          Swal.fire({
            type: response.data.status,
            title: response.data.message,
            confirmButtonColor: "#ff7961",
            position: "bottom-right"
          });
          setEditMode(false);
          setLoading(false);
        }, 1500);
      });
  };

  const handleCancel = () => {
    setEditMode(false);
    setLoading(false);
    setValues(currentUser);
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

  function setTitle(tabName) {
    switch (true) {
      case tabName === "profile":
        setTabTitle("Vérifiez ou modifiez les informations de votre compte");
        break;
      case tabName === "address":
        setTabTitle("Vérifiez ou renseignez votre adresse");
        break;
      case tabName === "security":
        setTabTitle("Modifiez le mot de passe de votre compte");
        break;
      case tabName === "options":
        setTabTitle("Gérez les options de votre compte");
        break;
      default:
        setTabTitle("Vérifiez ou modifiez les informations de votre compte");
    }
  }

  useEffect(() => {
    setTitle(tab);
  }, [tab]);

  const handleTabsChange = (event, value) => {
    Router.push({
      pathname: "/settings",
      query: { tab: value }
    });
    setTitle(value);
  };

  return (
    <div className={classes.root}>
      <Headers
        color="dark"
        brand="La Flamme Connectée"
        links={<HeaderLinks user={currentUser} isLoggedIn={isLoggedIn} />}
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
                  profile={isEditMode ? currentUser : values}
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
                  profile={currentUser}
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
              {tab === "security" && <Security userId={currentUser._id} />}
              {/* {tab === "options" && <Options />} */}
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

// SettingsPage.getInitialProps = async ctx => {
//   const { currentUser } = await authInitialProps(ctx);
//   const isLoggedIn = Object.keys(currentUser).length !== 0;
//   return { currentUser, isLoggedIn };
// };

export default withAuthSync(SettingsPage);
