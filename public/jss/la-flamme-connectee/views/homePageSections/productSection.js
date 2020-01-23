import {
  container,
  mlAuto,
  mrAuto,
  title,
  cardTitle,
  description,
  coloredShadow,
  whiteColor,
  sectionDark,
  hexToRgb
} from "public/jss/la-flamme-connectee";

const projectsSection = {
  cardCategory: {
    color: `rgba(${hexToRgb(whiteColor)}, 0.7) !important`,
    marginTop: "10px"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: `${whiteColor}  !important`,
    marginTop: "10px !important"
  },
  cardDescription: {
    color: `rgba(${hexToRgb(whiteColor)}, 0.9) !important`,
    fontWeight: 500,
    fontStyle: "italic"
  }
};

export default projectsSection;
