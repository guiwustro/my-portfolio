import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 20px;

  & > h3 {
    color: ${(props) => props.theme.colors["blue-700"]};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 43px;
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
    height: 250px;
    width: 100%;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors["blue-200"]};
    .item-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
      & > h4 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors["blue-500"]};
      }
      & > a > svg {
        fill: ${(props) => props.theme.colors["blue-500"]};
        width: 25px;
        height: 25px;
      }
    }
  }
  .project-image {
    transition: transform 0.4s;
  }

  @media screen and (min-width: 425px) {
    & > ul > li {
      height: 300px;
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
      justify-content: space-between;
      li {
        width: 48%;
        height: 300px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    & > ul > li {
      width: 31%;
      height: 250px;
    }
  }
  @media screen and (min-width: 1200px) {
    & > ul > li {
      width: 31%;
      height: 300px;
    }
  }
  /* @media screen and (min-width: 1440px) {
    & > ul > li {
      width: 31%;
      height: 350px;
    } */
  /* } */
`;

export const ImageContainer = styled.div`
  & > div {
    width: 100%;
    height: calc(100% - 50px);
  }
  width: 100%;
  position: relative;
  height: 100%;
  cursor: pointer;

  .project-image {
    display: block;
    width: 100%;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    height: 100%;
  }
  & > .image-overlay:hover {
    background: ${(props) => props.theme.colors["blue-200"]};
    background: rgba(16, 54, 83, 0.9);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  & > .image-overlay:hover > .image-description {
    opacity: 1;
  }

  .image-overlay > .image-description {
    position: absolute;
    top: 0;
    margin: 10%;
    left: 0;
    text-align: center;
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 150px;
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
    height: calc(100% - 50px);
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
  background: ${(props) => props.theme.colors["blue-see-website"]};
  text-align: center;
  justify-self: end;
  color: ${(props) => props.theme.colors["text"]};
`;
