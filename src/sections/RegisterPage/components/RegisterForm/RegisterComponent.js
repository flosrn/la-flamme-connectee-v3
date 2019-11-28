import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";

import RegisterForm from "src/sections/RegisterPage/components/RegisterForm";
import gradients from "utils/gradients";
import stove from "public/img/contura/contura2.jpg";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import ButtonLink from "../../../../../components/CustomButtons/ButtonLink";

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
    backgroundImage: gradients.secondary,
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
  registerForm: {
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

const RegisterComponent = ({ clickHandler }) => {
  const classes = useStyles();

  return (
    <CardBody className={classes.content}>
      <PersonAddIcon className={classes.icon} />
      <Typography gutterBottom variant="h4">
        Inscription
      </Typography>
      <Typography variant="subtitle2">Inscrivez vous sur le site La Flamme Connectée</Typography>
      <RegisterForm className={classes.registerForm} />
      <Divider className={classes.divider} />
      <Link href={{ pathname: "/login", query: { action: "login" } }}>
        <a className={classes.link}>Vous avez déjà un compte ? Connectez vous</a>
      </Link>
    </CardBody>
  );
};

export default RegisterComponent;