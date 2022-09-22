import { createContext, ReactNode, useContext, useState } from "react";

type newState = boolean | undefined;
interface IMenuDropDownBarContextData {
  isOpenMenuDropDown: boolean;
  toogleMenuDropDown: (newState: newState) => void;
}

interface IMenuChildren {
  children: ReactNode;
}

const MenuDropDownContext = createContext({} as IMenuDropDownBarContextData);

export const MenuDropDownProvider = ({ children }: IMenuChildren) => {
  const [isOpenMenuDropDown, setIsOpenMenuDropDown] = useState(false);
  const toogleMenuDropDown = (newState: boolean | undefined) => {
    newState
      ? setIsOpenMenuDropDown(newState)
      : setIsOpenMenuDropDown((state) => !state);
  };

  return (
    <MenuDropDownContext.Provider
      value={{ isOpenMenuDropDown, toogleMenuDropDown }}
    >
      {children}
    </MenuDropDownContext.Provider>
  );
};

export const useMenuDropDownContext = () => useContext(MenuDropDownContext);
