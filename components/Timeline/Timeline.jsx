import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// core components
import Badge from "components/Badge/Badge";
// colors
import {
  infoColor,
  myPrimaryColor,
  myPrimaryBackgroundColor,
  primaryColor,
  successColor,
  dangerColor,
  warningColor,
  whiteColor,
  blackColor,
  grayColor,
  hexToRgb
} from "public/jss/la-flamme-connectee";

const useStyles = makeStyles(theme => ({
  timeline: {
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      "&:before": {
        width: "100%"
      }
    },
    [theme.breakpoints.down("sm")]: {
      "&:before": {
        left: "5% !important"
      }
    },
    listStyle: "none",
    padding: "20px 0 20px",
    position: "relative",
    marginTop: "30px",
    "&:before": {
      top: "50px",
      bottom: "0",
      position: "absolute",
      content: '" "',
      width: "3px",
      backgroundColor: grayColor[11],
      left: "50%",
      marginLeft: "-1px"
    }
  },
  timelineSimple: {
    marginTop: "30px",
    padding: "0 0 20px",
    "&:before": {
      left: "5%"
    }
  },
  item: {
    marginBottom: "20px",
    position: "relative",
    "&:before,&:after": {
      content: '" "',
      display: "table"
    },
    "&:after": {
      clear: "both"
    }
  },
  timelineBadge: {
    [theme.breakpoints.down("sm")]: {
      left: "5% !important"
    },
    color: whiteColor,
    width: "50px",
    height: "50px",
    lineHeight: "51px",
    fontSize: "1.4em",
    textAlign: "center",
    position: "absolute",
    top: "16px",
    left: "50%",
    marginLeft: "-24px",
    zIndex: "100",
    borderTopRightRadius: "50%",
    borderTopLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    borderBottomLeftRadius: "50%"
  },
  timelineSimpleBadge: {
    left: "5%"
  },
  info: {
    backgroundColor: infoColor[0],
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(infoColor[0]) +
      ", 0.4)"
  },
  success: {
    backgroundColor: successColor[0],
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.4)"
  },
  danger: {
    backgroundColor: dangerColor[0],
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(dangerColor[0]) +
      ", 0.4)"
  },
  warning: {
    backgroundColor: warningColor[0],
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(warningColor[0]) +
      ", 0.4)"
  },
  primary: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(theme.palette.primary.main) +
      ", 0.4)"
  },
  secondary: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(theme.palette.secondary.main) +
      ", 0.4)"
  },
  myPrimary3: {
    backgroundColor: theme.palette.primary.light,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(myPrimaryColor[2]) +
      ", 0.4)"
  },
  myPrimary4: {
    backgroundColor: myPrimaryColor[3],
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(myPrimaryColor[3]) +
      ", 0.4)"
  },
  myPrimary5: {
    backgroundColor: myPrimaryColor[4],
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(myPrimaryColor[4]) +
      ", 0.4)"
  },
  gray: {
    backgroundColor: grayColor[0],
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 10px -5px rgba(" +
      hexToRgb(primaryColor[0]) +
      ", 0.4)"
  },
  badgeIcon: {
    width: "24px",
    height: "51px"
  },
  timelinePanel: {
    [theme.breakpoints.down("sm")]: {
      float: "right !important",
      width: "86% !important",
      "&:before": {
        borderLeftWidth: "0 !important",
        borderRightWidth: "15px !important",
        left: "-15px !important",
        right: "auto !important"
      },
      "&:after": {
        borderLeftWidth: "0 !important",
        borderRightWidth: "14px !important",
        left: "-14px !important",
        right: "auto !important"
      }
    },
    width: "45%",
    float: "left",
    padding: "20px",
    marginBottom: "20px",
    position: "relative",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    "&:before": {
      position: "absolute",
      top: "26px",
      right: "-15px",
      display: "inline-block",
      borderTop: "15px solid transparent",
      borderLeft: "15px solid " + grayColor[10],
      borderRight: "0 solid " + grayColor[10],
      borderBottom: "15px solid transparent",
      content: '" "'
    },
    "&:after": {
      position: "absolute",
      top: "27px",
      right: "-14px",
      display: "inline-block",
      borderTop: "14px solid transparent",
      borderLeft: "14px solid " + whiteColor,
      borderRight: "0 solid " + whiteColor,
      borderBottom: "14px solid transparent",
      content: '" "'
    }
  },
  timelineSimplePanel: {
    width: "86%"
  },
  timelinePanelInverted: {
    [theme.breakpoints.up("sm")]: {
      float: "right",
      backgroundColor: whiteColor,
      "&:before": {
        borderLeftWidth: "0",
        borderRightWidth: "15px",
        left: "-15px",
        right: "auto"
      },
      "&:after": {
        borderLeftWidth: "0",
        borderRightWidth: "14px",
        left: "-14px",
        right: "auto"
      }
    }
  },
  timelineHeading: {
    marginBottom: "15px"
  },
  timelineBody: {
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    },
  },
  timelineFooter: {
    zIndex: "1000",
    position: "relative",
    color: theme.palette.secondary.main,
    "& span": {
      color: theme.palette.secondary.main
    }
  },
  footer: {
    color: theme.palette.secondary.main,
    "& span": {
      color: theme.palette.secondary.main
    }
  },
  footerTitle: {
    fontWeight: "400",
    margin: "10px 0px 0px",
    color: theme.palette.secondary.main,
    "& span": {
      color: theme.palette.secondary.main
    }
  },
  footerLine: {
    marginTop: "10px",
    marginBottom: "5px"
  }
}));

function Timeline({ ...props }) {
  const { stories, simple } = props;
  const classes = useStyles();

  const timelineClass =
    classes.timeline +
    " " +
    cx({
      [classes.timelineSimple]: simple
    });
  return (
    <ul className={timelineClass}>
      {stories.map((prop, key) => {
        const panelClasses =
          classes.timelinePanel +
          " " +
          cx({
            [classes.timelinePanelInverted]: prop.inverted || simple,
            [classes.timelineSimplePanel]: simple
          });
        const timelineBadgeClasses =
          classes.timelineBadge +
          " " +
          classes[prop.badgeColor] +
          " " +
          cx({
            [classes.timelineSimpleBadge]: simple
          });

        return (
          <li className={classes.item} key={key}>
            {prop.badgeIcon ? (
              <div className={timelineBadgeClasses}>
                <prop.badgeIcon className={classes.badgeIcon} />
              </div>
            ) : null}
            <div className={panelClasses}>
              {prop.title ? (
                <div className={classes.timelineHeading}>
                  <Badge color={prop.titleColor} variant="body1">
                    {prop.title}
                  </Badge>
                </div>
              ) : null}
              <div variant="body2" className={classes.timelineBody}>
                {prop.body}
              </div>
              {prop.footerTitle ? <div className={classes.footerTitle}>{prop.footerTitle}</div> : null}
              {prop.footer ? <hr className={classes.footerLine} /> : null}
              {prop.footer ? <div className={classes.timelineFooter}>{prop.footer}</div> : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

Timeline.propTypes = {
  // classes: PropTypes.object.isRequired,
  // stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  // simple: PropTypes.bool
};

export default Timeline;
