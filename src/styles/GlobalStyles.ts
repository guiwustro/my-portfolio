import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* { 
    margin:0;
    outline:0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    /* padding: 0 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${(props) => props.theme.colors.body};
}
::-webkit-scrollbar {
  width: 5px;

  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
  background-color: ${(props) => props.theme.colors["primary-color-500"]};
}

#__next{
    width: 100%;

}
@media screen and (min-width: 768px) {
    /* body{
        padding: 0 20px;
    } */

}

button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
}

input {
    border: 0;
}

ul {
    list-style: none;
}

a,p, span, h3,h1, button {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
}
`;

export default GlobalStyles;
