import { MenuDropDownProvider } from "contexts/menuDropDownProvider";
import App, { AppContext, AppProps } from "next/app";

// import { appWithTranslation } from "../../i18nt";
import { AppThemeProvider } from "../contexts/themeProvider";
import GlobalStyles from "../styles/GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppThemeProvider>
      <MenuDropDownProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </MenuDropDownProvider>
    </AppThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;

// export default appWithTranslation(MyApp);
