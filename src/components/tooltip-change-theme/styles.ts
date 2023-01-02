import styled from "styled-components";

export const ToolTipChangeThemeContainer = styled.div`
  position: absolute;
  color: white;
  right: 28px;
  top: 80px;
  background-color: ${({ theme }) => theme.colors["tooltip-background"]};
`;
