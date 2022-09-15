import { useState, useEffect, useRef } from "react";

import { i18n } from "../../../i18n.js";
import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";
import {
  ActualLanguageContainer,
  MenuContainer,
  TranslationContainer,
} from "./styles";

const TranslationMenu = () => {
  // const [actualLanguage, setActualLanguage]
  const [isOpenTranslationMenu, setIsOpenTranslationMenu] = useState(false);
  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    function handleOutClick(event: any) {
      const value = modalRef?.current;

      if (value && !value.contains(event.target)) {
        setIsOpenTranslationMenu(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <TranslationContainer ref={modalRef}>
      <ActualLanguageContainer>
        <button onClick={() => setIsOpenTranslationMenu((state) => !state)}>
          {i18n.language === "pt" ? (
            <>
              <BrazilFlag />
              Português-BR
            </>
          ) : (
            <>
              <UsaFlag />
              English
            </>
          )}
        </button>
      </ActualLanguageContainer>
      {isOpenTranslationMenu && (
        <MenuContainer>
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
        </MenuContainer>
      )}
    </TranslationContainer>
  );
};

export default TranslationMenu;
