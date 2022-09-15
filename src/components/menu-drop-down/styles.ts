import styled from "styled-components";

export const ContainerMenu = styled.div`
  position: fixed;
  height: 100vh;
  top: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: ${(props) => props.theme.colors["blue-200"]};
  border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  padding-left: 24px;
  padding-top: 20px;
  nav {
    display: flex;
    flex-direction: column;
    gap: 29px;
  }
`;
