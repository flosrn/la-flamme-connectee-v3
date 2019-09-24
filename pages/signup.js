import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";

import RegisterForm from "sections/RegisterPage/components/RegisterForm";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import gradients from "utils/gradients";


import stove from "static/img/stoves/stove2.jpg";

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

const SignupPage = () => {
  const classes = useStyles();

  return (
    <GridContainer className={classes.root}>
      <GridItem md={8} lg={4}>
        <Card>
          <CardBody className={classes.content}>
            <PersonAddIcon className={classes.icon} />
            <Typography gutterBottom variant="h3">
              Inscription
            </Typography>
            <Typography variant="subtitle2">Inscrivez vous sur le site La Flamme Connectée</Typography>
            <RegisterForm className={classes.registerForm} />
            <Divider className={classes.divider} />
            <Link href="/login">
              <a className={classes.link}>Vous avez déjà un compte ? Connectez vous</a>
            </Link>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default SignupPage;
