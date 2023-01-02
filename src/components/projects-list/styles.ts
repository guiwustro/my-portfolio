import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 20px;

  .project-title {
    display: flex;
    gap: 20px;
    align-items: center;
    & > span {
      font-weight: 700;
    }
  }

  & > .project-title > h3 {
    color: ${(props) => props.theme.colors["primary-color-700"]};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 43px;
    font-weight: 700;
    /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */
  }

  & > ul {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    width: 100%;
  }

  & > ul > li {
    height: 270px;
    width: 100%;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors["primary-color-200"]};
    .item-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
      & > h4 {
        font-size: 1.3rem;
        font-weight: 700;
        /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */
        color: ${(props) => props.theme.colors["primary-color-500"]};
      }

      & > a {
        position: relative;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        z-index: 0;
      }
      & > a > svg {
        width: 25px;
        height: 25px;
      }

      & > a:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        transition: 0.5s;
        transform: scale(0.9);
        z-index: -1;
        border-radius: 50%;
      }

      & > a:hover:before {
        transform: scale(1.2);
        background: ${(props) => props.theme.colors["hover-color-github"]};
        filter: blur(3px);
      }
    }
  }
  .project-image {
    transition: transform 0.4s;
  }

  @media screen and (min-width: 425px) {
    & > ul > li {
      height: 300px;
      .item-header {
        & > h4 {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 490px) {
    & > ul > li {
      height: 320px;
    }
  }
  @media screen and (min-width: 530px) {
    & > ul > li {
      height: 340px;
    }
  }
  @media screen and (min-width: 580px) {
    & > ul > li {
      height: 380px;
    }
  }
  @media screen and (min-width: 640px) {
    & > ul > li {
      height: 420px;
    }
  }
  @media screen and (min-width: 680px) {
    & > ul > li {
      height: 460px;
    }
  }

  @media screen and (min-width: 768px) {
    & > ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 25px;
      justify-content: flex-start;
      li {
        width: 48%;
        height: 300px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    & > ul > li {
      width: 31.5%;
      height: 280px;
    }
  }
  @media screen and (min-width: 1200px) {
    & > ul > li {
      width: 31.5%;
      height: 300px;
    }
  }
  @media screen and (min-width: 1440px) {
    & > ul {
      column-gap: 38px;
    }
  }
`;

export const ImageContainer = styled.div`
  & > div {
    height: 100%;
    width: 100%;
  }
  width: 100%;
  position: relative;
  height: calc(100% - 50px);

  cursor: pointer;

  .project-image {
    display: block;
    width: 100%;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    height: 100%;
  }

  & > .image-overlay:hover {
    background: ${(props) => props.theme.colors["background-project-image"]};

    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  & > .image-overlay:hover > .image-description {
    opacity: 1;
  }

  .image-overlay > .image-description {
    position: absolute;
    top: 0;
    margin: 7%;
    left: 0;
    text-align: center;
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 150px;

    margin: 4%;
    max-height: 200px;

    min-height: 150px;
    justify-content: space-between;
    opacity: 0;
    & > p {
      line-height: 25px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      font-size: 1.1rem;
      text-overflow: ellipsis;
      overflow: hidden;

      word-wrap: break-word;
      max-height: 130px;
    }

    &:hover {
      opacity: 1;
    }
    cursor: pointer;
    color: ${(props) => props.theme.colors["text-white"]};
  }
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
  }

  .image-description {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContainerSeeProject = styled.span`
  padding: 5px 30px;
  font-weight: 500;
  font-size: 1.4rem;
  background: ${(props) => props.theme.colors["primary-color-see-website"]};
  text-align: center;
  justify-self: end;
  color: ${(props) => props.theme.colors["text"]};
`;

export const TechIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
