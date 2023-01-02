import React from "react";
import { useEffect, useRef } from "react";

import ThemeButton from "components/theme-button";
import { useMenuDropDownContext } from "contexts/menuDropDownProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { IHomepageProps } from "pages";
import { UnderLineAnimation, UnderLineAnimationButton } from "styles/buttons";
import { homePageInfo } from "translations/home";

import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";
import { ContainerMenu } from "./styles";

const MenuDropDown = ({ locale }: IHomepageProps) => {
  const { toogleMenuDropDown } = useMenuDropDownContext();
  const { contact, home, projects, technologies, colors } =
    homePageInfo[locale].header;
  const { pathname, asPath, query } = useRouter();
  const router = useRouter();

  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  });

  return (
    <ContainerMenu
      ref={modalRef}
      initial={{ x: "50%", opacity: 0 }}
      animate={{
        x: "0%",
        opacity: 1,

        transition: {
          duration: 0.5,
          stiffness: 100,
        },
      }}
      exit={{
        x: "50%",
        opacity: 0,
        transition: {
          duration: 0.5,
          stiffness: 100,
        },
      }}
    >
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
      <div className="center-div">
        <ThemeButton colors={colors} />
      </div>
      <div>
        <UnderLineAnimationButton>
          <button
            onClick={() => {
              router.push({ pathname, query }, asPath, {
                locale: "default",
              });
            }}
          >
            <BrazilFlag />
            Português-BR
          </button>
        </UnderLineAnimationButton>
        <UnderLineAnimationButton>
          <button
            onClick={() => {
              router.push({ pathname, query }, asPath, {
                locale: "en",
              });
            }}
          >
            <UsaFlag />
            English
          </button>
        </UnderLineAnimationButton>
      </div>
    </ContainerMenu>
  );
};

export default MenuDropDown;
