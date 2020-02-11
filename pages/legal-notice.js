import React from "react";
import LayoutPage from "components/Page/LayoutPage";
import LegalNoticeSection from "src/sections/HomePage/LegalNoticeSection";
import svg from "public/img/svg/undraw_observations_mejb.svg";
import { withAuthSync } from "api/withAuth";

function LegalNoticePage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura3-lowres.jpg")}
      sectionId="legal-notice"
      backgroundPosition="30% 85%"
      currentUser={currentUser}
      meta={{ title: "Mentions légales", noindex: true, nofollow: true }}
    >
      <LegalNoticeSection />
    </LayoutPage>
  );
}

export default withAuthSync(LegalNoticePage);
