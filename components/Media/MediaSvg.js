import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(theme => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: props => props.mt && `${props.mt}px`,
    marginBottom: props => props.mb && `${props.mb}px`
  },
  svg: {
    width: props => (props.size === "medium" ? "60%" : props.size === "small" ? "45%" : "100%"),
    height: "100%",
    margin: theme.spacing(2, 0, 0, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      width: "100% !important"
    }
  }
}));

export default function MediaSvg(props) {
  const { src, alt, full, size, mt, mb } = props;
  const classes = useStyles(props);
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={6} md={8} lg={8} className={classes.gridItem}>
        <img src={src} alt={alt} className={classes.svg} />
      </GridItem>
    </GridContainer>
  );
}
