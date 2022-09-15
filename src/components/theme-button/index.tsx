import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useThemeContext } from "../../contexts/themeProvider";
import { Button } from "./styles";
const ThemeButton = () => {
  const { themeName, toggleTheme } = useThemeContext();
  return (
    <Button className="theme-button" onClick={() => toggleTheme()}>
      {themeName === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
    </Button>
  );
};

export default ThemeButton;
