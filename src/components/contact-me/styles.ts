import styled, { keyframes } from "styled-components";

import arrow from "../../assets/images/arrow-forward.png";
const animate = keyframes`
    0%{
        background-position-x: 0;
    }
    100% {
        background-position-x: 250px;
    }

`;
export const ContainerMaxWidth = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 40px 20px;
  min-height: 600px;

  h1 {
    color: ${({ theme }) => theme.colors["text"]};

    font-weight: 700;
    font-size: 1.8rem;
    padding-bottom: 20px;
    font-weight: 700;
    /* font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif; */
  }
  p {
    line-height: 25px;
    font-size: 1.1rem;
  }
  & > form {
    display: flex;
    gap: 30px;
    flex-direction: column;
  }
  .formGroup--inline {
    display: flex;
    padding-top: 20px;

    gap: 30px;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    width: 650px;
    max-width: 530px;
    & > form {
      & > div:nth-child(2),
      & > div:nth-child(3) {
        max-width: 530px;
      }
    }
    .formGroup--inline {
      flex-direction: row;
      align-items: center;
    }
  }
`;
interface IFormProps {
  errors?: boolean;
}
export const FormGroup = styled.div<IFormProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > input {
    width: 100%;
    background: transparent;
    color: ${(props) => props.theme.colors["primary-color-250"]};
    color: ${({ theme }) => theme.colors["text"]};

    border: none;
    outline: none;
    box-shadow: none;
    ::placeholder {
      letter-spacing: 0.1rem;
    }
    padding: 10px 0 5px;
    font-size: 1rem;
    background-color: #9ec1db21;
  }

  & > label {
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 1);
    color: ${({ theme }) => theme.colors["text"]};

    text-transform: uppercase;
    pointer-events: none;
    letter-spacing: 0.1rem;
    padding: 10px 10px 5px;
    transition: 0.5s;
  }
  & > input:not(:placeholder-shown) ~ label,
  & > input:focus ~ label {
    color: #2196f3;
    transform: translateY(-16px);
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0;
  }
  & > span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${({ errors }) => (errors ? "red" : "#fff")};
    overflow: hidden;
  }
  & > span:before {
    content: "";
    position: absolute;
    width: 100%;
    left: -100%;
    height: 100%;
    background: linear-gradient(90deg, #6cb7f4, #2196f3, #104673, #1b75bf);
    animation: ${animate} 5.5s linear infinite;
  }
  & > input:not(:placeholder-shown) ~ span:before,
  & > input:focus ~ span:before {
    left: 0;
  }
`;
export const FormGroupArea = styled.div<IFormProps>`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  & > textarea {
    width: 100%;
    background: transparent;
    color: #fff;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 1rem;
    background-color: #9ec1db21;

    letter-spacing: 0.1rem;
    height: 150px;
  }

  & > label {
    position: absolute;
    left: 0;
    text-transform: uppercase;
    pointer-events: none;
    letter-spacing: 0.1rem;
    padding: 10px 10px 5px;
    color: ${({ theme }) => theme.colors["text"]};

    transition: 0.5s;
  }
  & > textarea:not(:placeholder-shown) ~ label,
  & > textarea:focus ~ label {
    color: #2196f3;
    transform: translateY(-16px);
    font-size: 0.65rem;
    padding: 0;
  }
  & > span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${({ errors }) => (errors ? "red" : "#fff")};

    overflow: hidden;
  }
  & > span:before {
    content: "";
    position: absolute;
    width: 100%;
    left: -100%;
    height: 100%;
    background: linear-gradient(90deg, #6cb7f4, #2196f3, #104673, #1b75bf);
    animation: ${animate} 5.5s linear infinite;
  }
  & > textarea:not(:placeholder-shown) ~ span:before,
  & > textarea:focus ~ span:before {
    left: 0;
  }

  @media (min-width: 768px) {
  }
`;

export const SubmitButton = styled.div`
  align-self: end;
  button {
    position: relative;
    transform: 50% translate(-50%, -50%);
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    display: inline-block;
    text-transform: uppercase;
    padding: 0.5em 2em;
    border: 2px solid #fff;
    max-height: 50px;
    background-color: #9ec1db21;
  }

  transition: 0.02s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
  & > button::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #2196f3;
    transition: 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1),
      left 0.3s cubic-bezier(0.1, 0, 0.1, 1);
    z-index: -1;
  }
  & > button::after {
    content: "";
    display: inline-block;
    background-image: url(${arrow});
    position: absolute;
    top: 0;
    left: calc(100% - 3em);
    right: 3em;
    bottom: 0;
    background-size: 1.5em;
    background-repeat: no-repeat;
    background-position: center;
    transition: right 0.3s cubic-bezier(0.1, 0, 0.1, 1);
  }
  & > button:hover {
    padding: 0.5em 3.5em 0.5em 0.5em;
  }
  & > button:hover::before {
    left: calc(100% - 3em);
    right: 0;
    transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1),
      left 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    z-index: 1;
  }
  & > button:hover::after {
    right: 0;
    transition: right 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    z-index: 1;
  }
`;
