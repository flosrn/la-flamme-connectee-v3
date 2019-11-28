import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  whiteColor,
  grayColor
} from "public/jss/la-flamme-connectee";

export const useStyles = makeStyles(theme => ({
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: whiteColor,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main
  },
  warning: {
    backgroundColor: warningColor[0]
  },
  danger: {
    backgroundColor: dangerColor[0]
  },
  success: {
    backgroundColor: successColor[0]
  },
  info: {
    backgroundColor: infoColor[0]
  },
  rose: {
    backgroundColor: roseColor[0]
  },
  gray: {
    backgroundColor: grayColor[7]
  }
}));
