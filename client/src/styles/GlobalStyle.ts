import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0, 0);
  } 

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.bgBlue};
  }

  a {
    text-decoration:none;
    cursor: pointer;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }
`;

export default GlobalStyle;
