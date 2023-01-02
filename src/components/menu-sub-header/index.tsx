import React, { ReactNode } from "react";

import { MenuContainer } from "./styles";

interface IPropsMenuSubHeader {
  children: ReactNode;
}

const MenuSubHeader = ({ children }: IPropsMenuSubHeader) => {
  return (
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
    >
      {children}
    </MenuContainer>
  );
};

export default MenuSubHeader;
