import React from "react";
import { useEffect, useRef } from "react";

import ThemeButton from "components/theme-button";
import { useMenuDropDownContext } from "contexts/menuDropDownProvider";

import { withTranslation } from "../../../i18n";
import { i18n } from "../../../i18n.js";
import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";
import { ContainerMenu } from "./styles";

const MenuDropDown = ({ t }: { t: any }) => {
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
    <ContainerMenu ref={modalRef}>
      <nav>
        <a href="#home"> {t("header.home")}</a>
        <a href="#technologies"> {t("header.technologies")}</a>
        <a href="#projects"> {t("header.projects")}</a>
        <a href="#contact"> {t("header.contact")}</a>
      </nav>
      <div>
        <button
          onClick={() => {
            i18n.changeLanguage("pt");
          }}
        >
          <BrazilFlag />
          Português-BR
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          <UsaFlag />
          English
        </button>
        <ThemeButton />
      </div>
    </ContainerMenu>
  );
};

MenuDropDown.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(MenuDropDown);
