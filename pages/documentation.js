import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import HowWorks from "src/sections/HomePage/HowWorks";
import TopDownSection from "src/sections/HomePage/TopDownSection";
// images
import svg1 from "public/img/svg/undraw_questions_75e0.svg";
import svg2 from "public/img/svg/undraw_light_the_fire_gt58.svg";
import { authInitialProps } from "../server/api/auth";

function DocumentationPage({ currentUser, isLoggedIn }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura-400.jpg")}
      sectionId="howWorks"
      backgroundPosition="0 100%"
      currentUser={currentUser}
      isLoggedIn={isLoggedIn}
    >
      <MediaSvg src={svg1} alt="questions" size="medium" mt={50} />
      <HowWorks />
      <MediaSvg src={svg2} alt="questions" size="medium" mt={20} />
      <TopDownSection />
    </LayoutPage>
  );
}

DocumentationPage.getInitialProps = async ctx => {
  const { currentUser } = await authInitialProps(ctx);
  const isLoggedIn = Object.keys(currentUser).length !== 0;
  return { currentUser, isLoggedIn };
};

export default DocumentationPage;
