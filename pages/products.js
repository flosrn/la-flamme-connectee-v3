import React, { useState, useEffect } from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
// images
import backgroundImage from "public/img/contura/background-contura2.jpg";
import svg1 from "public/img/svg/undraw_empty_cart_co35.svg";
import axios from "axios";

// import product1 from "public/img/objects/detourage/volcano-flam_front-2.png";
// import product2 from "public/img/objects/detourage/flam-connect-pack.png";
// import product3 from "public/img/objects/detourage/flamconnect_back.png";
// import product4 from "public/img/objects/detourage/flamconnect_front.png";
// import product5 from "public/img/objects/detourage/volcano-trio.png";
// import product6 from "public/img/objects/detourage/volcano-pack_front.png";
// import product7 from "public/img/objects/detourage/volcano-pack_top.png";
import makeStyles from "@material-ui/core/styles/makeStyles";
import getHost from "../server/api/get-host";
import ProductSection from "../src/sections/HomePage/ProductsSection";
import { authInitialProps } from "../server/api/auth";
import HomePage from "./index";
import FooterDark from "../components/Footer/FooterDark";
import HeaderLinks from "../components/Header/HeaderLinks";
import Header from "../components/Header/Header";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const fakeCart = [
  {
    id: "prod_GB4kHqmbn25Bq3",
    name: "Flam'connect",
    images: [
      "https://www.laflammeconnectee.fr/_next/static/images/volcano-flam_front-2-f7b579ebd8999c419e9dec356ab01515.png"
    ],
    quantity: 0,
    price: 160
  },
  {
    id: "prod_GB5utpMXlpVFSL",
    name: "Volcano'connect",
    images: [
      "https://www.laflammeconnectee.fr/_next/static/images/volcano-pack_front-581a5b07a12f281b0b0de20faa473879.png"
    ],
    quantity: 0,
    price: 46
  }
];

function ProductsPage({ isLoggedIn, currentUser }) {
  const [products, setProducts] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${getHost()}/products/getProducts`)
      .then(response => {
        setProducts(response.data.data.products);
      })
      .catch(error => {
        console.log("error : ", error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Header
        color="dark"
        links={<HeaderLinks user={currentUser} isLoggedIn={isLoggedIn} />}
        fixed
        user={currentUser}
        isLoggedIn={isLoggedIn}
      />
      <GridContainer justify="center">
        <GridItem xs={8} sm={10} md={10} lg={8}>
          <MediaSvg src={svg1} alt="add-to-cart" size="small" mt={100} />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem lg={8}>
          <ProductSection products={products} />
        </GridItem>
      </GridContainer>
      <FooterDark />
    </div>
  );
}

ProductsPage.getInitialProps = async ctx => {
  const { currentUser } = await authInitialProps(ctx);
  const isLoggedIn = Object.keys(currentUser).length !== 0;
  return { currentUser, isLoggedIn };
};

export default ProductsPage;
