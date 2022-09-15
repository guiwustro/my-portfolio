import styled from "styled-components";

export const TranslationContainer = styled.div`
  position: relative;
  min-width: 130px;
`;
export const ActualLanguageContainer = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 30px;
  left: -25px;
  margin: 0 10px 10px 10px;

  padding-top: 14px;
  z-index: 1;
  width: 158px;
  height: 76px;
  background-color: ${(props) => props.theme.colors["blue-200"]};
  border: 1px solid ${(props) => props.theme.colors["blue-250"]};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  & > button {
    padding-left: 15px;

    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
