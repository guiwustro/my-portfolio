import styled from "styled-components";

interface IContainerProps {
  isMoreThan5Images: boolean;
}
export const Container = styled.div<IContainerProps>`
  .embla {
    position: relative;
    max-width: 750px;
    max-width: 100%;

    margin-left: auto;
    margin-right: auto;
  }

  .embla__viewport {
    overflow: hidden;
    padding-top: 10px;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
  }

  .embla__slide-main {
    padding-left: 10px;
    min-width: 100%;
    position: relative;
    height: 200px;
    max-height: 200px;
    /* width: 100%; */
    /* min-height: auto; */
  }

  .embla__slide__thumbnail {
    position: absolute;
    opacity: 0.2;
    top: 0;
    bottom: 0;
    left: -10000%;
    right: -10000%;
    margin: auto;
    min-width: 1000%;
    min-height: 1000%;
    max-width: none;
    transform: scale(0.1);
    transition: opacity 0.2s;
  }

  .embla__slide {
    padding-left: 10px;
    min-width: 100%;
    position: relative;
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .embla__slide__img {
    position: absolute;
    display: block;
    min-width: 100%;
    max-width: none;
    -ms-transform: translate(-50%, -50%);
    object-fit: contain;
    height: max-content;
    height: min-content;
    height: 100%;
  }

  .embla--thumb {
    padding: 0;
    margin-top: -12px;
    padding-top: 10px;
  }

  .embla__container--thumb {
    cursor: default;
    margin-left: -8px;
    display: flex;
    justify-content: ${({ isMoreThan5Images }) =>
      isMoreThan5Images ? "flex-start" : "center"};
  }

  .embla__slide--thumb {
    padding-left: 8px;
    min-width: 20%;
  }

  .embla__slide__inner--thumb {
    touch-action: manipulation;
    cursor: pointer;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    height: 60px;
    width: 100%;
    background-color: transparent;
    position: relative;
    display: block;
    overflow: hidden;
  }

  .embla__slide--thumb.is-selected .embla__slide__thumbnail {
    opacity: 1;
  }

  .image {
    object-fit: contain;
    width: auto;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (min-width: 425px) {
    .embla__slide-main {
      height: 250px;
      max-height: 250px;
    }
    .embla__slide__inner--thumb {
      height: 60px;
    }
  }
  @media screen and (min-width: 650px) {
    .embla__slide-main {
      height: 300px;
      max-height: 300px;
    }
    .embla__slide__inner--thumb {
      height: 60px;
    }
  }

  @media screen and (min-width: 768px) {
    .embla {
      padding: 20px;
    }
    .embla__slide-main {
      height: 350px;
      max-height: 350px;
    }
    .embla__slide__inner--thumb {
      height: 100px;
    }
  }

  @media screen and (min-width: 880px) {
    .embla__slide-main {
      height: 450px;
      max-height: 450px;
    }
  }
  @media screen and (min-width: 1024px) {
    .embla__slide-main {
      height: 330px;
      max-height: 330px;
    }
  }
  @media screen and (min-width: 1200px) {
    .embla__slide-main {
      height: 400px;
      max-height: 400px;
    }
  }
  @media screen and (min-width: 1400px) {
    .embla__slide-main {
      height: 530px;
      max-height: 530px;
    }
  }
`;
