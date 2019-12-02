import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/styles";

import axios from "axios";
import Button from "components/CustomButtons/Button";
import svg from "public/img/svg/undraw_delivery_address_03n0.svg";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import validate from "validate.js";
import Swal from "sweetalert2";
import HeaderLinks from "../components/Header/HeaderLinks";
import Header from "../components/Header/Header";
import { authInitialProps } from "../server/api/auth";
import FooterDark from "../components/Footer/FooterDark";
import CheckoutStepper from "../components/Steppers/CheckoutStepper";
import GridContainer from "../components/Grid/GridContainer";
import Card from "../components/Card/Card";
import GridItem from "../components/Grid/GridItem";
import LoginComponent from "../src/sections/LoginPage/components/LoginForm/LoginComponent";
import RegisterComponent from "../src/sections/RegisterPage/components/RegisterForm/RegisterComponent";
import MediaSvg from "../components/Media/MediaSvg";
import { schema } from "../src/sections/SettingsPage/Address/components/AddressForm/AddressFormSchema";
import AddressForm from "../src/sections/Checkout/AddressForm";
import getHost from "../server/api/get-host";
import { ShoppingCartContext } from "../src/contexts/ShoppingCartContext";

const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000" : "https://laflammeconnectee.fr";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 100
  },
  gridItem: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: 150
    }
  },
  gridContent: {
    [theme.breakpoints.down("md")]: {
      marginTop: 30
    }
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

function DeliveryMethod() {
  const [value, setValue] = React.useState("home");

  const handleChange = event => {
    setValue(event.target.value);
  };
  const classes = useStyles();

  return (
    <GridContainer justifycontent="center">
      <GridItem lg={6} className={classes.gridItem}>
        <MediaSvg src={svg} />
      </GridItem>
      <GridItem lg={6} className={classes.gridItem}>
        <div className={classes.gridContent}>
          <div>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Sélectionnez une méthode de livraison</FormLabel>
              <RadioGroup aria-label="deliveryMethod" name="deliveryMethod" value={value} onChange={handleChange}>
                <FormControlLabel value="home" control={<Radio />} label="Livraison à mon domicile" />
                <FormControlLabel value="relay" control={<Radio />} label="Livraison en point relais" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
}

function Address({ values, changeHandler, submitHandler, hasError, errors }) {
  const classes = useStyles();

  return (
    <GridContainer justifycontent="center">
      <GridItem lg={6} className={classes.gridItem}>
        <MediaSvg src={svg} />
      </GridItem>
      <GridItem lg={6} className={classes.gridItem}>
        <div className={classes.gridContent}>
          <AddressForm
            values={values}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            hasError={hasError}
            errors={errors}
          />
        </div>
      </GridItem>
    </GridContainer>
  );
}

function Summary() {
  return (
    <div>
      <div>Confirmation</div>
    </div>
  );
}

function CheckoutPage({ currentUser, isLoggedIn }) {
  const [stripe, setStripe] = useState(null);
  const [values, setValues] = useState({});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const { items, total } = useContext(ShoppingCartContext);
  const classes = useStyles();

  // ========== DATA FETCHING ========== //

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY_TEST));
    setValues(currentUser);
  }, [currentUser]);

  // ========== CHANGE HANDLERS ========== //

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

  // ========== SUBMIT HANDLER ========== //

  const handleSubmit = async event => {
    // event.preventDefault();
    console.log("values : ", values);
    setLoading(true);
    axios
      .patch(`${getHost()}/users/updateProfile`, {
        values
      })
      .then(response => {
        console.log("response : ", response);
        setTimeout(() => {
          axios
            .post(`${getHost()}/orders/getCheckoutSession`, { currentUser, items, total })
            .then(response => {
              stripe.redirectToCheckout({
                sessionId: response.data.session.id
              });
            })
            .catch(error => {
              console.log("error : ", error);
            });
          setLoading(false);
        }, 1500);
      });
  };

  // ========== FORM VALIDATION ========== //

  useEffect(() => {
    if (values.address) {
      const errors = validate(values.address, schema);
      setErrors(errors || {});
    }
  }, [values]);

  const hasError = field => !!(touched[field] && errors[field]);

  return (
    <div className={classes.root}>
      <Header
        color="dark"
        links={<HeaderLinks user={currentUser} isLoggedIn={isLoggedIn} />}
        fixed
        user={currentUser}
        isLoggedIn={isLoggedIn}
      />
      <GridContainer className={classes.container}>
        <GridItem md={8}>
          <Card>
            <CheckoutStepper
              submitHandler={handleSubmit}
              components={[
                <DeliveryMethod />,
                <Address
                  values={values}
                  changeHandler={handleAddressChange}
                  submitHandler={handleSubmit}
                  hasError={hasError}
                  errors={errors}
                />,
                <Summary />
              ]}
            />
          </Card>
        </GridItem>
      </GridContainer>
      <FooterDark />
    </div>
  );
}

CheckoutPage.getInitialProps = async ctx => {
  const { currentUser } = await authInitialProps(ctx);
  const isLoggedIn = Object.keys(currentUser).length !== 0;
  return { currentUser, isLoggedIn };
};

export default CheckoutPage;
