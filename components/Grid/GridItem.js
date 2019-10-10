import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function GridItem(props) {
  const { children, className, center, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid item {...rest} className={`${classes.grid} ${center && classes.center} ${className}`}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
