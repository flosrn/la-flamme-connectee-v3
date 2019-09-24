import React, { useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { CardContent, CardActions, Avatar, Typography } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import flo from "static/img/faces/Florian.jpg";
import CardAvatar from "components/Card/CardAvatar";
import CardFooter from "components/Card/CardFooter";
import { ToggleContext } from "../../../../../src/contexts/toggle.context";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlgin: "center"
  },
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  }
}));

function AdressDetails({ profile, className, clickHandler, ...rest }) {
  const classes = useStyles();

  return (
    <Card profile>
      <CardBody>
        {/*<Typography className={classes.name} gutterBottom variant="h5">*/}
        {/*  {profile.name}*/}
        {/*</Typography>*/}
        {/*<Typography color="textSecondary" variant="body1">*/}
        {/*  {profile.email}*/}
        {/*</Typography>*/}
        {/*<Typography color="textSecondary" variant="body2">*/}
        {/*  {profile.role}*/}
        {/*</Typography>*/}
      </CardBody>
    </Card>
  );
}

AdressDetails.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.object.isRequired
};

export default AdressDetails;
