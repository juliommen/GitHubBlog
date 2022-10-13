import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  :focus{
    outline:none;
  }

  body {
    background-color: ${(props) => props.theme.background}
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  h1, h2, p, main {
    line-height:1.6;
  }
`
