import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import DownloadSection from "src/sections/HomePage/DownloadSection";
import ConnectSection from "src/sections/HomePage/ConnectSection";
// images
import svg1 from "public/img/svg/undraw_download_pc33.svg";
import svg2 from "public/img/svg/undraw_signal_searching_bhpc.svg";
import { authInitialProps } from "../server/api/auth";

function DownloadPage({ currentUser, isLoggedIn }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura4-lowres.jpg")}
      sectionId="download"
      backgroundPosition="50% 100%"
      currentUser={currentUser}
      isLoggedIn={isLoggedIn}
    >
      <MediaSvg src={svg1} alt="questions" size="medium" mt={30} />
      <DownloadSection />
      <MediaSvg src={svg2} alt="questions" size="small" />
      <ConnectSection />
    </LayoutPage>
  );
}

DownloadPage.getInitialProps = async ctx => {
  const { currentUser } = await authInitialProps(ctx);
  const isLoggedIn = Object.keys(currentUser).length !== 0;
  return { currentUser, isLoggedIn };
};

export default DownloadPage;
