import { createGlobalStyle } from 'styled-components'
import { COLORS } from 'config/general'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
  body{
    background-color: ${COLORS.dark};
    color: ${COLORS.white};
  }
  html, body, #__next {
    height: 100%;
    font-family: 'open_sansregular';
  }
  b{
    font-family: 'open_sansbold';
  }
  a{
    color: ${COLORS.white};
    text-decoration: none;
    opacity: 1;
    transition: 0.5s;
    &:hover{
      color:#FF1A1A;
    }
  }
  h1,h2,h3, h4, h5{
    font-family: 'open_sansextrabold';
  }
  p{
    line-height: 30px;
  }
`

export default GlobalStyles
