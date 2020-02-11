import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import LayoutPage from "components/Page/LayoutPage";
// sections
import HowWorks from "src/sections/HomePage/HowWorks";
import TopDownSection from "src/sections/HomePage/TopDownSection";
// images
import svg from "public/img/svg/undraw_completed_steps_yurw (1).svg";
import { withAuthSync } from "../api/withAuth";

const useStyles = makeStyles(theme => ({}));

function DocumentationPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura-400.jpg")}
      sectionId="howWorks"
      backgroundPosition="0 100%"
      currentUser={currentUser}
      meta={{ title: "Documentation" }}
    >
      <HowWorks />
      <TopDownSection />
    </LayoutPage>
  );
}

export default withAuthSync(DocumentationPage);
