import React from "react";
import LayoutPage from "../components/Page/LayoutPage";
import MediaSvg from "../components/Media/MediaSvg";
import svg1 from "../public/img/svg/undraw_questions_75e0.svg";
import FAQSection from "../src/sections/HomePage/FAQSection";

import { withAuthSync } from "../api/withAuth";

function FAQPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura-400.jpg")}
      sectionId="faq"
      backgroundPosition="0% 100%"
      currentUser={currentUser}
    >
      <MediaSvg src={svg1} alt="faq" size="small" mt={30} mb={30} />
      <FAQSection />
    </LayoutPage>
  );
}

export default withAuthSync(FAQPage);
