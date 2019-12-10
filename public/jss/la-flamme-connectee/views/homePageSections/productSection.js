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
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  coloredShadow,
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  projects: {
    padding: "20px 0 30px 0"
  },
  tabSpace: {
    padding: "0 0 50px 0px"
  },
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
    fontFamily: "Quicksand",
    fontWeight: 500
  },
  sectionSpace: {
    height: "70px",
    display: "block"
  },
  marginTop20: {
    marginTop: "20px"
  },
  card2: {
    textAlign: "center"
  },
  sectionDark: {
    ...sectionDark,
    backgroundSize: "550% 450%",
    "& $title, & $cardTitle": {
      color: whiteColor
    },
    "& $cardCategory": {
      color: `rgba(${hexToRgb(whiteColor)}, 0.5) !important`
    },
    "& $cardDescription": {
      color: `rgba(${hexToRgb(whiteColor)}, 0.76) !important`
    }
  },
  projects3: {
    "& $title": {
      marginBottom: "80px",
      marginTop: "5px"
    },
    "& h6": {
      marginBottom: "5px"
    }
  },
  card4: {
    marginTop: "0",
    marginBottom: "0",
    "& $cardTitle": {
      color: whiteColor
    }
  },
  cardBody4: {
    paddingTop: "140px",
    paddingBottom: "140px"
  },
  info4: {
    padding: "0"
  },
  projects4: {
    "& hr": {
      margin: "70px auto",
      maxWidth: "970px"
    }
  }
};

export default projectsSection;
