import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserContextProvider } from "src/contexts/UserContext";
import "static/scss/la-flamme-connectee.scss";
import theme from "theme";
import { ShoppingCartProvider } from "src/contexts/ShoppingCartContext";

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
        <ShoppingCartProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ShoppingCartProvider>
      </UserContextProvider>
    );
  }
}

export default MyApp;
