import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.body};
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
