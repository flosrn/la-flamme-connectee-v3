import { title } from "static/jss/la-flamme-connectee.js";

const howWorksStyle = theme => ({
  section: {
    padding: "70px 0",
    textAlign: "center",
    background: 'radial-gradient(ellipse at center, #585858 0, #232323 100%)',
    fallbacks: {
      backgroundColor: '#343434'
    }
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: "50px"
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: "50px",
    '& h1, & h3': {
      textAlign: 'center'
    }
  },
  gridLeft: {
    [theme.breakpoints.up("md")]: {
      // alignItems: 'flex-start',
    }
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#fff",
  },
  description: {
    // color: "#999",
    marginLeft: "50px",
    marginRight: "50px",
    color: "#fff",
  },
  stove: {
    width: "60%"
  }
});

export default howWorksStyle;
