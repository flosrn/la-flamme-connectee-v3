import makeStyles from "@material-ui/core/styles/makeStyles";

import {
  grayColor,
  roseColor,
  primaryColor,
  secondaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  blackColor,
  whiteColor,
  twitterColor,
  facebookColor,
  googleColor,
  linkedinColor,
  pinterestColor,
  youtubeColor,
  tumblrColor,
  behanceColor,
  dribbbleColor,
  redditColor,
  instagramColor,
  iOSColor,
  androidColor,
  hexToRgb
} from "public/jss/la-flamme-connectee";

export const useStyles = makeStyles(theme => ({
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
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
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
    "&$justIcon": {
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
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(theme.palette.primary.main)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      theme.palette.primary.main
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(theme.palette.primary.main)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(theme.palette.primary.main)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(theme.palette.primary.main)}, 0.2)`
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
    }
  },
  info: {
    backgroundColor: infoColor[0],
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(infoColor[0])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      infoColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(infoColor[0])}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: infoColor[0],
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(infoColor[0])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(infoColor[0])}, 0.2)`
    }
  },
  success: {
    backgroundColor: successColor[0],
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(successColor[0])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      successColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(successColor[0])}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: successColor[0],
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(successColor[0])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(successColor[0])}, 0.2)`
    }
  },
  warning: {
    backgroundColor: warningColor[0],
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(warningColor[0])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      warningColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(warningColor[0])}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: warningColor[0],
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(warningColor[0])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(warningColor[0])}, 0.2)`
    }
  },
  danger: {
    backgroundColor: dangerColor[0],
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(dangerColor[0])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      dangerColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(dangerColor[0])}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: dangerColor[0],
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(dangerColor[0])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(dangerColor[0])}, 0.2)`
    }
  },
  rose: {
    backgroundColor: roseColor[0],
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(roseColor[0])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      roseColor[0]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(roseColor[0])}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: roseColor[0],
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(roseColor[0])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(roseColor[0])}, 0.2)`
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: whiteColor,
      color: grayColor[0]
    }
  },
  twitter: {
    backgroundColor: twitterColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(twitterColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      twitterColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(twitterColor)}, 0.12)`,
    "&:hover,&:focus,&:visited": {
      backgroundColor: twitterColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(twitterColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(twitterColor)}, 0.2)`
    }
  },
  facebook: {
    backgroundColor: facebookColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(facebookColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      facebookColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(facebookColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: facebookColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(facebookColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(facebookColor)}, 0.2)`
    }
  },
  google: {
    backgroundColor: googleColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(googleColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      googleColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(googleColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: googleColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(googleColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(googleColor)}, 0.2)`
    }
  },
  linkedin: {
    backgroundColor: linkedinColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(linkedinColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      linkedinColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(linkedinColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: linkedinColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(linkedinColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(linkedinColor)}, 0.2)`
    }
  },
  pinterest: {
    backgroundColor: pinterestColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(pinterestColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      pinterestColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(pinterestColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: pinterestColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(pinterestColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(pinterestColor)}, 0.2)`
    }
  },
  youtube: {
    backgroundColor: youtubeColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(youtubeColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      youtubeColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(youtubeColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: youtubeColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(youtubeColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(youtubeColor)}, 0.2)`
    }
  },
  tumblr: {
    backgroundColor: tumblrColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(tumblrColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      tumblrColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(tumblrColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: tumblrColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(tumblrColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(tumblrColor)}, 0.2)`
    }
  },
  github: {
    backgroundColor: grayColor[8],
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(grayColor[8])}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      grayColor[8]
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(grayColor[8])}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: grayColor[8],
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(grayColor[8])}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(grayColor[8])}, 0.2)`
    }
  },
  behance: {
    backgroundColor: behanceColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(behanceColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      behanceColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(behanceColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: behanceColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(behanceColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(behanceColor)}, 0.2)`
    }
  },
  dribbble: {
    backgroundColor: dribbbleColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(dribbbleColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      dribbbleColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(dribbbleColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: dribbbleColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(dribbbleColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(dribbbleColor)}, 0.2)`
    }
  },
  reddit: {
    backgroundColor: redditColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(redditColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      redditColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(redditColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: redditColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(redditColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(redditColor)}, 0.2)`
    }
  },
  instagram: {
    backgroundColor: instagramColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(instagramColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      instagramColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(instagramColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: instagramColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(instagramColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(instagramColor)}, 0.2)`
    }
  },
  iOS: {
    backgroundColor: iOSColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(iOSColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      iOSColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(iOSColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: iOSColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(iOSColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(iOSColor)}, 0.2)`
    }
  },
  android: {
    backgroundColor: androidColor,
    color: whiteColor,
    boxShadow: `0 2px 2px 0 rgba(${hexToRgb(androidColor)}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
      androidColor
    )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(androidColor)}, 0.12)`,
    "&:hover,&:focus": {
      backgroundColor: androidColor,
      color: whiteColor,
      boxShadow: `0 14px 26px -12px rgba(${hexToRgb(androidColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(androidColor)}, 0.2)`
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: whiteColor,
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.primary.main
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: infoColor[0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: successColor[0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: warningColor[0]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: roseColor[0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: dangerColor[0]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: twitterColor
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: facebookColor
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: googleColor
      }
    },
    "&$linkedin": {
      "&,&:focus,&:hover,&:visited": {
        color: linkedinColor
      }
    },
    "&$pinterest": {
      "&,&:focus,&:hover,&:visited": {
        color: pinterestColor
      }
    },
    "&$youtube": {
      "&,&:focus,&:hover,&:visited": {
        color: youtubeColor
      }
    },
    "&$tumblr": {
      "&,&:focus,&:hover,&:visited": {
        color: tumblrColor
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: grayColor[8]
      }
    },
    "&$behance": {
      "&,&:focus,&:hover,&:visited": {
        color: behanceColor
      }
    },
    "&$dribbble": {
      "&,&:focus,&:hover,&:visited": {
        color: dribbbleColor
      }
    },
    "&$reddit": {
      "&,&:focus,&:hover,&:visited": {
        color: redditColor
      }
    },
    "&$instagram": {
      "&,&:focus,&:hover,&:visited": {
        color: instagramColor
      }
    }
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
  lg: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "-4px"
      }
    },
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "1px"
      }
    },
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: grayColor[0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  },
  animateButton: {
    transition: ".9s",
    borderRadius: "5px",
    "&:hover, &:focus, &:active": {
      color: "#fff",
      background: theme.palette.success.main,
      transform: "translateY(-5px)"
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
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
    },
    hoverWhite: {
      "&animateButton:hover, &animateButton:focus, &animateButton:active": {
        color: "#fff",
        background: "#fff",
        transform: "translateY(-5px)"
      },
      "&animateButton:after, &animateButton:before": {
        background: "#fff"
      }
    }
  }
}));
