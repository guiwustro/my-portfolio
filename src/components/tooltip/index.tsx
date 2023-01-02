import React, { ReactNode } from "react";

import { Container } from "./styles";

interface TooltipProps {
  title: string;
  position?: "left" | "right";
  width?: number;
  ContainerWidth?: number;
  children: ReactNode;
  hiddenDesktop?: boolean;
  iconFontSize?: number;
}

const Tooltip = ({
  title,
  position,
  children,
  width,
  ContainerWidth,
  hiddenDesktop,
  iconFontSize,
}: TooltipProps) => {
  return (
    <Container
      width={width}
      iconFontSize={iconFontSize}
      ContainerWidth={ContainerWidth}
      position={position}
      hiddenDesktop={hiddenDesktop}
    >
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
