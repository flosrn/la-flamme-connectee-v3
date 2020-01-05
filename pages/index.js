import React from "react";
// nodejs library that concatenates classes
import clsx from "clsx";
// @material-ui core
import makeStyles from "@material-ui/core/styles/makeStyles";
// sections
import HeaderSection from "src/sections/HomePage/HeaderSection";
import HeroSection from "src/sections/HomePage/HeroSection";
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
import { main, mainRaised } from "../public/jss/la-flamme-connectee";

const useStyles = makeStyles(theme => ({
  main,
  mainRaised: {
    ...mainRaised,
    margin: "-20px 120px -70px"
  }
}));

function HomePage({ currentUser }) {
  const classes = useStyles();
  return (
    <>
      <HeaderSection currentUser={currentUser} />
      <HeroSection />
      <div className={clsx(classes.main, classes.mainRaised)} id="main-panel">
        <PresentationSection />
        <ProductSection />
        <BenefitsSection />
        <BannerSection />
        <LearnMoreSection />
        <TeamSection />
        <ProjectSection />
        <CarouselSection />
        <InstagramSection />
      </div>
      <FooterDark />
    </>
  );
}

export default withAuthSync(HomePage);
