import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "public/jss/la-flamme-connectee";

const headerStyle = theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: grayColor[15],
    width: "100%",
    backgroundColor: whiteColor,
    boxShadow: `0 4px 18px 0px rgba(${hexToRgb(blackColor)}, 0.12), 0 7px 10px -5px rgba(${hexToRgb(
      blackColor
    )}, 0.15)`,
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  absolute: {
    position: "absolute",
    top: "auto"
  },
  fixed: {
    position: "fixed"
  },
  container: {
    ...container,
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
    flexWrap: "nowrap",
    margin: "0 !important",
    maxWidth: "100% !important"
  },
  title: {
    letterSpacing: "unset",
    "&,& a": {
      ...defaultFont,
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    }
  },
  appResponsive: {
    margin: "20px 10px",
    marginTop: "0px"
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      primaryColor[0]
    )}, 0.46)`
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      infoColor[0]
    )}, 0.46)`
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      successColor[0]
    )}, 0.46)`
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      warningColor[0]
    )}, 0.46)`
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      dangerColor[0]
    )}, 0.46)`
  },
  rose: {
    backgroundColor: roseColor[0],
    color: whiteColor,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      roseColor[0]
    )}, 0.46)`
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    color: whiteColor
  },
  dark: {
    color: whiteColor,
    backgroundColor: `${grayColor[9]} !important`,
    boxShadow: `0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.14), 0 7px 12px -5px rgba(${hexToRgb(
      grayColor[9]
    )}, 0.46)`
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: grayColor[15],
    backgroundColor: `${whiteColor} !important`,
    boxShadow: `0 4px 18px 0px rgba(${hexToRgb(blackColor)}, 0.12), 0 7px 10px -5px rgba(${hexToRgb(blackColor)}, 0.15)`
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "left",
    left: "0",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition
  },
  hidden: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  menuButton: {
    color: "inherit !important"
  },
  closeButtonDrawer: {
    position: "absolute",
    right: "8px",
    top: "9px",
    zIndex: "1"
  },
  menuIcon: {
    fontSize: "40px"
  },
  cartIcon: {
    fontSize: "31px",
    "&:hover,&:focus": {
      color: "inherit"
    }
  },
  userIcon: {
    fontSize: "31px",
    "&:hover,&:focus": {
      color: "inherit",
      backgroundColor: "transparent"
    },
    "& p": {
      margin: 0,
      fontSize: "12px",
      fontStyle: "italic"
    }
  },
  brandLogo: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translateX(-50%)",
    "& img": {
      width: 57
    },
    [theme.breakpoints.down("sm")]: {
      left: 10,
      transform: "translateX(0)"
    }
  },
  hiddenBrandLogo: {
    visibility: "hidden"
  },
  fixedBrandLogo: {
    visibility: "visible"
  }
});

export default headerStyle;
