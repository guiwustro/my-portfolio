import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuContainer = styled(motion.div)`
  position: absolute;
  /* margin: 0 10px 10px 10px; */
  /* padding-top: 14px; */
  /* z-index: 1; */
  left: -11px;
  top: 35px;
  /* min-width: 175px; */
  /* height: 76px; */
  background-color: ${(props) => props.theme.colors["primary-color-200"]};
  border: 1px solid ${(props) => props.theme.colors["primary-color-250"]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & > button {
    padding: 12px 10px;
    font-weight: 600;
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 6px;

    & > a {
      font-weight: 600;
      font-size: 1rem;
      font-weight: 400;
      /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }

  & > button:hover {
    background: ${(props) => props.theme.colors["primary-color-see-website"]};
  }

  & > button:not(:last-of-type) {
    border-bottom: 1px solid #ffffff;
    transition: 1s;
  }
  & > button:nth-child(1),
  button:last-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
