import { useEffect, useRef, useState } from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";

import MenuSubHeader from "components/menu-sub-header";
import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import { UnderLineAnimationButton } from "styles/buttons";

import { TThemes, useThemeContext } from "../../contexts/themeProvider";
import { Button } from "./styles";

interface IThemeColor {
  colorName: TThemes;
  colorCode: string;
}
const themeColors: IThemeColor[] = [
  { colorName: "darkBlue", colorCode: "#7395AE" },
  { colorName: "green", colorCode: "#A5F8B7" },
  { colorName: "salmon", colorCode: "#EAC5C5" },
];
export interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

interface IPropsThemeButton {
  colors: {
    darkBlue: string;
    green: string;
    salmon: string;
  };
}

const ThemeButton = ({ colors }: IPropsThemeButton) => {
  const { themeName, toggleTheme } = useThemeContext();
  const [isOpenThemeMenu, setIsOpenThemeMenu] = useState<boolean>(false);

  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

  const modalRef = useRef<HTMLHeadingElement>(null);

  const actualColor = themeColors.find(
    (color) => color.colorName === themeName,
  )?.colorCode;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleOutClick(event: any) {
      const value = modalRef?.current;

      if (value && !value.contains(event.target)) {
        setIsOpenThemeMenu(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);
  console.log(colors);

  return (
    <div ref={modalRef} style={{ position: "relative" }}>
      <UnderLineAnimationButton>
        <Button onClick={() => setIsOpenThemeMenu((state) => !state)}>
          <VscCircleLargeFilled fontSize={25} fill={actualColor} />
          <span>{colors[themeName]}</span>
        </Button>
      </UnderLineAnimationButton>
      <NewAnimatePresence>
        {isOpenThemeMenu && (
          <MenuSubHeader>
            {themeColors.map(({ colorCode, colorName }) => (
              <Button
                key={colorCode}
                onClick={() => {
                  toggleTheme(colorName);
                }}
              >
                <VscCircleLargeFilled fontSize={25} fill={colorCode} />
                <span>{colors[colorName]}</span>
              </Button>
            ))}
          </MenuSubHeader>
        )}
      </NewAnimatePresence>
    </div>
  );
};

export default ThemeButton;
