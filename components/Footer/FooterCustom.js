import React from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Favorite from "@material-ui/icons/Favorite";
import Button from "../CustomButtons/Button";
import Footer from "./Footer";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(theme => ({
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    display: "flex"
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end"
    }
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start"
    }
  },
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  },
  inlineBlock: {
    padding: 0
  },
  sousTextFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      // display: "block"
    }
  }
}));

function FooterCustom() {
  const classes = useStyles();
  let innerWidth;
  return (
    <Footer
      content={
        <GridContainer>
          <GridItem xs={12}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={4} md={5} className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Tooltip
                      id="instagram-twitter"
                      title="Suivez nous sur twitter"
                      placement={innerWidth > 959 ? "top" : "left"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" className={classes.navLink}>
                        <i className={`${classes.socialIcons} fab fa-twitter`} />
                      </Button>
                    </Tooltip>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Tooltip
                      id="instagram-facebook"
                      title="Suivez nous sur facebook"
                      placement={innerWidth > 959 ? "top" : "left"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" className={classes.navLink}>
                        <i className={`${classes.socialIcons} fab fa-facebook`} />
                      </Button>
                    </Tooltip>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Tooltip
                      id="instagram-tooltip"
                      title="Suivez nous sur instagram"
                      placement={innerWidth > 959 ? "top" : "left"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" className={classes.navLink}>
                        <i className={`${classes.socialIcons} fab fa-instagram`} />
                      </Button>
                    </Tooltip>
                  </ListItem>
                </List>
              </GridItem>
              <GridItem center xs={12} sm={8} md={7} className={classes.right}>
                <div className={classes.sousTextFooter}>
                  <strong>La Flamme Connectée</strong>
                  &copy; {1900 + new Date().getYear()},{" "}
                </div>
                <div className={classes.sousTextFooter}>
                  {" "}
                  made with <Favorite style={{ color: "red", padding: "2px", margin: "2px" }} /> by
                  <a href="https://www.linkedin.com/in/florian-seran" target="_blank" style={{ paddingLeft: "2px" }}>
                    Florian SÉRAN
                  </a>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      }
    />
  );
}

export default FooterCustom;
