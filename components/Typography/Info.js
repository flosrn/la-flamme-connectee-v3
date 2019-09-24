import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "static/jss/la-flamme-connectee/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Info(props) {
  const { children } = props;
  const classes = useStyles();
  return <div className={classes.defaultFontStyle + " " + classes.infoText}>{children}</div>;
}

Info.propTypes = {
  children: PropTypes.node
};
