import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerMenu = styled(motion.div)`
  position: fixed;
  height: calc(100vh - 70px);
  justify-content: space-between;
  top: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 230px;
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
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin-top: 29px;
    display: flex;
    align-self: flex-start;
    & > button {
      display: flex;
      gap: 5px;
    }
    & > .center-div {
      align-self: center;
    }
  }
`;
