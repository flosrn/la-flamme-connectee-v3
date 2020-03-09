import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { NextSeo } from "next-seo";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import { withAuthSync } from "../../api/withAuth";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  }
}));

function CheckoutPage({ currentUser }) {
  const classes = useStyles();

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div className={classes.root}>
      <NextSeo title="Mon panier" noindex />
      <Header color="dark" links={<HeaderLinks user={currentUser} />} fixed user={currentUser} />
      <GridContainer justify="center">
        <GridItem xs={8} sm={10} md={10} lg={8}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Material-UI
            </Link>
            <Link color="inherit" href="/checkout?steps=shipping_method" onClick={handleClick}>
              Core
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withAuthSync(CheckoutPage);
