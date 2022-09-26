import { useState, useEffect, useRef } from "react";

import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { UnderLineAnimationButton } from "styles/buttons";

import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";
import { MenuContainer, TranslationContainer } from "./styles";
export interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

const TranslationMenu = () => {
  const { pathname, asPath, query, locale } = useRouter();
  const router = useRouter();

  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

  const [isOpenTranslationMenu, setIsOpenTranslationMenu] =
    useState<boolean>(false);
  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <button onClick={() => setIsOpenTranslationMenu((state) => !state)}>
          {locale === "default" ? (
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
      </UnderLineAnimationButton>
      <NewAnimatePresence>
        {isOpenTranslationMenu && (
          <MenuContainer
            initial={{ y: "-30%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: 1,

              transition: {
                duration: 0.2,
                stiffness: 100,
              },
            }}
            exit={{
              y: "-30%",
              opacity: 0,

              transition: {
                duration: 0.2,
                stiffness: 100,
              },
            }}
            // transition={{ type: "spring", stiffness: "100", duration: "0.75" }}
          >
            <button
              onClick={() => {
                setIsOpenTranslationMenu(false);
                router.push({ pathname, query }, asPath, {
                  locale: "default",
                });
              }}
            >
              <a>
                <BrazilFlag />
                Português-BR
              </a>
            </button>

            <button
              onClick={() => {
                setIsOpenTranslationMenu(false);
                router.push({ pathname, query }, asPath, {
                  locale: "en",
                });
              }}
            >
              <a>
                <UsaFlag />
                English
              </a>
            </button>
          </MenuContainer>
        )}
      </NewAnimatePresence>
    </TranslationContainer>
  );
};

export default TranslationMenu;
