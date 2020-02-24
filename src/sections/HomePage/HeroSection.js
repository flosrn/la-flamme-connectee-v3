import React from "react";
import ModalVideo from "react-modal-video";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Avatar, Typography } from "@material-ui/core";

import VideoCover from "components/Video/VideoCover";
import GridItem from "components/Grid/GridItem";
import ButtonCustom from "components/CustomButtons/ButtonCustom";

import logo from "public/img/logo/laflammeco.png";

import { container, title } from "public/jss/la-flamme-connectee";

const useStyles = makeStyles(theme => ({
  containerBackground: {
    ...container,
    zIndex: "2",
    position: "relative",
    marginTop: theme.spacing(10),
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: theme.spacing(15)
    },
    "@media (max-width: 360px)": {
      marginTop: theme.spacing(5)
    },
    "@media (max-height: 500px)": {
      marginTop: theme.spacing(5)
    }
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    position: " absolute",
    bottom: "100px",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: "1",
    width: "100%"
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h1, & h3": {
      textAlign: "center"
    },
    "& button": {
      "@media (max-height: 530px)": {
        display: "none"
      }
    }
  },
  modalVideo: {
    "@media (max-height: 530px)": {
      display: "none"
    }
  },
  gridAbsolute: {
    position: "fixed",
    top: 0
  },
  textCenter: {
    display: "flex",
    textAlign: "center"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "20px",
    minHeight: "32px",
    color: "#FFFFFF",
    fontSize: "50px",
    textDecoration: "none",
    "@media (max-width: 400px)": {
      fontSize: "40px"
    },
    "@media (max-width: 350px)": {
      fontSize: "35px"
    }
  },
  subtitle: {
    maxWidth: "500px",
    margin: "10px auto 0",
    lineHeight: "40px",
    color: "#fff",
    fontWeight: 600
  },
  bottomText: {
    fontSize: "14px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      letterSpacing: "2px"
    }
  },
  logo: {
    width: 100,
    height: 100,
    [theme.breakpoints.down("xs")]: {
      width: 85,
      height: 85
    }
  }
}));

export default function HeroSection() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleVideo = () => {
    setOpen(!open);
  };
  return (
    <VideoCover open={open}>
      <div className={classes.containerBackground}>
        <div className={classes.titleContainer}>
          <GridItem xs={12} sm={12} md={12} className={classes.gridItem} id="title">
            <Typography variant="h1" align="center" className={classes.title}>
              La Flamme Connectée
            </Typography>
            <Avatar alt="Logo" src={logo} className={classes.logo} />
            <Typography variant="h3" align="center" className={classes.subtitle}>
              Allumez votre poêle ou insert à distance
            </Typography>
            <ButtonCustom color="danger" animateButton onClick={handleVideo}>
              <i className="fas fa-play" />
              Découvrir en vidéo
            </ButtonCustom>
            <ModalVideo
              channel="youtube"
              isOpen={open}
              videoId="JNxbjR0GbjU"
              onClose={handleVideo}
              className={classes.modalVideo}
            />
          </GridItem>
        </div>
      </div>
    </VideoCover>
  );
}
