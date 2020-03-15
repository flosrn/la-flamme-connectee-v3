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
import getApiUrl from "../../../../utils/getApiUrl";
import ButtonCustom from "../../../../components/CustomButtons/ButtonCustom";
import manageLocalStorage from "../../../../utils/manageLocalStorage";
import { CheckoutContext } from "../../../contexts/CheckoutContext";

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
  }
}));

export default function AdressStep({ id, nextStep }) {
  const [data, setData] = useState(null);
  const { address, storeAddress } = useContext(CheckoutContext);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const classes = useStyles();

  const loadData = async mounted => {
    const response = await axios.get(`${getApiUrl()}/checkout/getCheckoutSession/${id}`);
    if (mounted) {
      const checkoutAddress = response.data.data.checkoutSession.address;
      setData(checkoutAddress);
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
    if (JSON.stringify(data) !== JSON.stringify(formData)) {
      manageLocalStorage("set", "checkout_address", formData);
      await axios.patch(`${getApiUrl()}/checkout/patchCheckoutSession/${id}`, { formData });
    }
  };

  return (
    <div className={classes.root}>
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
