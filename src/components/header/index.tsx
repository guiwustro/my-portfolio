import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import MenuDropDown from "components/menu-drop-down";
import ThemeButton from "components/theme-button";

import { withTranslation } from "../../../i18n";
import LogoGW from "../../assets/icons/gw.svg";
import TranslationMenu from "../translation-menu";
import { Container, ContainerTheme } from "./styles";
const Header = ({ t }: { t: any }) => {
  const [isOpenMenuDropDown, setIsOpenMenuDropDown] = useState(false);

  return (
    <Container>
      <div>
        <LogoGW />
      </div>
      <Desktop>
        <nav>
          <a href="#home"> {t("header.home")}</a>
          <a href="#technologies"> {t("header.technologies")}</a>
          <a href="#projects"> {t("header.projects")}</a>
          <a href="#contact"> {t("header.contact")}</a>
        </nav>
        <ContainerTheme>
          <TranslationMenu />
          <ThemeButton />
        </ContainerTheme>
      </Desktop>
      <Mobile>
        <button onClick={() => setIsOpenMenuDropDown((state) => !state)}>
          <AiOutlineMenu />
        </button>
        {isOpenMenuDropDown && <MenuDropDown />}
      </Mobile>
    </Container>
  );
};

const Desktop = ({ children }: any) => {
  const useDesktopMediaQuery = () =>
    useMediaQuery({
      minWidth: 769,
    });

  return <>{useDesktopMediaQuery() && children}</>;
};

const Mobile = ({ children }: any) => {
  const useMobileMediaQuery = () =>
    useMediaQuery({
      maxWidth: 768,
    });

  return <>{useMobileMediaQuery() && children}</>;
};

Header.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Header);
