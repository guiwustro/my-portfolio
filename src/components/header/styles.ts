import styled from "styled-components";

export const CenterContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  height: 70px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1450px) {
  }
`;
export const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin-left: 0 auto;
  padding: 0 20px;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    height: 70px;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${(props) => props.theme.colors["primary-color-200"]};
    border-bottom: 1px solid;

    border-color: ${(props) => props.theme.colors["primary-color-250"]};
  }
  #logo {
  }
  & > nav {
    display: none;
    a {
      font-size: 1.1rem;
      font-weight: 700;
      /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */
      :hover {
        text-decoration: none;
      }
    }
  }

  .logo__mobile {
    display: block;
    margin-top: 5px;

    margin-left: 5px;
  }
  .logo__desktop {
    display: none;
    margin-top: 5px;
    margin-left: 5px;
  }

  @media screen and (min-width: 768px) {
    & > nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
    }
  }
  @media screen and (min-width: 1024px) {
    & > nav {
      gap: 40px;
    }
    .logo__mobile {
      display: none;
    }
    .logo__desktop {
      display: block;
    }
  }
`;

export const ContainerTheme = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 300px;
  margin-top: 5px;
  margin-left: 5px;

  @media screen and (min-width: 1024px) {
    gap: 60px;
  }
`;

export const ButtonMenu = styled.button`
  width: 32px;
  height: 28px;
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.theme.colors.text};
  }
`;

export const Mobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Desktop = styled.div`
  display: none;
  & > nav {
    display: flex;
    flex-direction: row;
    gap: 25px;
    a {
      font-weight: 600;
      font-size: 1.1rem;
      :hover {
        text-decoration: none;
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
  }
  @media screen and (min-width: 1024px) {
    nav {
      gap: 60px;
    }
  }
`;

export const JustDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
