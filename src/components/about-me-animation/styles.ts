import styled from "styled-components";

export const AnimationTextContainer = styled.div`
  @keyframes text-clip {
    0% {
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    95% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    100% {
      clip-path: none;
    }
  }

  @keyframes inner-left {
    from {
      width: 90vw;
      transform: translateX(40%);
    }
    to {
      transform: none;
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    display: inline-block;
    animation: inner-left 1s 1s ease both,
      text-clip 1.5s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
  }
`;

export const AnimationImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    animation: image-in 1.5s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;

    @keyframes image-in {
      from {
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      }
      to {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  }
`;
