import React, { useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider, Avatar } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlined from "@material-ui/icons/LockOutlined";

import stove from "public/img/contura/contura2.jpg";

import Page from "components/Page";
import gradients from "utils/gradients";
import LoginForm from "src/sections/LoginPage/components/LoginForm";
// import Card from "../components/Card/Card";
import CardBody from "components/Card/CardBody";
import { blackColor, hexToRgb } from "public/jss/la-flamme-connectee";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import GridItem from "components/Grid/GridItem";
import ResetForm from "src/sections/ResetPage/components/ResetForm";

const useStyles = makeStyles(theme => ({
  root: {
    // height: "100vh",
    // width: "100%",
    // position: "fixed",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // background: `url(${stove}) no-repeat center center fixed`,
    // backgroundSize: "cover",
    // overflow: "hidden",
    // padding: theme.spacing(6, 2)
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

function SuccessPage({ sessionId }) {
  const classes = useStyles();
  console.log("sessionId : ", sessionId);

  return <GridContainer className={classes.root}>success</GridContainer>;
}

SuccessPage.getInitialProps = ({ query: { sessionId } }) => {
  console.log("sessionId : ", sessionId);
  return { sessionId };
};

export default SuccessPage;
