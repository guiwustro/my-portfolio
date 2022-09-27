/* eslint-disable */

import Document, { Html, Head, Main, NextScript } from "next/document";
import logo from "../assets/icons/iconLogo.png";
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" content="text/html" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="site-name" content="GuilhermePortfolio" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <title>Guiilherme Wustro</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href={logo} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
