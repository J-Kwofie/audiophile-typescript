import { createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope';  
    font-style: normal;

  }
  a{
    text-decoration: none;
  };
  a:visited{
  };
  li {
    list-style: none;
  };
 
`