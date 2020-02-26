import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { GtagNoscript, GtagScript } from "utils/gtag";
import { ServerStyleSheets } from "@material-ui/styles";
import * as snippet from "@segment/snippet";
import theme from "theme";

const paypalClientId = process.env.NODE_ENV === "development" ? "sb" : process.env.PAYPAL_CLIENT_ID;

class MyDocument extends Document {
  renderSnippet() {
    const opts = {
      apiKey: "1FmwOTto4Rl0jFYyAIflzdfVbqXw1mrN",
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true
    };

    if (process.env.NODE_ENV === "development") {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  render() {
    return (
      <html lang="fr">
        <Head>
          {/* Google Tag Manager */}
          {/* <GtagScript /> */}
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.secondary.main} />
          {/* Favicon */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://drive.google.com/uc?export=view&id=1_ttsx9f8zx95Xk1HJOaNkwbUi-_qInE9"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://drive.google.com/uc?export=view&id=1_ttsx9f8zx95Xk1HJOaNkwbUi-_qInE9"
          />
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet" />
          {/* Animations */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css" />
          {/* Payments */}
          <script src="https://js.stripe.com/v3/" />
          <script src={`https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=EUR`} />
        </Head>
        <body>
          {/* <GtagNoscript /> */}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  };
};

export default MyDocument;
