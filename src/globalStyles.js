import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {  
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  button {
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonColor};
  }

  button:hover {
    background: ${({ theme }) => theme.buttonHover};
  }

  .mysvg {
    fill: red;
  }
`;
