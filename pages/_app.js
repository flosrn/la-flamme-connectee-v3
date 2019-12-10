import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "public/scss/la-flamme-connectee.scss";
import theme from "theme";
import { ShoppingCartProvider } from "src/contexts/ShoppingCartContext";
import { Provider } from "react-redux";
import withReduxStore from "src/lib/with-redux-store";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <ShoppingCartProvider>
        <ThemeProvider theme={theme}>
          <Provider store={reduxStore}>
            <CssBaseline />
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </ShoppingCartProvider>
    );
  }
}

export default withReduxStore(MyApp);
