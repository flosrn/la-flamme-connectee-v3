import React from "react";
// nodejs library that concatenates classes
import clsx from "clsx";
// @material-ui core
import makeStyles from "@material-ui/core/styles/makeStyles";
// sections
import Header from "src/sections/HomePage/HeaderSection";
import Hero from "src/sections/HomePage/HeroSection";
import PresentationSection from "src/sections/HomePage/PresentationSection";
import ProductSection from "src/sections/HomePage/ProductSection";
import BenefitsSection from "src/sections/HomePage/BenefitsSection";
import BannerSection from "src/sections/HomePage/BannerSection";
import LearnMoreSection from "src/sections/HomePage/LearnMoreSection";
import TeamSection from "src/sections/HomePage/TeamSection";
import ProjectSection from "src/sections/HomePage/ProjectSection";
import CarouselSection from "src/sections/HomePage/CarouselSection";
import InstagramSection from "src/sections/HomePage/InstagramSection";
// components
import FooterDark from "components/Footer/FooterDark";
// authentication
import { withAuthSync } from "api/withAuth";
// styles for this page
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import { main, mainRaised } from "../public/jss/la-flamme-connectee";
import TalkAboutUsSection from "../src/sections/HomePage/TalkAboutUsSection";

const useStyles = makeStyles(theme => ({
  main,
  mainRaised: {
    ...mainRaised,
    margin: "-20px 120px -70px"
  }
}));

function HomePage({ currentUser }) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Header currentUser={currentUser} />
      <Hero />
      <div className={clsx(classes.main, classes.mainRaised)} id="main-panel">
        <PresentationSection isDesktop={isDesktop} />
        <ProductSection isDesktop={isDesktop} />
        <BenefitsSection isDesktop={isDesktop} />
        <BannerSection isDesktop={isDesktop} />
        <LearnMoreSection isDesktop={isDesktop} />
        <TeamSection isDesktop={isDesktop} />
        <ProjectSection isDesktop={isDesktop} />
        {/* <CarouselSection isDesktop={isDesktop} /> */}
        <TalkAboutUsSection isDesktop={isDesktop} />
        {/* <InstagramSection /> */}
      </div>
      <FooterDark />
    </>
  );
}

export default withAuthSync(HomePage);
