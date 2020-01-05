import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import MediaSvg from "components/Media/MediaSvg";
import svg from "public/img/svg/undraw_smart_home_28oy.svg";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "70px 0",
    paddingTop: 0
  },
  bottom: {
    marginTop: 45
  }
}));

export default function LearnMoreSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer justify="center">
        <GridItem center>
          <MediaSvg src={svg} alt="smart-home" size="medium" />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.bottom}>
        <GridItem center>
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
    </div>
  );
}
