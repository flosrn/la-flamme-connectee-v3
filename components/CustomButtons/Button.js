import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Button from "@material-ui/core/Button";

import { useStyles } from "public/jss/la-flamme-connectee/components/buttonStyle";

const RegularButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className,
    animateButton,
    hoverWhite,
    ...rest
  } = props;
  const classes = useStyles();
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className,
    [classes.animateButton]: animateButton,
    [classes.hoverWhite]: hoverWhite
  });

  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

// RegularButton.propTypes = {
//   color: PropTypes.oneOf([
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "rose",
//     "white",
//     "twitter",
//     "facebook",
//     "google",
//     "linkedin",
//     "pinterest",
//     "youtube",
//     "tumblr",
//     "github",
//     "behance",
//     "dribbble",
//     "reddit",
//     "instagram",
//     "transparent",
//     "iOS",
//     "android"
//   ]),
//   size: PropTypes.oneOf(["sm", "lg"]),
//   simple: PropTypes.bool,
//   round: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   disabled: PropTypes.bool,
//   block: PropTypes.bool,
//   link: PropTypes.bool,
//   justIcon: PropTypes.bool,
//   fileButton: PropTypes.bool,
//   children: PropTypes.node,
//   className: PropTypes.string
// };

export default RegularButton;
