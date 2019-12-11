import React, { useEffect, useContext } from "react";
import ImageGallery from "react-image-gallery";
// core components
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Accordion from "components/Accordion/Accordion";
import CircularProgress from "@material-ui/core/CircularProgress";
// icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// images

import Divider from "@material-ui/core/Divider";
// styles
import { useStyles } from "public/jss/la-flamme-connectee/views/productStyle";
// contexts
import { ShoppingCartContext } from "src/contexts/ShoppingCartContext";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ButtonCustom from "../../../components/CustomButtons/ButtonCustom";
import Title from "../../../components/Typography/Title";

export default function ProductSection({ products }) {
  // const [colorSelect, setColorSelect] = React.useState("Gris anthracite");
  const { addItem } = useContext(ShoppingCartContext);
  const classes = useStyles();

  return (
    <div className={classes.productPage}>
      <GridContainer justify="center">
        <Title variant="h2" className={classes.title}>
          Les produits
        </Title>
      </GridContainer>

      {products ? (
        products.map(item => (
          <GridContainer className={classes.carouselContainer} id="products" key={item.id}>
            <GridItem sm={6} md={6}>
              <ImageGallery showFullscreenButton={false} showPlayButton={false} startIndex={0} items={item.images} />
            </GridItem>
            <GridItem sm={6} md={6}>
              <h3 className={classes.title}>{item.name}</h3>
              <p className={classes.subtitle}>{item.caption}</p>
              <h3 className={classes.mainPrice}>{item.price} €</h3>
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
                      <ul className={classes.list}>
                        {item.specifications.map(spec => (
                          <li key={spec}>{spec}</li>
                        ))}
                      </ul>
                    )
                  }
                ]}
              />
              {/* {item.color && ( */}
              {/*  <GridContainer className={classes.pickSize}> */}
              {/*    <GridItem md={6} sm={6}> */}
              {/*      <label>Couleur</label> */}
              {/*      <FormControl fullWidth className={classes.selectFormControl}> */}
              {/*        <Select */}
              {/*          MenuProps={{ */}
              {/*            className: classes.selectMenu */}
              {/*          }} */}
              {/*          classes={{ */}
              {/*            select: classes.select */}
              {/*          }} */}
              {/*          value={colorSelect} */}
              {/*          onChange={event => handleChange(event, item)} */}
              {/*          inputProps={{ */}
              {/*            name: "colorSelect", */}
              {/*            id: "color-select" */}
              {/*          }} */}
              {/*        > */}
              {/*          <MenuItem */}
              {/*            classes={{ */}
              {/*              root: classes.selectMenuItem, */}
              {/*              selected: classes.selectMenuItemSelected */}
              {/*            }} */}
              {/*            value="Gris anthracite" */}
              {/*          > */}
              {/*            {"Gris anthracite"} */}
              {/*          </MenuItem> */}
              {/*          <MenuItem */}
              {/*            classes={{ */}
              {/*              root: classes.selectMenuItem, */}
              {/*              selected: classes.selectMenuItemSelected */}
              {/*            }} */}
              {/*            value="Noir" */}
              {/*          > */}
              {/*            {"Noir"} */}
              {/*          </MenuItem> */}
              {/*        </Select> */}
              {/*      </FormControl> */}
              {/*    </GridItem> */}
              {/*  </GridContainer> */}
              {/* )} */}
              <GridContainer className={classes.pullRight}>
                <ButtonCustom round color="secondary" onClick={() => addItem(item)} animateButton>
                  Ajouter au panier &nbsp; <ShoppingCart />
                </ButtonCustom>
              </GridContainer>
            </GridItem>
          </GridContainer>
        ))
      ) : (
        <GridContainer justify="center">
          <GridItem md={4} className={classes.center}>
            <CircularProgress color="secondary" />
          </GridItem>
        </GridContainer>
      )}

      <Divider />
    </div>
  );
}
