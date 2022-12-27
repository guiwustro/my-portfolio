import { motion } from "framer-motion";
import styled from "styled-components";

export const TechsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  & > h3 {
    color: ${(props) => props.theme.colors["blue-700"]};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 43px;
    /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */
  }
  .tech-list {
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    row-gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;
      width: 90px;
      height: 100px;
      & > h4 {
        text-align: center;
        color: ${(props) => props.theme.colors["blue-700"]};
        font-size: 1rem;
        line-height: 24px;
        height: 48px;
        display: flex;
        align-items: center;
        font-weight: 700;
        /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */
      }
      & > svg {
        fill: ${(props) => props.theme.colors["blue-500"]};
        width: 40px;
        height: 40px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 30px;

    .tech-list {
      justify-content: flex-start;
      .tech-item {
        & > svg {
          fill: ${(props) => props.theme.colors["blue-500"]};
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;
