import React from "react";
// core components
// sections
import ProductSection from "src/sections/HomePage/ProductsSection";
// styles
import makeStyles from "@material-ui/core/styles/makeStyles";

import { withAuthSync } from "api/withAuth";
import LayoutPage from "../components/Page/LayoutPage";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function ProductsPage({ currentUser }) {
  const classes = useStyles();
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura4-lowres.jpg")}
      sectionId="products"
      backgroundPosition="0 100%"
      currentUser={currentUser}
      meta={{ title: "Produits" }}
    >
      <ProductSection />
    </LayoutPage>
  );
}

export default withAuthSync(ProductsPage);
