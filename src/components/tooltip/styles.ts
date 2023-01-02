import styled, { css } from "styled-components";

interface ITooltipProps {
  width?: number;
  position?: "right" | "left";
  ContainerWidth?: number;
  hiddenDesktop?: boolean;
  iconFontSize?: number;
}

export const Container = styled.div<ITooltipProps>`
  position: relative;
  width: ${({ ContainerWidth }) => ContainerWidth || 20}px;

  svg {
    /* position: absolute; */
    font-size: ${({ iconFontSize }) =>
      iconFontSize ? iconFontSize + "px" : "1.4rem"};
  }
  span {
    width: ${({ width }) => width}px;
    background: ${({ theme }) => theme.colors["tooltip-background"]};
    padding: 5px;
    border-radius: 4px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s;
    visibility: hidden;
    position: absolute;

    ${({ position }) =>
      position === "right"
        ? css`
            bottom: -20%;
            left: -111%;
          `
        : css`
            bottom: calc(100% + 12px);
            left: 61%;
          `}

    transform: translateX(-50%);
    color: #ffffff;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      border-style: solid;
      border-color: #87b4ce transparent;
      border-width: 6px 6px 0 6px;
      ${({ position }) =>
        position === "right"
          ? css`
              top: calc(50% - 5px);
              right: -8px;
              transform: rotate(-90deg);
            `
          : css`
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
            `}
    }
  }
  @media screen and (max-width: 420px) {
    span {
      ${({ position }) =>
        position === "right" &&
        css`
          bottom: -46%;
          left: -73%;
        `}
      max-width: 160px;
    }
  }
  /* Position TOP */
  /* span {
    bottom: calc(100% + 12px);
    left: 50%;

    &::before {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  } */

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
  @media screen and (min-width: 1024px) {
    display: ${({ hiddenDesktop }) => hiddenDesktop && "none"};
  }
`;
