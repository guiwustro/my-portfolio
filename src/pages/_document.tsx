/* eslint-disable */

import Document, { Html, Head, Main, NextScript } from "next/document";

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
