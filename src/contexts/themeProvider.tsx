import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { ThemeProvider } from "styled-components";

import { darkBlueTheme, lightBlueTheme } from "../styles/themes";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IThemeChildren {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider = ({ children }: IThemeChildren) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  const theme = useMemo(() => {
    if (themeName === "light") return lightBlueTheme;

    return darkBlueTheme;
  }, [themeName]);

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light",
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
