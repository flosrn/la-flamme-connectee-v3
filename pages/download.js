import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import DownloadSection from "src/sections/HomePage/DownloadSection";
import ConnectSection from "src/sections/HomePage/ConnectSection";
// images
import backgroundImage from "static/img/contura/background-contura4.jpg";
import svg1 from "static/img/svg/undraw_download_pc33.svg";
import svg2 from "static/img/svg/undraw_signal_searching_bhpc.svg";

function DownloadPage() {
  return (
    <LayoutPage backgroundImage={backgroundImage} sectionId="download" backgroundPosition="50% 100%">
      <MediaSvg src={svg1} alt="questions" size="medium" mt={30} />
      <DownloadSection />
      <MediaSvg src={svg2} alt="questions" size="small" />
      <ConnectSection />
    </LayoutPage>
  );
}

export default DownloadPage;
