import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
// images
import svg1 from "public/img/svg/undraw_empty_cart_co35.svg";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ProductSection from "../src/sections/HomePage/ProductsSection";
import FooterDark from "../components/Footer/FooterDark";
import HeaderLinks from "../components/Header/HeaderLinks";
import Header from "../components/Header/Header";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import { withAuthSync } from "../api/withAuth";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function ProductsPage({ currentUser }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header color="dark" links={<HeaderLinks user={currentUser} />} fixed user={currentUser} />
      <GridContainer justify="center">
        <GridItem xs={8} sm={10} md={10} lg={8}>
          <MediaSvg src={svg1} alt="add-to-cart" size="small" mt={100} />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem lg={8}>
          <ProductSection />
        </GridItem>
      </GridContainer>
      <FooterDark />
    </div>
  );
}

export default withAuthSync(ProductsPage);
