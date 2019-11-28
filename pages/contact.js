import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import ContactSection from "src/sections/HomePage/ContactSection";
// images
import backgroundImage from "public/img/contura/background-contura3.jpg";
import svg1 from "../public/img/svg/undraw_contact_us_15o2.svg";

function ContactPage() {
  return (
    <LayoutPage backgroundImage={backgroundImage} sectionId="contact" backgroundPosition="30% 85%">
      <MediaSvg src={svg1} alt="contact-us" size="medium" mt={30} />
      <ContactSection />
    </LayoutPage>
  );
}

export default ContactPage;
