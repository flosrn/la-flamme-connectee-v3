import React from "react";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Title from "components/Typography/Title";
import FAQExpansionPanels from "../../../components/ExpansionPanels/FAQExpansionPanels";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingBottom: 40
  }
}));

export default function FAQSection() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="faq">
      <GridContainer justify="center" className={classes.mainContainer}>
        <GridItem xs={11} sm={11} md={8} lg={6} className={classes.gridItem}>
          <GridContainer justify="center">
            <GridItem center className={classes.gridItem}>
              <Title variant="h2" className={classes.title}>
                Foire aux questions
              </Title>
            </GridItem>
          </GridContainer>
          <FAQExpansionPanels />
        </GridItem>
      </GridContainer>
    </div>
  );
}
