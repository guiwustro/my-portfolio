import styled from "styled-components";

export const ContainerMenu = styled.div`
  position: fixed;
  height: calc(100vh - 70px);
  justify-content: space-between;
  top: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: ${(props) => props.theme.colors["blue-200"]};
  border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  padding: 24px;
  nav {
    display: flex;
    flex-direction: column;
    gap: 29px;
  }
  & > div {
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin-top: 29px;
    & > button {
      display: flex;
      gap: 5px;
    }
    & > .center-div {
      align-self: center;
    }
  }
`;
