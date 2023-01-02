import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { ThemeProvider } from "styled-components";

import {
  darkBlueTheme,
  lightBlueTheme,
  greenTheme,
  salmonTheme,
} from "../styles/themes";

export type TThemes = "darkBlue" | "green" | "salmon";
interface IThemeContextData {
  themeName: TThemes;
  toggleTheme: (theme: TThemes) => void;
}

interface IThemeChildren {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider = ({ children }: IThemeChildren) => {
  const [themeName, setThemeName] = useState<TThemes>("darkBlue");

  const themes = {
    lightBlue: lightBlueTheme,
    darkBlue: darkBlueTheme,
    green: greenTheme,
    salmon: salmonTheme,
  };

  const theme = useMemo(() => {
    return themes[themeName];
  }, [themeName]);

  // const toogleTheme =

  const toggleTheme = useCallback((theme: TThemes) => {
    setThemeName(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
