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
import EcoIcon from "@material-ui/icons/Eco";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import EuroIcon from "@material-ui/icons/Euro";
import Favorite from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

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

import { useStyles } from "static/jss/la-flamme-connectee/views/productStyle";
import imageBackground from "static/img/contura/background-contura.jpg";

// images
import product1 from "static/img/objects/detourage/volcano-flam_front-2.png";
import product2 from "static/img/objects/detourage/flamconnect_front.png";
import product3 from "static/img/objects/detourage/flamconnect_back.png";
import product4 from "static/img/objects/detourage/flam-connect-pack.png";
import product5 from "static/img/objects/detourage/volcano-trio.png";
import product6 from "static/img/objects/detourage/volcano-pack_front.png";
import product7 from "static/img/objects/detourage/volcano-pack_top.png";

import FooterCustom from "../components/Footer/FooterCustom";
import MediaSvg from "../components/Media/MediaSvg";

import svg1 from "static/img/svg/undraw_creative_process_q6aw.svg";
import svg2 from "static/img/svg/undraw_add_to_cart_vkjp.svg";
import Divider from "@material-ui/core/Divider";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "../static/img/logo/laflammeco.png";

export default function ProductPage() {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();
  const imageCarousel1 = [
    {
      original: product1,
      thumbnail: product1
    },
    {
      original: product2,
      thumbnail: product2
    },
    {
      original: product3,
      thumbnail: product3
    },
    {
      original: product4,
      thumbnail: product4
    }
  ];

  const imageCarousel2 = [
    {
      original: product5,
      thumbnail: product5
    },
    {
      original: product6,
      thumbnail: product6
    },
    {
      original: product7,
      thumbnail: product7
    }
  ];

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollTo = (element, to, duration) => {
    const start = element.scrollTop;
    const change = to - start + document.getElementById("main-panel").offsetTop;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const smoothScroll = target => {
    const targetScroll = document.getElementById(target);
    scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  };

  return (
    <div className={classes.productPage}>
      <Header
        brand="La Flamme Connectée"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 120,
          color: "white"
        }}
      />
      <Parallax image={imageBackground} filter="dark" className={classes.parallax}>
        <div className={classes.containerBackground}>
          <div className={classes.titleContainer}>
            <GridItem xs={12} sm={12} md={12} center id="title">
              <Typography variant="h3" align="center" className={classes.parallaxTitle}>
                Les produits
              </Typography>
            </GridItem>
          </div>
        </div>
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)} id="main-panel">
            <div className={classes.scrollDownContainer}>
              <IconButton className={classes.scrollDownButton} onClick={() => smoothScroll("products")}>
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </div>
            <MediaSvg src={svg2} alt="add-to-cart" size="medium" />
            <GridContainer justify="center">
              <h1 className={classes.title}>Les produits</h1>
            </GridContainer>
            <GridContainer className={classes.carouselContainer} id="products">
              <GridItem md={6} sm={6}>
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  startIndex={0}
                  items={imageCarousel1}
                />
              </GridItem>
              <GridItem md={6} sm={6}>
                <h3 className={classes.title}>Flam'connect</h3>
                <h3 className={classes.mainPrice}>250 €</h3>
                <Accordion
                  active={0}
                  activeColor="secondary"
                  collapses={[
                    {
                      title: "Description",
                      content: (
                        <p>
                          Boîtier domotique connecté au réseau wifi de votre habitation, il reçoit les commandes de
                          votre smartphone et permet l'allumage du Volcano'connect.
                          <br />
                          Votre foyer bois peut ainsi s'allumer sur demande à distance ou pendant une plage horaire
                          définie par vos soins.
                        </p>
                      )
                    },
                    {
                      title: "Caractéristiques",
                      content: (
                        <ul>
                          <li>Imprimé par nos imprimantes 3D en région Toulousaine</li>
                          <li>Boîtier plastique recyclable (matière PLA)</li>
                          <li>Électronique conçue et réalisée par nos soins</li>
                          <li>Livré dans un carton contenant 10 Volcano'connect</li>
                          <li>Satisfait ou remboursé</li>
                          <li>Frais de ports gratuits</li>
                        </ul>
                      )
                    }
                  ]}
                />
                <GridContainer className={classes.pickSize}>
                  {/*<GridItem md={6} sm={6}>*/}
                  {/*  <label>Sélectionner une couleur</label>*/}
                  {/*  <FormControl fullWidth className={classes.selectFormControl}>*/}
                  {/*    <Select*/}
                  {/*      MenuProps={{*/}
                  {/*        className: classes.selectMenu*/}
                  {/*      }}*/}
                  {/*      classes={{*/}
                  {/*        select: classes.select*/}
                  {/*      }}*/}
                  {/*      value={colorSelect}*/}
                  {/*      onChange={event => setColorSelect(event.target.value)}*/}
                  {/*      inputProps={{*/}
                  {/*        name: "colorSelect",*/}
                  {/*        id: "color-select"*/}
                  {/*      }}*/}
                  {/*    >*/}
                  {/*      <MenuItem*/}
                  {/*        classes={{*/}
                  {/*          root: classes.selectMenuItem,*/}
                  {/*          selected: classes.selectMenuItemSelected*/}
                  {/*        }}*/}
                  {/*        value="0"*/}
                  {/*      >*/}
                  {/*        Gris*/}
                  {/*      </MenuItem>*/}
                  {/*      <MenuItem*/}
                  {/*        classes={{*/}
                  {/*          root: classes.selectMenuItem,*/}
                  {/*          selected: classes.selectMenuItemSelected*/}
                  {/*        }}*/}
                  {/*        value="1"*/}
                  {/*      >*/}
                  {/*        Noir*/}
                  {/*      </MenuItem>*/}
                  {/*      <MenuItem*/}
                  {/*        classes={{*/}
                  {/*          root: classes.selectMenuItem,*/}
                  {/*          selected: classes.selectMenuItemSelected*/}
                  {/*        }}*/}
                  {/*        value="2"*/}
                  {/*      >*/}
                  {/*        Blanc*/}
                  {/*      </MenuItem>*/}
                  {/*    </Select>*/}
                  {/*  </FormControl>*/}
                  {/*</GridItem>*/}
                </GridContainer>
                <GridContainer className={classes.pullRight}>
                  {/*<Button round color="secondary">*/}
                  {/*  Ajouter au panier &nbsp; <ShoppingCart />*/}
                  {/*</Button>*/}
                </GridContainer>
              </GridItem>
            </GridContainer>
            <Divider />
            <GridContainer>
              <GridItem md={6} sm={6}>
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  startIndex={0}
                  items={imageCarousel2}
                />
              </GridItem>
              <GridItem md={6} sm={6}>
                <h3 className={classes.title}>Volcano'connect</h3>
                <h3 className={classes.mainPrice}>50 €</h3>
                <Accordion
                  active={0}
                  activeColor="secondary"
                  collapses={[
                    {
                      title: "Description",
                      content: (
                        <p>
                          Allume feu qui reçoit l'impulsion de votre smartphone via le Flam'connect. Il brûle à chaque
                          allumage
                        </p>
                      )
                    },
                    {
                      title: "Caractéristiques",
                      content: (
                        <ul>
                          <li>Fabrication artisanale française (Loire-Atlantique)</li>
                          <li>Allume feu écologique et original</li>
                          <li>
                            Fabriqué à base de cire végétale naturelle sans O.G.M, de copeaux de chêne, de fibres
                            végétales et de paille
                          </li>
                          <li>Émane une douce odeur de bois naturelle et agréable</li>
                          <li>Durée de combustion 10 min</li>
                          <li>Hauteur de flamme 30 à 45 cm</li>
                          <li>Livré dans un carton contenant 24 Volcano'connect</li>
                          <li>Frais de ports gratuits</li>
                        </ul>
                      )
                    }
                  ]}
                />
                <GridContainer className={classes.pickSize}>
                  <GridItem md={6} sm={6}>
                    {/*<label>Sélectionner la taille du carton</label>*/}
                    {/*<FormControl fullWidth className={classes.selectFormControl}>*/}
                    {/*  <Select*/}
                    {/*    MenuProps={{*/}
                    {/*      className: classes.selectMenu*/}
                    {/*    }}*/}
                    {/*    classes={{*/}
                    {/*      select: classes.select*/}
                    {/*    }}*/}
                    {/*    value={sizeSelect}*/}
                    {/*    onChange={event => setSizeSelect(event.target.value)}*/}
                    {/*    inputProps={{*/}
                    {/*      name: "sizeSelect",*/}
                    {/*      id: "size-select"*/}
                    {/*    }}*/}
                    {/*  >*/}
                    {/*    <MenuItem*/}
                    {/*      classes={{*/}
                    {/*        root: classes.selectMenuItem,*/}
                    {/*        selected: classes.selectMenuItemSelected*/}
                    {/*      }}*/}
                    {/*      value="0"*/}
                    {/*    >*/}
                    {/*      Petit*/}
                    {/*    </MenuItem>*/}
                    {/*    <MenuItem*/}
                    {/*      classes={{*/}
                    {/*        root: classes.selectMenuItem,*/}
                    {/*        selected: classes.selectMenuItemSelected*/}
                    {/*      }}*/}
                    {/*      value="1"*/}
                    {/*    >*/}
                    {/*      Moyen*/}
                    {/*    </MenuItem>*/}
                    {/*    <MenuItem*/}
                    {/*      classes={{*/}
                    {/*        root: classes.selectMenuItem,*/}
                    {/*        selected: classes.selectMenuItemSelected*/}
                    {/*      }}*/}
                    {/*      value="2"*/}
                    {/*    >*/}
                    {/*      Grand*/}
                    {/*    </MenuItem>*/}
                    {/*  </Select>*/}
                    {/*</FormControl>*/}
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.pullRight}>
                  {/*<Button round color="secondary">*/}
                  {/*  Ajouter au panier &nbsp; <ShoppingCart />*/}
                  {/*</Button>*/}
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
          <FooterCustom />
        </div>
      </div>
    </div>
  );
}
