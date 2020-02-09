import React from "react";
import LayoutPage from "../components/Page/LayoutPage";
import MediaSvg from "../components/Media/MediaSvg";
import svg1 from "../public/img/svg/undraw_terms_lso0.svg";
import TermsOfSalesSection from "../src/sections/HomePage/TermsOfSalesSection";

import { withAuthSync } from "../api/withAuth";

function TermsOfSalesPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura4-lowres.jpg")}
      sectionId="terms-of-sales"
      backgroundPosition="0% 100%"
      currentUser={currentUser}
      meta={{ title: "Condition générales", noindex: true }}
    >
      <MediaSvg src={svg1} alt="contact-us" size="extrasmall" mt={30} mb={30} />
      <TermsOfSalesSection />
    </LayoutPage>
  );
}

export default withAuthSync(TermsOfSalesPage);
