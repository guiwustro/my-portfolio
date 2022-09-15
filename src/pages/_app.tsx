import App, { AppContext, AppProps } from "next/app";

import { appWithTranslation } from "../../i18n";
import { AppThemeProvider } from "../contexts/themeProvider";
import GlobalStyles from "../styles/GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
