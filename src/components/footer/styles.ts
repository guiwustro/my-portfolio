import styled from "styled-components";

export const Container = styled.footer`
  height: 60px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(204, 204, 219, 1);
  justify-content: center;
  background-color: ${({ theme }) => theme.colors["footer-color"]};

  span {
    font-family: "Lato";
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 26px;
    color: #ffffff;
  }
`;
