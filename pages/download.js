import React from "react";
// core components
import LayoutPage from "components/Page/LayoutPage";
// sections
import DownloadSection from "src/sections/HomePage/DownloadSection";
import ConnectSection from "src/sections/HomePage/ConnectSection";
// images
import svg from "public/img/svg/undraw_download_pc33.svg";
import { withAuthSync } from "../api/withAuth";

function DownloadPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura4-lowres.jpg")}
      sectionId="download"
      backgroundPosition="50% 100%"
      currentUser={currentUser}
      meta={{ title: "Téléchargement" }}
    >
      <DownloadSection />
      <ConnectSection />
    </LayoutPage>
  );
}

export default withAuthSync(DownloadPage);
