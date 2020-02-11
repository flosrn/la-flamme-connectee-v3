import React from "react";
import LayoutPage from "components/Page/LayoutPage";
import TermsOfSalesSection from "src/sections/HomePage/TermsOfSalesSection";
import svg from "public/img/svg/undraw_terms_lso0.svg";

import { withAuthSync } from "../api/withAuth";

function TermsOfSalesPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura4-lowres.jpg")}
      sectionId="terms-of-sales"
      backgroundPosition="0% 100%"
      currentUser={currentUser}
      meta={{ title: "Condition générales", noindex: true, nofollow: true }}
    >
      <TermsOfSalesSection />
    </LayoutPage>
  );
}

export default withAuthSync(TermsOfSalesPage);
