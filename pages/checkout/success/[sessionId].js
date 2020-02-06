import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import GridContainer from "components/Grid/GridContainer";
import Card from "components/Card/Card";
import GridItem from "components/Grid/GridItem";
import getApiUrl from "utils/getApiUrl";
import axios from "axios";
import svg1 from "public/img/svg/undraw_order_confirmed_1m3v.svg";
import { ShoppingCartContext } from "src/contexts/ShoppingCartContext";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import FooterDark from "../../../components/Footer/FooterDark";
import MediaSvg from "../../../components/Media/MediaSvg";
import { withAuthSync } from "../../../api/withAuth";
import manageLocalStorage from "../../../utils/manageLocalStorage";

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

function SuccessPage({ currentUser, sessionId }) {
  const { emptyCart } = useContext(ShoppingCartContext);
  const classes = useStyles();

  useEffect(() => {
    // axios
    //   .get(`${getApiUrl()}/checkout/getCheckoutSession/${sessionId}`)
    //   .then(response => {})
    //   .catch(error => {
    //     console.log("error : ", error);
    //   });
    emptyCart();
    manageLocalStorage("remove", "cart");
    manageLocalStorage("remove", "cartTotal");
  });

  return (
    <div className={classes.root}>
      <Header color="dark" links={<HeaderLinks user={currentUser} />} fixed user={currentUser} />
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
  const { sessionId } = ctx.query;
  return { sessionId, isProtect: true };
};

export default withAuthSync(SuccessPage);
