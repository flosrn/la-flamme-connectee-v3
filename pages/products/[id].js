import React, { useContext, useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import ImageGallery from "react-image-gallery";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import ShoppingCart from "@material-ui/core/SvgIcon/SvgIcon";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import ReactGA from "react-ga";
import { useStyles } from "public/jss/la-flamme-connectee/views/productStyle";
import { withAuthSync } from "../../api/withAuth";
import LayoutPage from "../../components/Page/LayoutPage";
import GridContainer from "../../components/Grid/GridContainer";
import Title from "../../components/Typography/Title";
import GridItem from "../../components/Grid/GridItem";
import Accordion from "../../components/Accordion/Accordion";
import ButtonCustom from "../../components/CustomButtons/ButtonCustom";
import CustomSnackBar from "../../components/Snackbar/CustomSnackBar";
import redirectTo from "../../utils/redirectTo";
import { ShoppingCartContext } from "../../src/contexts/ShoppingCartContext";
import { getProduct } from "../../api/apiRequests";

function ProductPage({ currentUser, id }) {
  const [product, setProduct] = useState(null);
  const [open, setOpen] = React.useState(false);
  const { addItem } = useContext(ShoppingCartContext);
  const classes = useStyles();

  useEffect(() => {
    getProduct({ id, setProduct });
  }, []);

  const handleClick = item => {
    addItem(item);
    setOpen(true);
    global.analytics.track(`${item.name} ajouté au panier`, {
      location: "single_product_page",
      product_name: item.name,
      value: item.price
    });
  };

  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura-400.jpg")}
      sectionId={product && product.name}
      backgroundPosition="0 100%"
      currentUser={currentUser}
      meta={{ title: product && product.name }}
    >
      <div className={classes.productPage}>
        <GridContainer justify="center">
          <Title variant="h2" className={clsx(classes.title, "productName")}>
            {product && product.name}
          </Title>
        </GridContainer>

        {product ? (
          <GridContainer className={classes.carouselContainer} id={product.name} key={product.id}>
            <GridItem sm={6} md={6}>
              <ImageGallery showFullscreenButton={false} showPlayButton={false} startIndex={0} items={product.images} />
            </GridItem>
            <GridItem sm={6} md={6}>
              {/* <h3 className={classes.title}>{product.caption}</h3> */}
              <p className={classes.subtitle}>{product.caption}</p>
              <h3 className={classes.mainPrice}>{product.price} €</h3>
              <Accordion
                active={0}
                activeColor="secondary"
                collapses={[
                  {
                    title: "Description",
                    content: <Typography variant="body2">{product.description}</Typography>
                  },
                  {
                    title: "Caractéristiques",
                    content: (
                      <ul className={classes.list}>
                        {product &&
                          product.specifications &&
                          product.specifications.map(spec => <li key={spec}>{spec}</li>)}
                      </ul>
                    )
                  }
                ]}
              />
              <GridContainer className={classes.pullRight}>
                <ButtonCustom
                  round
                  color="secondary"
                  onClick={() => handleClick(product)}
                  animateButton
                  className="addCartButton"
                >
                  Ajouter au panier &nbsp; <ShoppingCart />
                </ButtonCustom>
              </GridContainer>
            </GridItem>
          </GridContainer>
        ) : (
          <GridContainer justify="center">
            <GridItem md={4} className={classes.center}>
              <CircularProgress color="secondary" />
            </GridItem>
          </GridContainer>
        )}
        <Divider />
        <CustomSnackBar
          message={`${product} ajouté au panier !`}
          open={open}
          duration={5000}
          clickHandler={() => redirectTo("/shopping-cart")}
          closeHandler={() => setOpen(false)}
        />
      </div>
    </LayoutPage>
  );
}

ProductPage.getInitialProps = async ctx => {
  const { id } = ctx.query;
  return { id };
};

export default withAuthSync(ProductPage);
