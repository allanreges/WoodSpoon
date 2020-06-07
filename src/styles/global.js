import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    max-width: 1280px;
    -webkit-font-smoothing: antialised;
    margin: 0 auto;
    background: #F5F8FA 0% 0% no-repeat padding-box;
  }

  body, input, button {
    font-family: 'Rubik', sans-serif;
    font-size: 13px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300
  }

  button {
    cursor: pointer;
  }
`;
