import React from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
import ContactSection from "src/sections/HomePage/ContactSection";
// images
import svg1 from "../public/img/svg/undraw_contact_us_15o2.svg";
import { authInitialProps } from "../server/api/auth";

function ContactPage({ currentUser, isLoggedIn }) {
  return (
    <LayoutPage
      backgroundImage={require("/public/img/contura/background-contura3-lowres.jpg")}
      sectionId="contact"
      backgroundPosition="30% 85%"
      currentUser={currentUser}
      isLoggedIn={isLoggedIn}
    >
      <MediaSvg src={svg1} alt="contact-us" size="medium" mt={30} />
      <ContactSection />
    </LayoutPage>
  );
}

ContactPage.getInitialProps = async ctx => {
  const { currentUser } = await authInitialProps(ctx);
  const isLoggedIn = Object.keys(currentUser).length !== 0;
  return { currentUser, isLoggedIn };
};

export default ContactPage;
