import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridItem from "components/Grid/GridItem";
import FAQExpansionPanels from "components/ExpansionPanels/FAQExpansionPanels";
import LayoutSection from "components/Page/LayoutSection";

const useStyles = makeStyles(theme => ({}));

export default function FAQSection() {
  const classes = useStyles();
  return (
    <LayoutSection title="Foires aux questions" id="faq">
      <GridItem xs={11} sm={11} md={8} lg={6}>
        <FAQExpansionPanels />
      </GridItem>
    </LayoutSection>
  );
}
