import  { createGlobalStyle} from 'styled-components'

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
  }
  .cartDiplay{
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7); /* Black background with opacity */
    z-index: 4; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
    display: flex;
  }

  @media (min-width: 1144px) {
    .navbar-wrapper{
      width: 100%;
      padding: 0 10%;
      background:#0E0E0E;

    }
    
  }
 
`