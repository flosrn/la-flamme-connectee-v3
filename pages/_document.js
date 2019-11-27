import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import theme from "theme";
import { getSessionFromServer, getUserScript, authInitialProps } from "../server/api/auth";

class MyDocument extends Document {
  render() {
    // const { currentUser = {} } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* Favicon */}
          <link rel="shortcut icon" type="image/x-icon" href="/static/img/logo/laflammeco.png" />
          {/* Fonts */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Courgette|Economica&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Arima+Madurai&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Montserrat&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          {/* Payment */}
          <script src="https://js.stripe.com/v3/" />
        </Head>
        <body>
          <Main />
          {/* <script dangerouslySetInnerHTML={{ __html: getUserScript(currentUser) }} /> */}
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
  // const currentUser = await getSessionFromServer(ctx);

  return {
    ...initialProps,
    // ...currentUser,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
