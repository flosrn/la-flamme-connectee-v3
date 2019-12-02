import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import Button from "../CustomButtons/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start"
  },
  socialItem: {
    "& a:first-child": {
      paddingLeft: 0
    }
  }
}));

export default function SocialIcons() {
  const classes = useStyles();
  let innerWidth;
  return (
    <div className={classes.root}>
      <div className={classes.socialItem}>
        <Tooltip
          id="instagram-facebook"
          title="Suivez nous sur facebook"
          placement={innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.navLink}
            href="https://www.facebook.com/laflammeconnectee/"
            target="_blank"
          >
            <i className={`${classes.socialIcons} fab fa-facebook`} />
          </Button>
        </Tooltip>
      </div>
      <div className={classes.socialItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Suivez nous sur instagram"
          placement={innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.navLink}
            href="https://www.instagram.com/laflammeconnectee/"
            target="_blank"
          >
            <i className={`${classes.socialIcons} fab fa-instagram`} />
          </Button>
        </Tooltip>
      </div>
      <div className={classes.socialItem}>
        <Tooltip
          id="instagram-youtube"
          title="Suivez nous sur youtube"
          placement={innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.navLink}
            href="https://www.youtube.com/channel/UC8no0n6Z_w6QG5s_2kMoV5A/"
            target="_blank"
          >
            <i className={`${classes.socialIcons} fab fa-youtube`} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
