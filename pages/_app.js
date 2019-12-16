import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { DefaultSeo } from "next-seo";
import { Preloader, Placeholder } from "react-preloading-screen";
import { ShoppingCartProvider } from "src/contexts/ShoppingCartContext";
import withReduxStore from "src/lib/with-redux-store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "components/Loader/Loader";
import "public/scss/la-flamme-connectee.scss";
import theme from "theme";

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
      <>
        <DefaultSeo
          title="La Flamme Connectée"
          titleTemplate="%s | Allumez votre poêle à distance 🔥"
          description="Le Flam'connect est une invention unique et originale qui permet de programmer à distance, via une application dédiée sur smartphone,
          l'allumage d'un poêle à bois ou insert. Profitez ainsi de votre maison à bonne température dès votre retour."
          openGraph={{
            type: "website",
            locale: "fr",
            url: "https://www.laflammeconnectee.fr/",
            site_name: "La Flamme Connectée - Allumez votre poêle à distance 🔥",
            images: [
              {
                url: "https://drive.google.com/uc?export=view&id=1lEyWfrmlrH-Z_i2r5I_xrNujRx9XmhXq",
                width: 786,
                height: 855,
                alt: "Flam'connect"
              }
            ]
          }}
        />
        <ShoppingCartProvider>
          <ThemeProvider theme={theme}>
            <Preloader>
              <Provider store={reduxStore}>
                <CssBaseline />
                <Component {...pageProps} />
              </Provider>
              <Placeholder>
                <Loader />
              </Placeholder>
            </Preloader>
          </ThemeProvider>
        </ShoppingCartProvider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
