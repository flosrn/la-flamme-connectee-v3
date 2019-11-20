import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, closeHandler }) {
  const useStyles = theme => ({
    container: {
      position: "relative",
      height: 0,
      paddingBottom: "56.25%",
      overflow: "hidden"
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }
  });
  const classes = useStyles();
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
        onClose={closeHandler}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <p>Présentation du Flam'connect</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className={classes.container}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/JNxbjR0GbjU"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={classes.video}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} color="secondary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
