import { title, androidColor, iOSColor } from "public/jss/la-flamme-connectee.js";

const downloadStyle = theme => ({
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px"
  },
  logo: {
    width: "100%"
  },
  buttonIcon: {
    margin: "20px 5px",
  }
});

export default downloadStyle;
