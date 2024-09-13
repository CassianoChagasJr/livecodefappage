import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: "Poppins", sans-serif;
     }


    body {
    background-color: #f1f1f1;
    }
`;

export default GlobalStyle;