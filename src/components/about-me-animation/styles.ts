import styled from "styled-components";

export const AnimationTextContainer = styled.div`
  @keyframes text-clip {
    from {
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
  @keyframes inner-left {
    from {
      /* transform: translateX(10%); */
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
