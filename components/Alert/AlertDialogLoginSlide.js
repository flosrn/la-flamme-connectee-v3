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
          <p>Connection</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className={classes.container}>Se connecter</div>
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
