import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "public/jss/la-flamme-connectee/components/parallaxStyle";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  const [transform, setTransform] = React.useState("");
  let windowScrollTop;

  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", resetTransform);
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
    return function cleanup() {
      window.removeEventListener("scroll", resetTransform);
    };
  });

  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[`${filter}Color`]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform
      }}
    >
      {children}
    </div>
  );
}
