import { useState, useEffect, useRef } from "react";

import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import { UnderLineAnimationButton } from "styles/buttons";

// import { i18n } from "../../../i18nt.js/index.js";
import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";
import { MenuContainer, TranslationContainer } from "./styles";
export interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

const TranslationMenu = () => {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

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
      <UnderLineAnimationButton>
        {/* <button onClick={() => setIsOpenTranslationMenu((state) => !state)}>
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
        </button> */}
      </UnderLineAnimationButton>
      <NewAnimatePresence>
        {isOpenTranslationMenu && (
          <MenuContainer
            initial={{ y: "-25%", opacity: 0 }}
            // animate={{ y: "0%", opacity: 1 }}
            // exit={{ y: "-25%", opacity: 0, duration: 0.25 }}
            // transition={{ type: "spring", stiffness: "100", duration: "0.75" }}
          >
            <button
              onClick={() => {
                // i18n.changeLanguage("pt");
                setIsOpenTranslationMenu((state) => !state);
              }}
            >
              <BrazilFlag />
              Português-BR
            </button>

            <button
              onClick={() => {
                // i18n.changeLanguage("en");
                setIsOpenTranslationMenu((state) => !state);
              }}
            >
              <UsaFlag />
              English
            </button>
          </MenuContainer>
        )}
      </NewAnimatePresence>
    </TranslationContainer>
  );
};

export default TranslationMenu;
