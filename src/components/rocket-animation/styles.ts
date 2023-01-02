import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
100% {
    /* transform: translateX(100%); */
	transform:rotate(360deg); 

}
`;
const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: none;

  .rocket__animation {
    /* animation: ${spin} 12s infinite linear; */
    position: absolute;
    border-radius: 50%;
    height: 100%;
    width: 100%;

    &::after {
      content: "";

      position: absolute;
      transform: translateX(-50%);
      left: -14px;
      height: 60px;
      width: 15px;
      top: 35px;
      transform: rotate(60deg);
      background: linear-gradient(#ffffff, #cceff740, transparent);
      filter: blur(5px);
    }
    &::before {
      content: "";
      position: absolute;
      left: -14px;
      height: 60px;
      width: 15px;
      top: 35px;
      transform: translateX(-50%);

      transform: rotate(60deg);
      background: linear-gradient(#00d0ff, #00d0ff40, transparent);
      filter: blur(30px);
    }
    & > svg {
      fill: #cee1ee;
      height: 50px;
      width: 50px;
      top: 10px;
      right: 10;
      left: 20px;
      /* transform: rotate(45deg); */
      transform: rotate(15deg);
      position: absolute;
    }
  }
  @media screen and (min-width: 768px) {
    transform: scale(1);
    display: block;
  }
`;

export default Container;
