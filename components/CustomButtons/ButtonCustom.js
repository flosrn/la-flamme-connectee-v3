import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { blackColor, dangerColor, grayColor, hexToRgb, whiteColor } from "../../public/jss/la-flamme-connectee";

const useStyles = makeStyles(theme => ({
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: grayColor[0],
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(grayColor[0])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      grayColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(grayColor[0])}, 0.12)`,
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: "10px 0 10px 0",
    fontSize: "15px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: whiteColor,
      backgroundColor: grayColor[0],
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(grayColor[0])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(grayColor[0])}, 0.2)`
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&.justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(theme.palette.primary.main)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      theme.palette.primary.main
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(theme.palette.primary.main)}, 0.12)`,
    "&:hover": {
      color: `#fff !important`,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(theme.palette.primary.main)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(theme.palette.primary.main)}, 0.2)`
    },
    "&:focus": {
      backgroundColor: `${theme.palette.primary.main} !important`
    },
    "&:after, &:before": {
      backgroundColor: `${theme.palette.success.main} !important`
    }
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(theme.palette.secondary.main)},.14), 0 3px 1px -2px rgba(${hexToRgb(
      theme.palette.secondary.main
    )},.2), 0 1px 5px 0 rgba(${hexToRgb(theme.palette.secondary.main)},.12)`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.secondary.main,
      boxShdow: `0 14px 26px -12px rgba(${hexToRgb(theme.palette.secondary.main)},.42), 0 4px 23px 0 rgba(${hexToRgb(
        blackColor
      )},.12), 0 8px 10px -5px rgba(${hexToRgb(theme.palette.secondary.main)},.2)`
    },
    "&:focus": {
      backgroundColor: `${theme.palette.secondary.main} !important`
    }
  },
  danger: {
    backgroundColor: dangerColor[0],
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(dangerColor[0])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      dangerColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(dangerColor[0])}, 0.12)`,
    "&:hover": {
      color: `${dangerColor[0]} !important`,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(dangerColor[0])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(dangerColor[0])}, 0.2)`
    },
    "&:focus": {
      backgroundColor: `${dangerColor[0]} !important`
      // color: `#fff !important`
    },
    "&:after, &:before": {
      backgroundColor: "#fff !important"
    }
  },
  large: {
    width: "100%"
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  round: {
    borderRadius: "30px"
  },
  animateButton: {
    transition: ".9s",
    borderRadius: "5px",
    animationDuration: "1.5s",
    "&:hover, &:active": {
      color: "#fff",
      background: theme.palette.success.main
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      transform: "translateY(-5px)",
      "&:after, &:before": {
        width: "55%"
      }
    },
    "&:after, &:before": {
      content: "''",
      position: "absolute",
      top: 0,
      height: "100%",
      width: 0,
      transition: ".4s",
      background: theme.palette.success.main,
      zIndex: -1,
      borderRadius: "5px"
    },
    "&:before": {
      right: 0
    },
    "&:after": {
      left: 0
    }
  }
}));
const ButtonCustom = React.forwardRef((props, ref) => {
  const { color, round, fullWidth, size, disabled, justIcon, animateButton, children, ...rest } = props;
  const [btnClickEffectClass, setBtnClickEffectClass] = React.useState(null);
  const classes = useStyles(props);
  const btnClasses = clsx({
    [classes.button]: true,
    [classes[color]]: color,
    [classes[size]]: size,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.justIcon]: justIcon,
    [classes.animateButton]: animateButton
  });
  const handleAnimationEnd = () => {
    setTimeout(() => {
      setBtnClickEffectClass("");
    }, 2000);
  };
  return (
    <Button
      {...rest}
      ref={ref}
      className={clsx(btnClasses, classes[btnClickEffectClass])}
      // onMouseUp={() => setBtnClickEffectClass("animationPulse")}
      // onAnimationEnd={() => handleAnimationEnd()}
    >
      {children}
    </Button>
  );
});

export default ButtonCustom;
