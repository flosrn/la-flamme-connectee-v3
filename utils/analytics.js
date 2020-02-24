import ReactGA from "react-ga";

export const initGA = () => {
  process.env.NODE_ENV === "development" && console.log("GA init");
  ReactGA.initialize("UA-157726951-1");
};

export const logPageView = () => {
  process.env.NODE_ENV === "development" && console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
