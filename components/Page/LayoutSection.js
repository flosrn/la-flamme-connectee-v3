import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Title from "../Typography/Title";

const useStyles = makeStyles(theme => ({
  section: {
    padding: "35px 0",
    textAlign: "center"
  },
  titleContainer: {
    paddingTop: props => props.mt && `${props.mt}px`
  },
  sectionCover: {
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "left bottom",
    // backgroundAttachment: "fixed",
    position: "relative",
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      backgroundColor: "rgba(0,0,0,.6)"
    },
    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "10% bottom",
      margin: "0 -15px"
    }
  },
  description: {
    paddingBottom: 30
  }
}));

export default function LayoutSection(props) {
  const { title, id, desc, image, mt, children } = props;
  const classes = useStyles(props);

  const sectionClasses = clsx({
    [classes.section]: true,
    [classes.sectionCover]: image
  });

  return (
    <div className={sectionClasses} id={id} style={{ backgroundImage: `url(${image})` }}>
      {title && (
        <GridContainer justify="center" className={classes.titleContainer}>
          <GridItem xs={12} sm={12} md={8} center>
            <Title variant="h1" color={!image ? "initial" : "textSecondary"}>
              {title}
            </Title>
          </GridItem>
        </GridContainer>
      )}
      {desc && (
        <GridContainer justify="center">
          <GridItem xs={10} sm={8} md={6} lg={5} center>
            <Typography variant="body1" className={classes.description}>
              {desc[0].text}
            </Typography>
          </GridItem>
        </GridContainer>
      )}
      <GridContainer justify="center">{children}</GridContainer>
    </div>
  );
}
