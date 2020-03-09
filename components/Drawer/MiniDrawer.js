import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from "@material-ui/icons/Description";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import WebIcon from "@material-ui/icons/Web";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";

const drawerWidth = 185;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 0
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: `${drawerWidth} !important`,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9) + 1
    // }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(10),
    "& span": {
      visibility: openDrawer => (openDrawer ? "visible" : "hidden")
    }
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function MiniDrawer({ currentUser }) {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);
  const [open, setOpen] = useState({ mail: false, blog: false });
  const classes = useStyles(openDrawer);

  useEffect(() => {
    setOpen({ mail: false, blog: false });
  }, [openDrawer]);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
    setForceOpen(!forceOpen);
  };

  const handleDrawerOpen = () => {
    !forceOpen && setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    !forceOpen && setOpenDrawer(false);
  };

  const handleClick = el => {
    setOpen({
      ...open,
      [el]: !open[el]
    });
  };

  return (
    <>
      <Header
        color="dark"
        brand="La Flamme Connectée"
        links={<HeaderLinks user={currentUser} />}
        fixed
        user={currentUser}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Header>
      <Drawer
        variant="permanent"
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer
          })
        }}
      >
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Commandes" />
          </ListItem>
          <ListItem button onClick={() => handleClick("mail")}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
            {openDrawer && <>{open.mail ? <ExpandLess /> : <ExpandMore />}</>}
          </ListItem>
          <Collapse in={open.mail} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Rédiger un mail" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick("blog")}>
            <ListItemIcon>
              <WebIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
            {openDrawer && <>{open.blog ? <ExpandLess /> : <ExpandMore />}</>}
          </ListItem>
          <Collapse in={open.blog} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <TextFieldsIcon />
                </ListItemIcon>
                <ListItemText primary="Écrire un blog" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
}
