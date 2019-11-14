import React from "react";
import ImageGallery from "react-image-gallery";
// core components
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Accordion from "components/Accordion/Accordion";
// icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// images
import product1 from "static/img/objects/detourage/volcano-flam_front-2.png";
import product2 from "static/img/objects/detourage/flam-connect-pack.png";
import product3 from "static/img/objects/detourage/flamconnect_back.png";
import product4 from "static/img/objects/detourage/flamconnect_front.png";
import product5 from "static/img/objects/detourage/volcano-trio.png";
import product6 from "static/img/objects/detourage/volcano-pack_front.png";
import product7 from "static/img/objects/detourage/volcano-pack_top.png";
import Divider from "@material-ui/core/Divider";
// styles
import { useStyles } from "static/jss/la-flamme-connectee/views/productStyle";

export default function ProductSection() {
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

  return (
    <div className={classes.productPage}>
      <GridContainer justify="center">
        <h1 className={classes.title}>Les produits</h1>
      </GridContainer>
      <GridContainer className={classes.carouselContainer} id="products">
        <GridItem md={6} sm={6}>
          <ImageGallery showFullscreenButton={false} showPlayButton={false} startIndex={0} items={imageCarousel1} />
        </GridItem>
        <GridItem md={6} sm={6}>
          <h3 className={classes.title}>Flam'connect</h3>
          <p className={classes.subtitle}>Livré avec 10 Volcano'connect</p>
          <h3 className={classes.mainPrice}>160 €</h3>
          <Accordion
            active={0}
            activeColor="secondary"
            collapses={[
              {
                title: "Description",
                content: (
                  <p>
                    Boîtier domotique connecté au réseau wifi de votre habitation, il reçoit les commandes de votre
                    smartphone et permet l'allumage du Volcano'connect.
                    <br />
                    Votre foyer bois peut ainsi s'allumer sur demande à distance ou pendant une plage horaire définie
                    par vos soins.
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
                    <li>Frais de port gratuits</li>
                  </ul>
                )
              }
            ]}
          />
          <GridContainer className={classes.pickSize}>
            {/* <GridItem md={6} sm={6}> */}
            {/*  <label>Sélectionner une couleur</label> */}
            {/*  <FormControl fullWidth className={classes.selectFormControl}> */}
            {/*    <Select */}
            {/*      MenuProps={{ */}
            {/*        className: classes.selectMenu */}
            {/*      }} */}
            {/*      classes={{ */}
            {/*        select: classes.select */}
            {/*      }} */}
            {/*      value={colorSelect} */}
            {/*      onChange={event => setColorSelect(event.target.value)} */}
            {/*      inputProps={{ */}
            {/*        name: "colorSelect", */}
            {/*        id: "color-select" */}
            {/*      }} */}
            {/*    > */}
            {/*      <MenuItem */}
            {/*        classes={{ */}
            {/*          root: classes.selectMenuItem, */}
            {/*          selected: classes.selectMenuItemSelected */}
            {/*        }} */}
            {/*        value="0" */}
            {/*      > */}
            {/*        Gris */}
            {/*      </MenuItem> */}
            {/*      <MenuItem */}
            {/*        classes={{ */}
            {/*          root: classes.selectMenuItem, */}
            {/*          selected: classes.selectMenuItemSelected */}
            {/*        }} */}
            {/*        value="1" */}
            {/*      > */}
            {/*        Noir */}
            {/*      </MenuItem> */}
            {/*      <MenuItem */}
            {/*        classes={{ */}
            {/*          root: classes.selectMenuItem, */}
            {/*          selected: classes.selectMenuItemSelected */}
            {/*        }} */}
            {/*        value="2" */}
            {/*      > */}
            {/*        Blanc */}
            {/*      </MenuItem> */}
            {/*    </Select> */}
            {/*  </FormControl> */}
            {/* </GridItem> */}
          </GridContainer>
          <GridContainer className={classes.pullRight}>
            <Button round color="secondary">
              Ajouter au panier &nbsp; <ShoppingCart />
            </Button>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <Divider />
      <GridContainer>
        <GridItem md={6} sm={6}>
          <ImageGallery showFullscreenButton={false} showPlayButton={false} startIndex={0} items={imageCarousel2} />
        </GridItem>
        <GridItem md={6} sm={6}>
          <h3 className={classes.title}>Volcano'connect</h3>
          <p className={classes.subtitle}>Boîte de 24</p>
          <h3 className={classes.mainPrice}>46 €</h3>
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
                      Fabriqué à base de cire végétale naturelle sans O.G.M, de copeaux de chêne, de fibres végétales,
                      de paille et de coton
                    </li>
                    <li>Durée de combustion 10 min</li>
                    <li>Hauteur de flamme 30 à 45 cm</li>
                    <li>Livré dans un carton contenant 24 Volcano'connect</li>
                    <li>Frais de port gratuits</li>
                  </ul>
                )
              }
            ]}
          />
          <GridContainer className={classes.pickSize}>
            <GridItem md={6} sm={6}>
              {/* <label>Sélectionner la taille du carton</label> */}
              {/* <FormControl fullWidth className={classes.selectFormControl}> */}
              {/*  <Select */}
              {/*    MenuProps={{ */}
              {/*      className: classes.selectMenu */}
              {/*    }} */}
              {/*    classes={{ */}
              {/*      select: classes.select */}
              {/*    }} */}
              {/*    value={sizeSelect} */}
              {/*    onChange={event => setSizeSelect(event.target.value)} */}
              {/*    inputProps={{ */}
              {/*      name: "sizeSelect", */}
              {/*      id: "size-select" */}
              {/*    }} */}
              {/*  > */}
              {/*    <MenuItem */}
              {/*      classes={{ */}
              {/*        root: classes.selectMenuItem, */}
              {/*        selected: classes.selectMenuItemSelected */}
              {/*      }} */}
              {/*      value="0" */}
              {/*    > */}
              {/*      Petit */}
              {/*    </MenuItem> */}
              {/*    <MenuItem */}
              {/*      classes={{ */}
              {/*        root: classes.selectMenuItem, */}
              {/*        selected: classes.selectMenuItemSelected */}
              {/*      }} */}
              {/*      value="1" */}
              {/*    > */}
              {/*      Moyen */}
              {/*    </MenuItem> */}
              {/*    <MenuItem */}
              {/*      classes={{ */}
              {/*        root: classes.selectMenuItem, */}
              {/*        selected: classes.selectMenuItemSelected */}
              {/*      }} */}
              {/*      value="2" */}
              {/*    > */}
              {/*      Grand */}
              {/*    </MenuItem> */}
              {/*  </Select> */}
              {/* </FormControl> */}
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.pullRight}>
            {/* <Button round color="secondary"> */}
            {/*  Ajouter au panier &nbsp; <ShoppingCart /> */}
            {/* </Button> */}
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
