import React from "react";
// core components
import LayoutPage from "components/Page/LayoutPage";
// sections
import svg from "public/img/svg/undraw_download_pc33.svg";
import TeamSection from "../src/sections/HomePage/TeamSection";
import ProjectSection from "../src/sections/HomePage/ProjectSection";
// images
import { withAuthSync } from "../api/withAuth";

function HistoryPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura2-lowres.jpg")}
      sectionId="projects"
      backgroundPosition="50% 100%"
      currentUser={currentUser}
      meta={{ title: "Qui sommes-nous ?" }}
    >
      <ProjectSection />
      <TeamSection />
    </LayoutPage>
  );
}

export default withAuthSync(HistoryPage);
