/* eslint-disable */
import React, { useEffect, useContext } from "react";
// nodejs library to set properties for components
// react components for routing our app without refresh
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// import Button from "@material-ui/core/Button";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Home from "@material-ui/icons/Home";
import Description from "@material-ui/icons/Description";
import Mail from "@material-ui/icons/Mail";
import ExitToApp from "@material-ui/icons/ExitToApp";
import DownloadIcon from "@material-ui/icons/CloudDownload";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HelpIcon from "@material-ui/icons/Help";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import Button from "components/CustomButtons/Button";

import styles from "static/jss/la-flamme-connectee/components/headerLinksStyle";

import axios from "axios";
import Swal from "sweetalert2";
import redirectTo from "src/lib/redirectTo";
import Cookies from "js-cookie";

const useStyles = makeStyles(styles);

// contexts
import { ScrollContext } from "src/contexts/scroll.context";
import ButtonLink from "../CustomButtons/ButtonLink";
import getHost from "../../server/api/get-host";

export default function HeaderLinks({ isLoggedIn, user, isEditSuccess, ...props }) {
  const handleLogout = event => {
    event.preventDefault();
    axios.get(`${getHost()}/auth/logout`).then(response => {
      console.log("response : ", response);
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        timer: 4000
      });
      if (response.data.status === "success") {
        Cookies.set("token", "loggedOut");
      }
      redirectTo("/");
    });
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    console.log(target);
    if (window.location.pathname === "/documentation") {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        // e.preventDefault();
        var targetScroll = document.getElementById(target);
        console.log(targetScroll);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button component={ButtonLink} href="/" className={classes.navLink} color="transparent">
          <Home className={classes.icons} /> Accueil
        </Button>
      </ListItem>
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button component={ButtonLink} href="/documentation" className={classes.navLink} color="transparent">*/}
      {/*    <Description className={classes.icons} /> Documentation*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
      <ListItem className={classes.listItem}>
        <Button component={ButtonLink} href="/products" className={classes.navLink} color="transparent">
          <ShoppingBasketIcon className={classes.icons} /> Produits
        </Button>
      </ListItem>
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button component={ButtonLink} href="/download" className={classes.navLink} color="transparent">*/}
      {/*    <DownloadIcon className={classes.icons} /> Téléchargement*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button component={ButtonLink} href="/contact" className={classes.navLink} color="transparent">*/}
      {/*    <Mail className={classes.icons} /> Contact*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Aide"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={HelpIcon}
          dropdownList={[
            <Link href="/documentation">
              <a className={classes.dropdownLink}>
                <Description className={classes.dropdownIcons} /> Documentation
              </a>
            </Link>,
            <Link href="/download">
              <a className={classes.dropdownLink}>
                <DownloadIcon className={classes.dropdownIcons} /> Téléchargement
              </a>
            </Link>,
            <Link href="/contact">
              <a className={classes.dropdownLink}>
                <Mail className={classes.dropdownIcons} /> Contact
              </a>
            </Link>
          ]}
        />
      </ListItem>
      {/*{isLoggedIn ? (*/}
      {/*  <>*/}
      {/*    <ListItem className={classes.listItem}>*/}
      {/*      <CustomDropdown*/}
      {/*        noLiPadding*/}
      {/*        navDropdown*/}
      {/*        hoverColor={dropdownHoverColor}*/}
      {/*        buttonText="Mon profil"*/}
      {/*        buttonProps={{*/}
      {/*          className: classes.navLink,*/}
      {/*          color: "transparent"*/}
      {/*        }}*/}
      {/*        buttonIcon={Apps}*/}
      {/*        dropdownList={[*/}
      {/*          <Link href="/settings" as="/settings?tab=profile">*/}
      {/*            <a className={classes.dropdownLink}>*/}
      {/*              <AccountCircle className={classes.dropdownIcons} /> {user.firstName} {user.lastName}*/}
      {/*            </a>*/}
      {/*          </Link>,*/}
      {/*          <a className={classes.dropdownLink} onClick={handleLogout}>*/}
      {/*            <ExitToApp className={classes.dropdownIcons} /> Déconnexion*/}
      {/*          </a>*/}
      {/*        ]}*/}
      {/*      />*/}
      {/*    </ListItem>*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <ListItem className={classes.listItem}>*/}
      {/*      <Button component={ButtonLink} href="/login" className={classes.navLink} color="transparent">*/}
      {/*        <AccountCircle className={classes.icons} /> Se Connecter*/}
      {/*      </Button>*/}
      {/*    </ListItem>*/}
      {/*    /!*<ListItem className={classes.listItem}>*!/*/}
      {/*    /!*  <Button component={ButtonLink} href="/signup" className={classes.navLink} color="transparent">*!/*/}
      {/*    /!*    <Assignment className={classes.icons} /> Inscription*!/*/}
      {/*    /!*  </Button>*!/*/}
      {/*    /!*</ListItem>*!/*/}
      {/*  </>*/}
      {/*)}*/}
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};
