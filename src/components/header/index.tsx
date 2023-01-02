import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import MenuDropDown from "components/menu-drop-down";
// import ThemeButton from "components/theme-button";
import ThemeButton from "components/theme-button";
import { useMenuDropDownContext } from "contexts/menuDropDownProvider";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IHomepageProps } from "pages";
import { UnderLineAnimation } from "styles/buttons";
import { homePageInfo } from "translations/home";

import LogoGW2 from "../../assets/icons/LogoGW.svg";
import LogoGWMobile from "../../assets/icons/LogoGWMobile.svg";
import TranslationMenu, { NewAnimatePresenceProps } from "../translation-menu";
import {
  ButtonMenu,
  CenterContainer,
  Container,
  ContainerTheme,
  JustDesktop,
  Mobile,
} from "./styles";

const Header = ({ locale }: IHomepageProps) => {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;
  const { contact, home, projects, technologies, colors } =
    homePageInfo[locale].header;
  const { isOpenMenuDropDown, toogleMenuDropDown } = useMenuDropDownContext();
  return (
    <CenterContainer>
      <Container>
        <Link href="/#home">
          <a>
            <div className="logo__desktop">
              <LogoGW2 />
            </div>
            <div className="logo__mobile">
              <LogoGWMobile />
            </div>
          </a>
        </Link>

        <nav>
          <UnderLineAnimation>
            <Link href="/#home">
              <a>{home}</a>
            </Link>
          </UnderLineAnimation>
          <UnderLineAnimation>
            <Link href="/#technologies">
              <a>{technologies}</a>
            </Link>
          </UnderLineAnimation>
          <UnderLineAnimation>
            <Link href="/#projects">
              <a>{projects}</a>
            </Link>
          </UnderLineAnimation>
          <UnderLineAnimation>
            <Link href="/#contact">
              <a>{contact}</a>
            </Link>
          </UnderLineAnimation>
        </nav>
        <ContainerTheme>
          <TranslationMenu />
          <JustDesktop>
            <ThemeButton colors={colors} />
          </JustDesktop>
        </ContainerTheme>
        <Mobile>
          <ButtonMenu onClick={() => toogleMenuDropDown(undefined)}>
            {isOpenMenuDropDown ? <AiOutlineClose /> : <AiOutlineMenu />}
          </ButtonMenu>
          <NewAnimatePresence>
            {isOpenMenuDropDown && <MenuDropDown locale={locale} />}
          </NewAnimatePresence>
        </Mobile>
      </Container>
    </CenterContainer>
  );
};

export default Header;
