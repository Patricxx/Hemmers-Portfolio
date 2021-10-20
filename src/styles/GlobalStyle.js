import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    margin-left: 20%auto;
    margin-right:20%auto;
    padding: 0;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  *:focus {
    -webkit-tap-highlight-color: #000000;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: #000000;
    overflow: overlay; 
  }
`;
export default GlobalStyles;
