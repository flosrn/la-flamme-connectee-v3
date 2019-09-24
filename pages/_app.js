import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import { UserContextProvider } from "../src/contexts/UserContext";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "theme";
import "static/scss/la-flamme-connectee.scss";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserContextProvider>
    );
  }
}

export default MyApp;
