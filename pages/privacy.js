import React from "react";
import LayoutPage from "components/Page/LayoutPage";
import PrivacySection from "src/sections/HomePage/PrivacySection";
import svg from "public/img/svg/undraw_gdpr_3xfb.svg";

import { withAuthSync } from "../api/withAuth";

function LegalNoticePage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura3-lowres.jpg")}
      sectionId="privacy"
      backgroundPosition="30% 85%"
      currentUser={currentUser}
      meta={{ title: "Traitement des données", noindex: true, nofollow: true }}
      svg={{ url: svg, name: "gdpr", size: "extrasmall" }}
    >
      <PrivacySection />
    </LayoutPage>
  );
}

export default withAuthSync(LegalNoticePage);
