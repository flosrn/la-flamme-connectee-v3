import React from "react";
import LayoutPage from "../components/Page/LayoutPage";
import MediaSvg from "../components/Media/MediaSvg";
import svg1 from "../public/img/svg/undraw_observations_mejb.svg";

import { withAuthSync } from "../api/withAuth";
import LegalNoticeSection from "../src/sections/HomePage/LegalNoticeSection";

function LegalNoticePage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura3-lowres.jpg")}
      sectionId="legal-notice"
      backgroundPosition="30% 85%"
      currentUser={currentUser}
    >
      <MediaSvg src={svg1} alt="contact-us" size="small" mt={30} mb={30} />
      <LegalNoticeSection />
    </LayoutPage>
  );
}

export default withAuthSync(LegalNoticePage);
