import styled, { keyframes } from "styled-components";

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
  width: 650px;
  padding: 40px 20px;
  min-height: 600px;
  h1 {
    color: #e9f2ff;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 43px;
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
    align-items: center;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    .formGroup--inline {
      flex-direction: row;
    }
  }
`;
export const FormGroup = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  flex-direction: column;

  & > input {
    width: 100%;
    background: transparent;
    color: #fff;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 10px 0 5px;
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors["blue-250"]};
    letter-spacing: 0.1rem;
  }

  & > label {
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
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
    background: #fff;
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
export const FormGroupArea = styled.div`
  position: relative;
  width: 250px;
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
    background-color: ${(props) => props.theme.colors["blue-250"]};

    letter-spacing: 0.1rem;
    height: 100px;
  }

  & > label {
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    pointer-events: none;
    letter-spacing: 0.1rem;
    padding: 10px 10px 5px;

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
    background: #fff;
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
`;
