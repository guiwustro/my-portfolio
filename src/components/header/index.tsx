import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { withTranslation } from "../../../i18n";
import LogoGW from "../../assets/icons/gw.svg";
import { useThemeContext } from "../../contexts/themeProvider";
import TranslationMenu from "../translationMenu";
import { Container, ContainerTheme } from "./styles";
const Header = ({ t }: { t: any }) => {
  const { themeName, toggleTheme } = useThemeContext();
  return (
    <Container>
      <div>
        <LogoGW />
      </div>
      <nav>
        <a href="#home"> {t("header.home")}</a>
        <a href="#technologies"> {t("header.technologies")}</a>
        <a href="#projects"> {t("header.projects")}</a>
        <a href="#contact"> {t("header.contact")}</a>
      </nav>
      <ContainerTheme>
        <TranslationMenu />
        <button id="theme-button" onClick={() => toggleTheme()}>
          {themeName === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </ContainerTheme>
      {/* Theme Toogle */}
    </Container>
  );
};

Header.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Header);
