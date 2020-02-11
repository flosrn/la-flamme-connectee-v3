import React from "react";
import LayoutPage from "components/Page/LayoutPage";
import FAQSection from "src/sections/HomePage/FAQSection";
import svg from "public/img/svg/undraw_questions_75e0.svg";

import { withAuthSync } from "../api/withAuth";

function FAQPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura-400.jpg")}
      sectionId="faq"
      backgroundPosition="0% 100%"
      currentUser={currentUser}
      meta={{ title: "FAQ" }}
    >
      <FAQSection />
    </LayoutPage>
  );
}

export default withAuthSync(FAQPage);
