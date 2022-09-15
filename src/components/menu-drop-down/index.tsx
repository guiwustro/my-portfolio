import React from "react";

import ThemeButton from "components/theme-button";

import { withTranslation } from "../../../i18n";
import { i18n } from "../../../i18n.js";
import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";

const MenuDropDown = ({ t }: { t: any }) => {
  return (
    <div>
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
    </div>
  );
};

MenuDropDown.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(MenuDropDown);
