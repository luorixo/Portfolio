import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// global app styling
*, *::before, *::after, h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
    display: inline-block;
}

body {
    padding: 0;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
}

html {
    height: 100%;
}
`

export default GlobalStyle;


