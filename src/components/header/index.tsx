import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import MenuDropDown from "components/menu-drop-down";
import ThemeButton from "components/theme-button";
import { useMenuDropDownContext } from "contexts/menuDropDownProvider";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Link from "next/link";
import { UnderLineAnimation } from "styles/buttons";

import { withTranslation } from "../../../i18n";
import LogoGW from "../../assets/icons/gw.svg";
import TranslationMenu, { NewAnimatePresenceProps } from "../translation-menu";
import {
  ButtonMenu,
  CenterContainer,
  Container,
  ContainerTheme,
} from "./styles";
const Header = ({ t }: { t: any }) => {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

  const { isOpenMenuDropDown, toogleMenuDropDown } = useMenuDropDownContext();
  return (
    <CenterContainer>
      <Container>
        <div>
          <LogoGW />
        </div>
        <Desktop>
          <nav>
            <UnderLineAnimation>
              <Link href="/#home">
                <a>{t("header.home")}</a>
              </Link>
            </UnderLineAnimation>
            <UnderLineAnimation>
              <Link href="/#technologies">
                <a>{t("header.technologies")}</a>
              </Link>
            </UnderLineAnimation>
            <UnderLineAnimation>
              <Link href="/#projects">
                <a>{t("header.projects")}</a>
              </Link>
            </UnderLineAnimation>
            <UnderLineAnimation>
              <Link href="/#contact">
                <a>{t("header.contact")}</a>
              </Link>
            </UnderLineAnimation>
          </nav>
          <ContainerTheme>
            <TranslationMenu />
            {/* <ThemeButton /> */}
          </ContainerTheme>
        </Desktop>
        <Mobile>
          <ButtonMenu onClick={() => toogleMenuDropDown(undefined)}>
            {isOpenMenuDropDown ? <AiOutlineClose /> : <AiOutlineMenu />}
          </ButtonMenu>
          <NewAnimatePresence>
            {isOpenMenuDropDown && <MenuDropDown />}
          </NewAnimatePresence>
        </Mobile>
      </Container>
    </CenterContainer>
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
