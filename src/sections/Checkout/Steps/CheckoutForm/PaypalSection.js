import React, { useMemo } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    width: "100%",
    backgroundColor: "#fafafa",
    padding: "20px 10px",
    "& .MuiGrid-root": {
      // margin: "0 5px"
    }
  },
  error: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "20px",
    color: "#e4584c"
  },
  result: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "20px",
    color: "#666ee8"
  }
}));

function PaypalSection({ changeHandler, error, paymentMethod }) {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Bientôt disponible...
        </Grid>
      </Grid>
    </div>
  );
}

export default PaypalSection;
