import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
// styles
import InstagramEmbed from "react-instagram-embed";
import { Typography } from "@material-ui/core";
import Title from "../../../components/Typography/Title";

const urls = [
  "https://www.instagram.com/p/B6nz3PFIL0Q/",
  "https://www.instagram.com/p/B65bnY0IPzH/",
  "https://www.instagram.com/p/B6sspTKocYN/",
  "https://www.instagram.com/p/B6sviA2IzuL/"
];

const useStyles = makeStyles(theme => ({
  section: {
    paddingBottom: 50
  },
  gridItem: {
    flexDirection: "column"
  },
  actionContainer: {
    // width: "100%",
    display: "flex"
  },
  text: {
    margin: "0 0 20px 0",
    textAlign: "center"
  }
}));

export default function InstagramSection() {
  const [index, setIndex] = useState(1);
  const classes = useStyles();

  // const handlePrevious = () => {
  //   if (index <= -1) {
  //     return setIndex(urls.length);
  //   }
  //   setIndex(index - 1);
  // };
  //
  // const handleNext = () => {
  //   if (index >= urls.length) {
  //     return setIndex(0);
  //   }
  //   setIndex(index + 1);
  // };

  return (
    <div className={classes.section} id="instagram">
      <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={8} lg={6} center className={classes.gridItem}>
          <Title variant="h2">Notre instagram</Title>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={10} sm={10} md={8} lg={6} center className={classes.gridItem}>
          <Typography variant="body1" className={classes.text}>
            Venez nous suivre sur instagram pour être tenus au courant de nos dernières actus 😊
          </Typography>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9} lg={7} center className={classes.gridItem}>
          <InstagramEmbed
            url={urls[index]}
            // maxWidth={500}
            hideCaption
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
          {/* <div className={classes.actionContainer}> */}
          {/*  <Button onClick={handlePrevious}>Photo précédente</Button> */}
          {/*  <Button onClick={handleNext}>Photo suivante</Button> */}
          {/* </div> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}

// style={{ justifyContent: index !== urls.length ? "flex-end" : "flex-start" }}
// style={{ display: index <= 0 ? "none" : "inline-flex" }}
// style={{ display: index >= urls.length ? "none" : "inline-flex" }}
