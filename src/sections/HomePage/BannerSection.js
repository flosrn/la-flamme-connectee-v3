import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import svg1 from "/public/img/svg/icons/packing.svg";
import svg2 from "/public/img/svg/icons/secure.svg";
import svg3 from "/public/img/svg/icons/like.svg";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import ButtonCustom from "components/CustomButtons/ButtonCustom";
import LayoutSection from "../../../components/Page/LayoutSection";

const useStyles = makeStyles(theme => ({
  infoContainer: {
    padding: "60px 0",
    background: "#f9f9f9",
    margin: 0,
    "@media (max-width: 830px)": {
      margin: "0 -15px"
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px 0"
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 40px 0 20px",
    width: 170,
    [theme.breakpoints.up("md")]: {
      width: "auto",
      padding: "auto"
    },
    "& strong": {
      color: theme.palette.secondary.main
    }
  },
  svg: {
    width: 60
  },
  test: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
    [theme.breakpoints.up("md")]: {
      flex: 1
    }
  },
  bannerContainer: {
    background: "radial-gradient(ellipse at center,#585858 0,#232323 100%)",
    backgroundColor: "#343434",
    height: 130,
    margin: 0,
    "@media (max-width: 830px)": {
      margin: "0 -15px"
    }
  }
}));

export default function BannerSection({ isDesktop }) {
  const classes = useStyles();
  return (
    <LayoutSection id="banner">
      {/* <Fade spy={isDesktop} bottom cascade ssrFadeout> */}
      <GridItem>
        <GridContainer justify="center" className={classes.infoContainer}>
          <GridItem md={4} className={classes.item}>
            <div className={classes.test}>
              <img src={svg1} alt="svg1" className={classes.svg} />
              <div className={classes.desc}>
                <Typography variant="h4">Expédition</Typography>
                <Typography variant="body1">
                  sous <strong>48H</strong>
                </Typography>
              </div>
            </div>
          </GridItem>
          <GridItem md={4} className={classes.item}>
            <div className={classes.test}>
              <img src={svg2} alt="svg2" className={classes.svg} />
              <div className={classes.desc}>
                <Typography variant="h4">Paiement</Typography>
                <Typography variant="body1">
                  100% sécurisé par <strong>SSL</strong>
                </Typography>
              </div>
            </div>
          </GridItem>
          <GridItem md={4} className={classes.item}>
            <div className={classes.test}>
              <img src={svg3} alt="svg3" className={classes.svg} />
              <div className={classes.desc}>
                <Typography variant="h4">Satisfait</Typography>
                <Typography variant="body1">
                  ou remboursé pendant <strong>30j</strong>
                </Typography>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={classes.bannerContainer}>
          <GridItem center>
            <Link href="/products">
              <ButtonCustom color="secondary" animateButton>
                <ShoppingCartIcon />
                Commander maintenant
              </ButtonCustom>
            </Link>
          </GridItem>
        </GridContainer>
      </GridItem>
      {/* </Fade> */}
    </LayoutSection>
  );
}
