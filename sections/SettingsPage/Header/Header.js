import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

function Header(props) {
  const { title, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="h4" gutterBottom>
        Paramètres de compte
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" align="center">
          {title}
        </Typography>
      </Box>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
