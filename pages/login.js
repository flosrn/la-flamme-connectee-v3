import React, { useContext, useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider, Avatar } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlined from "@material-ui/icons/LockOutlined";

import stove from "static/img/stoves/stove2.jpg";

import Page from "components/Page";
import gradients from "utils/gradients";
import LoginForm from "sections/LoginPage/components/LoginForm";
// import Card from "../components/Card/Card";
import { blackColor, hexToRgb } from "static/jss/la-flamme-connectee";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import GridItem from "components/Grid/GridItem";
import LoginForgotPasswordForm from "sections/LoginPage/components/LoginForm/LoginForgotPasswordForm";
import axios from "axios";
import Swal from "sweetalert2";
import { UserContext } from "src/contexts/UserContext";
import redirectTo from "../lib/redirectTo";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${stove}) no-repeat center center fixed`,
    backgroundSize: "cover",
    overflow: "hidden",
    padding: theme.spacing(6, 2)
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
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
  }
}));

function Login() {
  const classes = useStyles();
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isForgot, setForgot] = useState(false);

  const handleChange = value => event => {
    value === "email" && setEmail(event.target.value);
    value === "password" && setPassword(event.target.value);
  };

  const handleSubmit = type => event => {
    event.preventDefault();
    setLoading(true);
    axios.post(`/api/auth/${type}`, { email, password }).then(response => {
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        text: response.data.text,
        confirmButtonColor: "#ff7961"
      }).then(result => {
        if (response.data.status === "success" && result.value) {
          redirectTo("/");
        }
      });
      dispatch({ type: "fetch" });
      setLoading(false);
    });
  };

  return (
    <GridContainer className={classes.root}>
      <GridItem sm={8} md={6} lg={4}>
        <Card className={classes.card}>
          <CardBody className={classes.content}>
            {!isForgot ? <LockIcon className={classes.icon} /> : <LockOutlined className={classes.icon} />}
            {!isForgot ? (
              <>
                <Typography gutterBottom variant="h3">
                  Connexion
                </Typography>
                <Typography variant="subtitle2">Connectez vous au site La Flamme Connectée</Typography>
                <LoginForm
                  className={classes.loginForm}
                  email={email}
                  password={password}
                  changeHandler={handleChange}
                  submitHandler={handleSubmit}
                  isLoading={isLoading}
                  clickHandler={() => setForgot(!isForgot)}
                />
              </>
            ) : (
              <>
                <Typography gutterBottom variant="h3">
                  Mot de passe oublié
                </Typography>
                <Typography variant="subtitle2">Recevez un nouveau mot de passe</Typography>
                <LoginForgotPasswordForm
                  className={classes.loginForm}
                  email={email}
                  changeHandler={handleChange}
                  submitHandler={handleSubmit}
                  isLoading={isLoading}
                  clickHandler={() => setForgot(!isForgot)}
                />
              </>
            )}
            <Divider className={classes.divider} />
            <Link href="/signup">
              <a className={classes.link}>Vous n'avez pas encore de compte ? Inscrivez vous</a>
            </Link>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Login;
