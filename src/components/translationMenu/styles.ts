import styled from "styled-components";

export const TranslationContainer = styled.div`
  position: relative;
  min-width: 130px;
`;
export const ActualLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 30px;
  left: -20px;
  margin: 0 10px 10px 10px;

  padding-top: 10px;
  z-index: 1;
  width: 158px;
  height: 70px;
  background-color: ${(props) => props.theme.colors["blue-200"]};
  border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  & > div {
    padding-left: 10px;

    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const BackGroundMenu = styled.div`
  /* position: absolute;

  top: 50px;
  width: 158px;
  height: 77px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors["blue-200"]};
  border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  border-radius: 5px; */
`;
