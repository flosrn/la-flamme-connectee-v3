import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import ContactSection from "src/sections/HomePage/ContactSection";
// images
import svg1 from "../public/img/svg/undraw_contact_us_15o2.svg";
import { withAuthSync } from "../api/withAuth";

function ContactPage({ currentUser }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura3-lowres.jpg")}
      sectionId="contact"
      backgroundPosition="30% 85%"
      currentUser={currentUser}
    >
      <MediaSvg src={svg1} alt="contact-us" size="medium" mt={30} />
      <ContactSection />
    </LayoutPage>
  );
}

export default withAuthSync(ContactPage);
