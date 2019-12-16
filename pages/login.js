import React, { useEffect, useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import GridItem from "components/Grid/GridItem";
import CardContent from "@material-ui/core/CardContent";
import HeaderLinks from "components/Header/HeaderLinks";
import Header from "components/Header/Header";
import LoginComponent from "src/sections/LoginPage/components/LoginForm/LoginComponent";
import RegisterComponent from "src/sections/RegisterPage/components/RegisterForm/RegisterComponent";
import { useRouter } from "next/router";
import FooterDark from "../components/Footer/FooterDark";
import ButtonCustom from "../components/CustomButtons/ButtonCustom";
import { withAuthSync } from "../api/withAuth";

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
    marginTop: 100
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  contentRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "auto !important"
    }
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "underline"
    }
  },
  textDescription: {
    textAlign: "center",
    padding: "30px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0"
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

function LoginPage({ children, currentUser }) {
  const [action, setAction] = useState("login");
  const classes = useStyles();
  const Router = useRouter();

  useEffect(() => {
    const query = Object.keys(Router.query)[0];
    if (query === "action") {
      setAction(Object.values(Router.query)[0]);
    } else {
      setAction("resetPassword");
    }
  }, [Router]);

  function selectComponent() {
    switch (true) {
      case action === "login":
        return <LoginComponent />;
      case action === "register":
        return <RegisterComponent />;
      case action === "resetPassword":
        return <>{children}</>;
      default:
        return <LoginComponent />;
    }
  }

  return (
    <div className={classes.root}>
      <Header color="dark" links={<HeaderLinks user={currentUser} />} fixed user={currentUser} />
      <GridContainer className={classes.container}>
        <GridItem sm={8} md={6} lg={5} xl={4}>
          <Card className={classes.card}>{selectComponent()}</Card>
        </GridItem>
        <GridItem sm={8} md={6} lg={5} xl={4}>
          <Card className={classes.card}>
            <CardBody className={classes.contentRight}>
              <Typography gutterBottom variant="h3">
                {action === "login" ? "Inscription" : "Connexion"}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="body1" className={classes.textDescription}>
                  S'inscrire sur La Flamme Connectée vous permet d'accéder au statut et à l'historique de votre
                  commande. Remplissez simplement les champs ci-dessous, et nous aurons un nouveau compte configuré pour
                  vous en un rien de temps. Nous ne vous demanderons que les informations nécessaires pour accélérer et
                  faciliter le processus d’achat.
                </Typography>{" "}
              </CardContent>
              <Link
                href={
                  action === "login"
                    ? { pathname: "/login", query: { action: "register" } }
                    : { pathname: "/login", query: { action: "login" } }
                }
              >
                <ButtonCustom
                  className={classes.submitButton}
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                  animateButton
                >
                  {action === "login" ? "S'enregistrer" : "Se connecter"}
                </ButtonCustom>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <FooterDark />
    </div>
  );
}

export default withAuthSync(LoginPage);
