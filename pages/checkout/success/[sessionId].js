import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography, Divider, Avatar } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import LockOutlined from "@material-ui/icons/LockOutlined";
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
import getHost from "server/api/get-host";
import axios from "axios";
import Cookie from "js-cookie";
import svg1 from "public/img/svg/undraw_order_confirmed_1m3v.svg";
import { ShoppingCartContext } from "src/contexts/ShoppingCartContext";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import FooterDark from "../../../components/Footer/FooterDark";
import { authInitialProps } from "../../../server/api/auth";

import MediaSvg from "../../../components/Media/MediaSvg";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 120
  },
  gridItem: {
    justifyContent: "center"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    "& h3, p": {
      textAlign: "center"
    },
    marginBottom: 60
  }
}));

function SuccessPage({ currentUser, isLoggedIn, sessionId }) {
  const { emptyCart } = useContext(ShoppingCartContext);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${getHost()}/checkout/getCheckoutSession/${sessionId}`)
      .then(response => {
        emptyCart();
      })
      .catch(error => {
        console.log("error : ", error);
      });
  });

  return (
    <div className={classes.root}>
      <Header
        color="dark"
        links={<HeaderLinks user={currentUser} isLoggedIn={isLoggedIn} />}
        fixed
        user={currentUser}
        isLoggedIn={isLoggedIn}
      />
      <GridContainer justify="center" className={classes.container}>
        <GridItem md={6} className={classes.gridItem}>
          <MediaSvg src={svg1} />
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={8} className={classes.gridItem}>
              <div className={classes.content}>
                <h3>Nous vous remercions pour votre commande</h3>
                <p>
                  Vous pouvez consulter le{" "}
                  <Link href="/settings?tabs=my-orders">
                    <a>détail de vos commande ici</a>
                  </Link>
                </p>
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <FooterDark />
    </div>
  );
}

SuccessPage.getInitialProps = async ctx => {
  const { currentUser } = await authInitialProps(ctx);
  const isLoggedIn = Object.keys(currentUser).length !== 0;
  const { sessionId } = ctx.query;
  return { currentUser, isLoggedIn, sessionId };
};

export default SuccessPage;
