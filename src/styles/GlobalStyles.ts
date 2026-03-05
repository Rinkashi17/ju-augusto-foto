import { createGlobalStyle } from 'styled-components';
import DreamAvenue from "../assets/fonts/Dream-Avenue.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'DreamAvenue'; // Nome que você vai dar para usar no CSS
    src: url(${DreamAvenue}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: ${props => props.theme.fonts.title};
    font-weight: 500;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    cursor: pointer;
    border: none;
    background: none;
}
`;