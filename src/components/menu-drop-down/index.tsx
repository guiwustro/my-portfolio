import React from "react";
import { useEffect, useRef } from "react";

import ThemeButton from "components/theme-button";
import { useMenuDropDownContext } from "contexts/menuDropDownProvider";
import Link from "next/link";

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
        <Link href="/#home">
          <a>{t("header.home")}</a>
        </Link>
        <Link href="/#technologies">
          <a>{t("header.technologies")}</a>
        </Link>
        <Link href="/#projects">
          <a>{t("header.projects")}</a>
        </Link>
        <Link href="/#contact">
          <a>{t("header.contact")}</a>
        </Link>
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

export default withTranslation("common")(MenuDropDown);
