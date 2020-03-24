import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";

// core components
import useStyles from "public/jss/la-flamme-connectee/components/headerStyle";
import { Badge } from "@material-ui/core";
import logo from "public/img/logo/laflammeco.png";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { ShoppingCartContext } from "../../src/contexts/ShoppingCartContext";
import GridContainer from "../Grid/GridContainer";

const SwipeableDrawerStyled = withStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%"
  }
}))(SwipeableDrawer);

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: theme.palette.success.main,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid #44b700",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

export default function Header(props) {
  const { user, children } = props;
  const isLoggedIn = Object.keys(user).length !== 0;
  const isAdmin = user.role === "admin";
  const { color, links, fixed, absolute, hiddenLogo } = props;
  const Router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { items } = useContext(ShoppingCartContext);
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "right" || anchor === "bottom"
      })}
      style={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRedirect = () => {
    if (isLoggedIn) {
      Router.push("/settings?tab=profile").then(() => window.scrollTo(0, 0));
    } else {
      Router.push("/login?action=login").then(() => window.scrollTo(0, 0));
    }
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
      hiddenLogo && document.body.querySelector("#brandLogo").classList.remove(classes.hiddenBrandLogo);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
      hiddenLogo && document.body.querySelector("#brandLogo").classList.add(classes.hiddenBrandLogo);
    }
  };
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {children}
        <Button
          className={classNames(classes.brandLogo, hiddenLogo ? classes.hiddenBrandLogo : classes.fixedBrandLogo)}
          id="brandLogo"
        >
          <Link href="/">
            <a>
              <img src={logo} alt="logo" className={classes.brandLogo} />
            </a>
          </Link>
        </Button>
        <Hidden smDown implementation="css" className={classes.hidden}>
          <div className={classes.collapse}>{links}</div>
          {isAdmin && (
            <IconButton color="inherit" href="/dashboard" className={classes.cartIcon}>
              <DashboardIcon className={classes.cartIcon} />
            </IconButton>
          )}
          <IconButton color="inherit" onClick={handleRedirect} className={classes.userIcon}>
            <PersonIcon className={classes.cartIcon} />
            <p>{isLoggedIn && `${user.firstName} ${user.lastName}`}</p>
          </IconButton>
          <IconButton color="inherit" href="/shopping-cart" className={classes.cartIcon}>
            <Badge badgeContent={items.length} color="secondary">
              <ShoppingCartIcon className={classes.cartIcon} />
            </Badge>
          </IconButton>
        </Hidden>
        <Hidden mdUp>
          <div>
            {isAdmin && (
              <IconButton color="inherit" href="/dashboard" className={classes.cartIcon}>
                <DashboardIcon className={classes.cartIcon} />
              </IconButton>
            )}
            <IconButton color="inherit" onClick={handleRedirect} className={classes.userIcon}>
              {isLoggedIn ? (
                <StyledBadge variant="dot">
                  <PersonIcon className={classes.cartIcon} />
                </StyledBadge>
              ) : (
                <PersonIcon className={classes.cartIcon} />
              )}
            </IconButton>
            <IconButton color="inherit" className={classes.cartIcon} onClick={toggleDrawer("right", true)}>
              <Badge badgeContent={items.length} color="secondary">
                <ShoppingCartIcon className={classes.cartIcon} />
              </Badge>
            </IconButton>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
              <Menu className={classes.menuIcon} />
            </IconButton>
          </div>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <SwipeableDrawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          className={classes.drawerRoot}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
        </SwipeableDrawer>
      </Hidden>
      <div>
        <div className={classes.drawerCart}>
          <SwipeableDrawerStyled
            anchor="right"
            open={state.right}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("right", false)}
              className={classes.closeButtonDrawer}
            >
              <Close />
            </IconButton>
            {list("right")}
          </SwipeableDrawerStyled>
        </div>
      </div>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"])
      .isRequired
  })
};
