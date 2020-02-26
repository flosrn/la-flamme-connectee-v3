import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
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
import DoneIcon from "@material-ui/icons/Done";
import { getProducts } from "api/apiRequests";
import ReactGA from "react-ga";
import Typography from "@material-ui/core/Typography";
import ButtonCustom from "../../../components/CustomButtons/ButtonCustom";
import Title from "../../../components/Typography/Title";
import CustomSnackBar from "../../../components/Snackbar/CustomSnackBar";
import redirectTo from "../../../utils/redirectTo";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState(null);
  const [sizeSelect, setSizeSelect] = React.useState("24");
  const [open, setOpen] = React.useState(false);
  const { addItem } = useContext(ShoppingCartContext);
  const classes = useStyles();

  useEffect(() => {
    getProducts({ setProducts });
  }, []);

  const handleClick = item => {
    addItem(item);
    setOpen(true);
    setProductSelected(item.name);
    global.analytics.track(`${item.name} ajouté au panier`, {
      action: "add_to_cart",
      category: "ecommerce",
      location: "all_products_page",
      product_name: item.name,
      value: item.price
    });
  };

  const handleChange = (event, item) => {
    setSizeSelect(event.target.value);
    const newPrice = event.target.value === "12" ? 25 : 46;
    const productsDestructured = [...products];
    const newItem = productsDestructured.find(product => product.id === item.id);
    const arr = productsDestructured.map(product =>
      product.id === newItem.id
        ? Object.assign({}, product, {
            caption: `Boîte de ${event.target.value}`,
            size: event.target.value,
            price: newPrice
          })
        : item
    );
    arr.splice(products[0], 1);
    const newArr = [];
    newArr.push(products[0]);
    setProducts(newArr.concat(arr));
  };

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
              <Link href="/products/[id]" as={`/products/${item.id}`}>
                <a>
                  <h3 className={clsx(classes.title, "productName")}>{item.name}</h3>
                </a>
              </Link>
              <p className={classes.subtitle}>{item.caption}</p>
              <h3 className={classes.mainPrice}>{item.price} €</h3>
              <Accordion
                active={0}
                activeColor="secondary"
                collapses={[
                  {
                    title: "Description",
                    content: <Typography variant="body2">{item.description}</Typography>
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
              {/* {item.name === "Volcano'connect" && ( */}
              {/*  <GridContainer className={classes.pickSize}> */}
              {/*    <GridItem md={6} sm={6}> */}
              {/*      <label>Quantité d'allumes-feux</label> */}
              {/*      <FormControl fullWidth className={classes.selectFormControl}> */}
              {/*        <Select */}
              {/*          MenuProps={{ */}
              {/*            className: classes.selectMenu */}
              {/*          }} */}
              {/*          classes={{ */}
              {/*            select: classes.select */}
              {/*          }} */}
              {/*          value={sizeSelect} */}
              {/*          onChange={event => handleChange(event, item)} */}
              {/*          inputProps={{ */}
              {/*            name: "sizeSelect", */}
              {/*            id: "size-select" */}
              {/*          }} */}
              {/*        > */}
              {/*          <MenuItem */}
              {/*            classes={{ */}
              {/*              root: classes.selectMenuItem, */}
              {/*              selected: classes.selectMenuItemSelected */}
              {/*            }} */}
              {/*            value="24" */}
              {/*          > */}
              {/*            24 */}
              {/*          </MenuItem> */}
              {/*          <MenuItem */}
              {/*            classes={{ */}
              {/*              root: classes.selectMenuItem, */}
              {/*              selected: classes.selectMenuItemSelected */}
              {/*            }} */}
              {/*            value="12" */}
              {/*          > */}
              {/*            12 */}
              {/*          </MenuItem> */}
              {/*        </Select> */}
              {/*      </FormControl> */}
              {/*    </GridItem> */}
              {/*  </GridContainer> */}
              {/* )} */}
              <GridContainer className={classes.pullRight}>
                <ButtonCustom
                  round
                  color="secondary"
                  onClick={() => handleClick(item)}
                  animateButton
                  className="addCartButton"
                >
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
      <CustomSnackBar
        message={`${productSelected} ajouté au panier !`}
        open={open}
        duration={5000}
        clickHandler={() => redirectTo("/shopping-cart")}
        closeHandler={() => setOpen(false)}
        id="addToCartAlert"
      />
    </div>
  );
}
