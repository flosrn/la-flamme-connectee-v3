import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import MediaSvg from "components/Media/MediaSvg";
import svg from "public/img/svg/undraw_smart_home_28oy.svg";
import Fade from "react-reveal/Fade";
import fabricationFrLogo from "../../../public/img/logo/fabrication-francaise.png";
import LayoutSection from "../../../components/Page/LayoutSection";

const useStyles = makeStyles(theme => ({
  bottom: {
    marginTop: 45
  },
  fabricationFr: {
    width: "95%",
    paddingBottom: 30
  }
}));

export default function LearnMoreSection({ isDesktop }) {
  const classes = useStyles();
  return (
    <LayoutSection id="learnMore">
      {/* <Fade spy={isDesktop} bottom cascade ssrFadeout> */}
      <GridContainer justify="center">
        <GridItem xs={10} sm={8} md={6} lg={4} xl={3} center>
          <img src={fabricationFrLogo} alt="fabrication-fr" className={classes.fabricationFr} />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem center>
          <MediaSvg src={svg} alt="smart-home" size="medium" />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.bottom}>
        <GridItem xs={10} sm={8} center>
          <Typography variant="subtitle1" align="center">
            Pour en savoir plus, consultez nos pages{" "}
            <Link href="/documentation">
              <a>Documentation</a>
            </Link>{" "}
            et{" "}
            <Link href="/products">
              <a>Produits</a>
            </Link>
          </Typography>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.bottom}>
        <GridItem xs={10} sm={8} center>
          <Typography variant="subtitle1" align="center">
            Pour toutes questions supplémentaires, vous pouvez vous référer à notre{" "}
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </Typography>
        </GridItem>
      </GridContainer>
      {/* </Fade> */}
    </LayoutSection>
  );
}
