/* eslint no-template-curly-in-string:0 */
import React, { useState, useEffect, useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  Button,
  useTheme
} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { PayPalButton } from "react-paypal-button-v2";
import getApiUrl from "../../../../utils/getApiUrl";
import ButtonCustom from "../../../../components/CustomButtons/ButtonCustom";
import manageLocalStorage from "../../../../utils/manageLocalStorage";
import { CheckoutContext } from "../../../contexts/CheckoutContext";
import { getPaypalTransaction } from "../../../../api/apiRequests";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Entrez une adresse email valide")
    .required("Entrez un email")
    .max(33, "Veuillez réduire le nombre de caractères"),

  firstName: yup
    .string()
    .required("Entrez un prénom")
    .max(33, "Veuillez réduire le nombre de caractères"),
  lastName: yup
    .string()
    .required("Entrez un nom")
    .max(33, "Veuillez réduire le nombre de caractères"),
  address_1: yup
    .string()
    .required("Entrez une adresse")
    .max(55, "Veuillez réduire le nombre de caractères"),
  zip: yup
    .string()
    .required("Entrez un code postal")
    .max(5, "Le code postal doit être composé de 5 caractères"),
  city: yup
    .string()
    .required("Saisissez une ville")
    .max(33, "Veuillez réduire le nombre de caractères")
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10
  },
  cardSubTitle: {
    padding: 5,
    marginBottom: 10
  },
  cardSection: {
    "&:first-child": {
      marginBottom: 30
    }
  },
  cardFooter: {
    margin: "25px 0 5px 0",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row-reverse"
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30
      }
    }
  },
  dynamicCheckout: {
    marginTop: 5
  },
  dynamicCheckoutTitle: {
    // color: "#737373",
    fontWeight: "500",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    "&::before, &::after": {
      content: "''",
      border: "1px #e6e6e6 solid",
      borderBottom: "0",
      WebkitBoxFlex: "1",
      WebkitFlex: "1 0 2em",
      MsFlex: "1 0 2em",
      flex: "1 0 2em"
    },
    "&::before": {
      borderRight: "0",
      borderTopLeftRadius: "5px",
      marginRight: "1em"
    },
    "&::after": {
      borderLeft: "0",
      borderTopRightRadius: "5px",
      marginLeft: "1em"
    },
    "& span": {
      position: "relative",
      top: -11
    }
  },
  dynamicCheckoutContent: {
    border: "1px #e6e6e6 solid",
    borderTop: "0",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    padding: "0 15px 11px 15px"
  },
  separator: {
    marginTop: 35,
    marginBottom: 30,
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&::before, &::after": {
      content: "''",
      height: "1px",
      backgroundColor: "#e6e6e6",
      flexGrow: "1"
    },
    "&::before": {
      marginRight: 15
    },
    "&::after": {
      marginLeft: 15
    }
    // "&::after": {
    //   borderLeft: "0",
    //   borderTopRightRadius: "5px",
    //   marginLeft: "1em"
    // },
  }
}));

export default function AdressStep({ id, nextStep }) {
  const [data, setData] = useState(null);
  const { address, storeAddress } = useContext(CheckoutContext);
  const { items, total } = useContext(ShoppingCartContext);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const classes = useStyles();

  const loadData = async mounted => {
    const response = await axios.get(`${getApiUrl()}/checkout/getCheckoutSession/${id}`);
    if (mounted) {
      const { checkoutAddress } = response.data.data;
      if (checkoutAddress) {
        setData(checkoutAddress);
      } else {
        setData({
          email: "",
          firstName: "",
          lastName: "",
          address_1: "",
          address_2: "",
          zip: "",
          city: "",
          country: "",
          phone: ""
        });
      }
    }
  };

  useEffect(() => {
    let mounted = true;
    if (address) {
      setData(address);
    } else {
      loadData(mounted);
    }
    return () => {
      mounted = false;
    };
  }, []);

  const onSubmit = async formData => {
    nextStep("shipping_method");
    storeAddress(formData);
    // if (JSON.stringify(data) !== JSON.stringify(formData)) {
    manageLocalStorage("set", "checkout_address", formData);
    await axios.patch(`${getApiUrl()}/checkout/patchCheckoutSession/${id}`, { formData, items });
    // }
  };

  const clientId = process.env.NODE_ENV === "development" ? "sb" : process.env.PAYPAL_CLIENT_ID;

  return (
    <div className={classes.root}>
      <div className={classes.dynamicCheckout}>
        <Typography className={classes.dynamicCheckoutTitle} variant="h5">
          <span>Paiement express</span>
        </Typography>
        <div className={classes.dynamicCheckoutContent}>
          <div className={classes.dynamicCheckoutButton}>
            <GridContainer justify="center">
              <GridItem sm={6}>
                <PayPalButton
                  shippingPreference="GET_FROM_FILE" // default is "GET_FROM_FILE"
                  options={{ clientId, currency: "EUR", disableFunding: "card,credit" }}
                  style={{ height: 45 }}
                  createOrder={() => {
                    // This function sets up the details of the transaction, including the amount and line item details.
                    return fetch(`${getApiUrl()}/checkout/createPaypalTransaction`, {
                      method: "post",
                      headers: {
                        "content-type": "application/json"
                      },
                      body: JSON.stringify({
                        amount: {
                          currency_code: "EUR",
                          value: total
                        }
                      })
                    })
                      .then(res => {
                        return res.json();
                      })
                      .then(data => {
                        return data.orderID; // Use the same key name for order ID on the client and server
                      });
                  }}
                  onApprove={data => {
                    getPaypalTransaction({ data, items, id });
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div className={classes.separator}>
        <span>OU</span>
      </div>
      {data && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.cardSection}>
            <div className={classes.cardSubTitle}>
              <Typography variant="h4">Email</Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Adresse email"
                  name="email"
                  inputRef={register}
                  defaultValue={data.email || ""}
                  helperText={errors.email && errors.email.message}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.cardSection}>
            <div className={classes.cardSubTitle}>
              <Typography variant="h4">Adresse de livraison</Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Prénom"
                  name="firstName"
                  inputRef={register}
                  defaultValue={data.firstName || ""}
                  helperText={errors.firstName && errors.firstName.message}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Nom"
                  name="lastName"
                  inputRef={register}
                  defaultValue={data.lastName || ""}
                  helperText={errors.lastName && errors.lastName.message}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Adresse"
                  name="address_1"
                  inputRef={register}
                  defaultValue={data.address_1 || ""}
                  helperText={errors.address_1 && errors.address_1.message}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Appartement, suite, etc. (optionnel)"
                  name="address_2"
                  inputRef={register}
                  defaultValue={data.address_2 || ""}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <GridItem sm={3}>
                <TextField
                  label="Code postal"
                  name="zip"
                  inputRef={register}
                  defaultValue={data.zip || ""}
                  helperText={errors.zip && errors.zip.message}
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem sm={5}>
                <TextField
                  label="Ville"
                  name="city"
                  inputRef={register}
                  defaultValue={data.city || ""}
                  helperText={errors.city && errors.city.message}
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem sm={4}>
                <TextField
                  label="Pays / région"
                  name="country"
                  inputRef={register}
                  defaultValue={data.country || ""}
                  helperText={errors.country && errors.country.message}
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12}>
                <TextField
                  label="Téléphone (optionnel)"
                  name="phone"
                  inputRef={register}
                  defaultValue={data.phone || ""}
                  helperText={errors.phone && errors.phone.message}
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
            </Grid>
          </div>
          <Divider />
          <GridContainer className={classes.cardFooter}>
            <GridItem sm={6} center>
              <ButtonCustom color="secondary" size="large" animateButton type="submit">
                Continuer vers l'expédition
              </ButtonCustom>
            </GridItem>
            <GridItem sm={6} center>
              <Link href="/shopping-cart">
                <a>{"< Retour au panier"}</a>
              </Link>
            </GridItem>
          </GridContainer>
        </form>
      )}
    </div>
  );
}
