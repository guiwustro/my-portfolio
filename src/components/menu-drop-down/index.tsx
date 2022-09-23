import React from "react";
import { useEffect, useRef } from "react";

import ThemeButton from "components/theme-button";
import { useMenuDropDownContext } from "contexts/menuDropDownProvider";
import Link from "next/link";
import { UnderLineAnimation, UnderLineAnimationButton } from "styles/buttons";

// import { withTranslation } from "../../../i18nt";
// import { i18n } from "../../../i18nt.js/index.js";
import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";
import { ContainerMenu } from "./styles";

export const MenuDropDown = () => {
  const { toogleMenuDropDown } = useMenuDropDownContext();

  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    function handleOutClick(event: any) {
      const value = modalRef?.current;

      if (value && !value.contains(event.target)) {
        toogleMenuDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <ContainerMenu
      ref={modalRef}
      initial={{ x: 20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
      exit={{
        x: "30%",
        opacity: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
    >
      <nav>
        <UnderLineAnimation>
          <Link href="/#home">t{/* <a>{t("header.home")}</a> */}</Link>
        </UnderLineAnimation>
        <UnderLineAnimation>
          <Link href="/#technologies">
            t{/* <a>{t("header.technologies")}</a> */}
          </Link>
        </UnderLineAnimation>
        <UnderLineAnimation>
          <Link href="/#projects">t{/* <a>{t("header.projects")}</a> */}</Link>
        </UnderLineAnimation>
        <UnderLineAnimation>
          <Link href="/#contact">t{/* <a>{t("header.contact")}</a> */}</Link>
        </UnderLineAnimation>
      </nav>
      <div>
        <UnderLineAnimationButton>
          <button
            onClick={() => {
              // i18n.changeLanguage("pt");
            }}
          >
            <BrazilFlag />
            Português-BR
          </button>
        </UnderLineAnimationButton>
        <UnderLineAnimationButton>
          <button
            onClick={() => {
              // i18n.changeLanguage("en");
            }}
          >
            <UsaFlag />
            English
          </button>
        </UnderLineAnimationButton>

        <div className="center-div">
          <ThemeButton />
        </div>
      </div>
    </ContainerMenu>
  );
};

MenuDropDown.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

// export default withTranslation("common")(MenuDropDown);
