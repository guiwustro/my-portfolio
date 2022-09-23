import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useMediaQuery } from "react-responsive";

import { MenuDropDown } from "components/menu-drop-down";
import ThemeButton from "components/theme-button";
import { useMenuDropDownContext } from "contexts/menuDropDownProvider";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { UnderLineAnimation } from "styles/buttons";

// import { withTranslation } from "../../../i18nt";
import LogoGW from "../../assets/icons/gw.svg";
import TranslationMenu, { NewAnimatePresenceProps } from "../translation-menu";
import {
  ButtonMenu,
  CenterContainer,
  Container,
  ContainerTheme,
} from "./styles";
const Header = () => {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

  const { isOpenMenuDropDown, toogleMenuDropDown } = useMenuDropDownContext();
  return (
    <CenterContainer>
      <Container>
        <div>
          <LogoGW />
        </div>

        <nav>
          <UnderLineAnimation>
            <Link href="/#home">t{/* <a>{t("header.home")}</a> */}</Link>
          </UnderLineAnimation>
          <UnderLineAnimation>
            <Link href="/#technologies">
              <template></template>
              {/* <a>{t("header.technologies")}</a> */}
            </Link>
          </UnderLineAnimation>
          <UnderLineAnimation>
            <Link href="/#projects">
              t{/* <a>{t("header.projects")}</a> */}
            </Link>
          </UnderLineAnimation>
          <UnderLineAnimation>
            <Link href="/#contact">t{/* <a>{t("header.contact")}</a> */}</Link>
          </UnderLineAnimation>
        </nav>
        <ContainerTheme>
          <TranslationMenu />
          {/* <ThemeButton /> */}
        </ContainerTheme>

        {/* <Mobile>
          <ButtonMenu onClick={() => toogleMenuDropDown(undefined)}>
            {isOpenMenuDropDown ? <AiOutlineClose /> : <AiOutlineMenu />}
          </ButtonMenu>
          <NewAnimatePresence>
            {isOpenMenuDropDown && <MenuDropDown />}
          </NewAnimatePresence>
        </Mobile> */}
      </Container>
    </CenterContainer>
  );
};

// const Desktop = ({ children }: any) => {
//   const useDesktopMediaQuery = () =>
//     useMediaQuery({
//       minWidth: 769,
//     });

//   return <>{useDesktopMediaQuery() && children}</>;
// };

// const Mobile = ({ children }: any) => {
//   const useMobileMediaQuery = () =>
//     useMediaQuery({
//       maxWidth: 768,
//     });

//   return <>{useMobileMediaQuery() && children}</>;
// };

Header.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

// export default withTranslation("common")(Header);
export default Header;
