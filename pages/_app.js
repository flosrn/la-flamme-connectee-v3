import React from "react";
import App from "next/app";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "@material-ui/styles";
import { Preloader, Placeholder } from "react-preloading-screen";
import { ShoppingCartProvider } from "src/contexts/ShoppingCartContext";
import { CheckoutProvider } from "src/contexts/CheckoutContext";
import { Provider } from "react-redux";
import withReduxStore from "src/lib/with-redux-store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "components/Loader/Loader";
import CookieConsent from "components/Snackbar/CookieConsent";
import "public/scss/la-flamme-connectee.scss";
import theme from "theme";
import SEO from "utils/next-seo.config";

console.log("process.env.PAYPAL_CLIENT_ID : ", process.env.PAYPAL_CLIENT_ID);
console.log("process.env.STRIPE_PUBLIC_KEY : ", process.env.STRIPE_PUBLIC_KEY);


class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    // Track client-side page views with Segment
    Router.events.on("routeChangeComplete", url => {
      window.analytics.page(url);
    });

    const mainStyle =
      "font-size:34px; font-weight:600; letter-spacing:0.02em; line-height:1.4em; font-family:Nunito, sans-serif; color:#FF8A73";
    const messageStyle =
      "font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:Nunito, sans-serif; color:#13c4a1";
    console.log("%cLa Flamme Connectée", mainStyle);
    console.log("%cAllumez votre poêle à distance", messageStyle);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <DefaultSeo {...SEO} />
        <ThemeProvider theme={theme}>
          <ShoppingCartProvider>
            <CheckoutProvider>
              <Preloader>
                <Provider store={reduxStore}>
                  <CssBaseline />
                  <Component {...pageProps} />
                  <CookieConsent />
                </Provider>
                <Placeholder>
                  <Loader />
                </Placeholder>
              </Preloader>
            </CheckoutProvider>
          </ShoppingCartProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
