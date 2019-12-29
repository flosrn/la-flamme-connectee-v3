import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ButtonCustom from "../../../components/CustomButtons/ButtonCustom";

const useStyles = makeStyles(theme => ({
  bannerContainer: {
    // background: "radial-gradient(ellipse at center,#585858 0,#232323 100%)",
    // backgroundSize: "550% 450%",
    // backgroundColor: "#343434",
    height: 100,
    margin: 0
  }
}));

export default function BannerSection() {
  const classes = useStyles();
  return (
    <GridContainer justify="center" className={classes.bannerContainer}>
      <GridItem center>
        <ButtonCustom color="secondary" animateButton>
          Passer commande
        </ButtonCustom>
      </GridItem>
    </GridContainer>
  );
}
