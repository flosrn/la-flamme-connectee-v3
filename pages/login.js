import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider, Avatar, Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Page from "components/Page";
import gradients from "utils/gradients";
import LoginForm from "src/sections/LoginPage/components/LoginForm";
// import Card from "../components/Card/Card";
import { blackColor, hexToRgb } from "public/jss/la-flamme-connectee";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import GridItem from "components/Grid/GridItem";
import LoginForgotPasswordForm from "src/sections/LoginPage/components/LoginForm/LoginForgotPasswordForm";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import CardContent from "@material-ui/core/CardContent";
import HeaderLinks from "components/Header/HeaderLinks";
import Header from "components/Header/Header";
import LoginComponent from "src/sections/LoginPage/components/LoginForm/LoginComponent";
import RegisterComponent from "src/sections/RegisterPage/components/RegisterForm/RegisterComponent";
import { useRouter } from "next/router";
import getHost from "../server/api/get-host";
import redirectTo from "../src/lib/redirectTo";
import ButtonLink from "../components/CustomButtons/ButtonLink";
import ResetPassword from "./resetPassword/[token]";
import FooterDark from "../components/Footer/FooterDark";
import { authInitialProps } from "../server/api/auth";

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
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: "absolute",
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
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

function LoginPage({ children, currentUser, isLoggedIn }) {
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
      <Header
        color="dark"
        links={<HeaderLinks user={currentUser} isLoggedIn={isLoggedIn} />}
        fixed
        user={currentUser}
        isLoggedIn={isLoggedIn}
      />
      <GridContainer className={classes.container}>
        <GridItem sm={8} md={6} lg={5} xl={4}>
          <Card className={classes.card}>{selectComponent()}</Card>
        </GridItem>
        <GridItem sm={8} md={6} lg={5} xl={4}>
          <Card className={classes.card}>
            <CardBody className={classes.contentRight}>
              <Typography gutterBottom variant="h4">
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
                <Button className={classes.submitButton} color="primary" size="large" type="submit" variant="contained">
                  {action === "login" ? "S'enregistrer" : "Se connecter"}
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <FooterDark />
    </div>
  );
}

LoginPage.getInitialProps = async ctx => {
  const { currentUser } = await authInitialProps(ctx);
  const isLoggedIn = Object.keys(currentUser).length !== 0;
  return { currentUser, isLoggedIn };
};

export default LoginPage;
