import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    };
    body {
        background-color: #00aff4;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smothing: antialiased !important;
        font-family: sans-serif;
    }
`;

export default GlobalStyle;
