import React, { ReactNode } from "react";

import { AnimationImageContainer, AnimationTextContainer } from "./styles";

interface INameAnimation {
  children: ReactNode;
}
export const TextAnimation = ({ children }: INameAnimation) => {
  return <AnimationTextContainer>{children}</AnimationTextContainer>;
};

export const ImageAnimation = ({ children }: INameAnimation) => {
  return <AnimationImageContainer>{children}</AnimationImageContainer>;
};
