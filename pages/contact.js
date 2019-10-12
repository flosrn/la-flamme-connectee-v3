import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import ProjectSection from "src/sections/HomePage/ProjectSection";
import TeamSection from "src/sections/HomePage/TeamSection";
import ContactSection from "src/sections/HomePage/ContactSection";
// images
import backgroundImage from "static/img/contura/background-contura3.jpg";
import svg3 from "static/img/svg/undraw_status_update_jjgk.svg";
import svg1 from "../static/img/svg/undraw_contact_us_15o2.svg";
import svg2 from "../static/img/svg/undraw_status_update_jjgk.svg";

function ContactPage() {
  return (
    <LayoutPage backgroundImage={backgroundImage} sectionId="contact" backgroundPosition="30% 85%">
      <MediaSvg src={svg1} alt="contact-us" size="medium" mt={30} />
      <ContactSection />
      <MediaSvg src={svg2} alt="about-us" size="medium" mt={90} />
      <TeamSection />
      <MediaSvg src={svg3} alt="idea" size="medium" mt={90} />
      <ProjectSection />
    </LayoutPage>
  );
}

export default ContactPage;
