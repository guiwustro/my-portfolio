import styled from "styled-components";

export const LightBulbContainer = styled.div`
  position: relative;

  & > svg {
    width: 33px;
    height: 100%;
    fill: ${(props) => props.theme.colors["blue-500"]};
    z-index: 999;
    position: relative;
  }
  & > svg :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    transition: 0.5s;
    transform: scale(1.9);
    background: #0f558d;
  }

  & > svg:hover:before {
    transform: scale(1.2);
    box-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
    background: #0f558d;

    filter: blur(3px);
  }
  & > svg:hover {
    color: linear-gradient(45deg, transparent, #2196f3);
    box-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
    text-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
    background: #0f558d;
  }
  & > svg:hover ~ svg:before {
    color: linear-gradient(45deg, transparent, #2196f3);
    box-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
    text-shadow: 0 0 15px linear-gradient(45deg, transparent, #2196f3);
    background: #0f558d;
  }
`;
