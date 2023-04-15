import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        text-decoration: none;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        height: 100%;
    }
`