import React, { useContext } from "react";
import ImageGallery from "react-image-gallery";
// core components
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Accordion from "components/Accordion/Accordion";
// icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// images

import Divider from "@material-ui/core/Divider";
// styles
import { useStyles } from "public/jss/la-flamme-connectee/views/productStyle";
// contexts
import { ShoppingCartContext } from "src/contexts/ShoppingCartContext";
import img1 from "public/img/objects/detourage/volcano-flam_front.png";

export default function ProductSection({ products }) {
  const { addItem } = useContext(ShoppingCartContext);
  const classes = useStyles();

  return (
    <div className={classes.productPage}>
      <GridContainer justify="center">
        <h1 className={classes.title}>Les produits</h1>
      </GridContainer>

      {products &&
        products.map(item => (
          <GridContainer className={classes.carouselContainer} id="products" key={item.id}>
            <GridItem sm={6} md={6}>
              <ImageGallery showFullscreenButton={false} showPlayButton={false} startIndex={0} items={item.images} />
            </GridItem>
            <GridItem sm={6} md={6}>
              <h3 className={classes.title}>{item.name}</h3>
              <p className={classes.subtitle}>{item.caption}</p>
              <h3 className={classes.mainPrice}>{item.price}</h3>
              <Accordion
                active={0}
                activeColor="secondary"
                collapses={[
                  {
                    title: "Description",
                    content: <p>{item.description}</p>
                  },
                  {
                    title: "Caractéristiques",
                    content: (
                      <ul>
                        {item.specifications.map(spec => (
                          <li key={spec}>{spec}</li>
                        ))}
                      </ul>
                    )
                  }
                ]}
              />
              <GridContainer className={classes.pickSize} />
              <GridContainer className={classes.pullRight}>
                <Button round color="secondary" onClick={() => addItem(item)}>
                  Ajouter au panier &nbsp; <ShoppingCart />
                </Button>
              </GridContainer>
            </GridItem>
          </GridContainer>
        ))}

      <Divider />
    </div>
  );
}
