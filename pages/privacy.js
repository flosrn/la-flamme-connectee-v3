import React from "react";
import LayoutPage from "../components/Page/LayoutPage";
import MediaSvg from "../components/Media/MediaSvg";
import svg1 from "../public/img/svg/undraw_gdpr_3xfb.svg";

import { withAuthSync } from "../api/withAuth";
import PrivacySection from "../src/sections/HomePage/PrivacySection";

function LegalNoticePage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura3-lowres.jpg")}
      sectionId="privacy"
      backgroundPosition="30% 85%"
      currentUser={currentUser}
      meta={{ title: "Traitement des données", noindex: true }}
    >
      <MediaSvg src={svg1} alt="contact-us" size="small" mt={30} mb={30} />
      <PrivacySection />
    </LayoutPage>
  );
}

export default withAuthSync(LegalNoticePage);
