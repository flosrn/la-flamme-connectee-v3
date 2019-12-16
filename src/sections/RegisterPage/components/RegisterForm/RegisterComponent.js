import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";

import RegisterForm from "src/sections/RegisterPage/components/RegisterForm";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import ButtonLink from "../../../../../components/CustomButtons/ButtonLink";

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  icon: {
    background: theme.palette.success.main,
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
    fontSize: "16px",
    color: theme.palette.secondary.main
  },
  linkText: {
    fontSize: "16px"
  }
}));

const RegisterComponent = ({ clickHandler }) => {
  const classes = useStyles();

  return (
    <CardBody className={classes.content}>
      <PersonAddIcon className={classes.icon} />
      <Typography gutterBottom variant="h3">
        Inscription
      </Typography>
      <Typography variant="subtitle2">Inscrivez vous sur le site La Flamme Connectée</Typography>
      <RegisterForm className={classes.registerForm} />
      <Divider className={classes.divider} />
      <div className={classes.linkText}>
        {" "}
        Vous avez déjà un compte ?{" "}
        <Link href={{ pathname: "/login", query: { action: "login" } }}>
          <a className={classes.link}>Connectez vous</a>
        </Link>
      </div>
    </CardBody>
  );
};

export default RegisterComponent;
