/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "static/jss/la-flamme-connectee/views/productStyle";

// images
import cardProduct1 from "static/img/objects/phone.jpg";
import cardProduct3 from "static/img/objects/phone.jpg";
import cardProduct4 from "static/img/objects/phone.jpg";
import cardProduct2 from "static/img/objects/phone.jpg";
import product1 from "static/img/objects/box.png";
import product2 from "static/img/objects/box.png";
import product3 from "static/img/objects/phone.jpg";
import product4 from "static/img/objects/phone.jpg";

const useStyles = makeStyles(productStyle);

export default function ProductPage() {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();
  const images = [
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product1,
      thumbnail: product1
    }
  ];
  return (
    <div className={classes.productPage}>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
      />
      <Parallax image={require("static/img/stoves/stove1.png")} filter="dark" className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer className={classes.titleRow}>
            <GridItem md={4} className={classes.mlAuto}>
              <Button color="white" className={classes.floatRight}>
                <ShoppingCart /> 0 items
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <ImageGallery showFullscreenButton={false} showPlayButton={false} startIndex={3} items={images} />
              </GridItem>
              <GridItem md={6} sm={6}>
                <h2 className={classes.title}>Flamme Connect</h2>
                <h3 className={classes.mainPrice}>240 €</h3>
                <Accordion
                  active={0}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Description",
                      content: (
                        <p>
                          Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit has the fit and coverage of a bikini in a
                          one-piece silhouette. This fuchsia style is crafted from the label{"'"}s sculpting peau douce
                          fabric and has flattering cutouts through the torso and back. Wear yours with mirrored
                          sunglasses on vacation.
                        </p>
                      )
                    },
                    {
                      title: "Designer Information",
                      content: (
                        <p>
                          An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It
                          girl style. Minkoff burst on the fashion scene with her best-selling {"'"}Morning After Bag
                          {"'"} and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe
                          city staples with a {'"'}
                          downtown romantic{'"'} theme.
                        </p>
                      )
                    },
                    {
                      title: "Details and Care",
                      content: (
                        <ul>
                          <li>Storm and midnight-blue stretch cotton-blend</li>
                          <li>
                            Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal
                            pocket
                          </li>
                          <li>Two button fastening</li>
                          <li>84% cotton, 14% nylon, 2% elastane</li>
                          <li>Dry clean</li>
                        </ul>
                      )
                    }
                  ]}
                />
                <GridContainer className={classes.pickSize}>
                  <GridItem md={6} sm={6}>
                    <label>Select color</label>
                    <FormControl fullWidth className={classes.selectFormControl}>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={colorSelect}
                        onChange={event => setColorSelect(event.target.value)}
                        inputProps={{
                          name: "colorSelect",
                          id: "color-select"
                        }}
                      >
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="0"
                        >
                          Rose
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          Gray
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          White
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem md={6} sm={6}>
                    <label>Select size</label>
                    <FormControl fullWidth className={classes.selectFormControl}>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={sizeSelect}
                        onChange={event => setSizeSelect(event.target.value)}
                        inputProps={{
                          name: "sizeSelect",
                          id: "size-select"
                        }}
                      >
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="0"
                        >
                          Small
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          Medium
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Large
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.pullRight}>
                  <Button round color="rose">
                    Add to Cart &nbsp; <ShoppingCart />
                  </Button>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classNames(classes.features, classes.textCenter)}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="2 Days Delivery"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={LocalShipping}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Refundable Policy"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={VerifiedUser}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Popular Item"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={Favorite}
                  iconColor="rose"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        // theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="https://www.creative-tim.com/?ref=mkpr-pricing" target="_blank" className={classes.block}>
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} /> by{" "}
              <a href="https://www.creative-tim.com?ref=mkpr-pricing" target="_blank" className={classes.aClasses}>
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
