import styled from "styled-components";

export const Button = styled.button`
  & > svg {
    width: 17px;
    height: 17px;
    fill: ${(props) => props.theme.colors.text};
  }
`;
