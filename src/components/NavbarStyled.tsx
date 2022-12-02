import styled from "styled-components";
import { displayNavProp } from './NavbarType'

export const NavbarStyled = styled.header<displayNavProp>`
    display:grid;
    grid-template-columns: max-content auto max-content;
    align-items: center;
    border-bottom:1px solid rgba(255,255,255,0.1);
    height: 68px;
    padding: 10px 3%;
    background:${(props) => props.theme.color5};

 nav ul{
    width:100%;
    display: ${(props) => props.displayNav};
    position: absolute;
    top: 68px;
    left: 0;
    flex-direction: column;
    background-color: ${(props) => props.theme.color5};
    gap:30px;
    padding: 20px 3%;
    z-index: 2;
 }
  a{
    color: ${(props) => props.theme.color4};
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
 }
 .logo{
    justify-self: center;
 }
 nav a.active{
    color: ${(props) => props.theme.color1};
 };
 .cart-container{
  display:flex;
  flex-direction: column;
  color:#FFFF;
  align-items: center;
 }
 .cart-container span{
  margin-bottom: -5px;

}
  @media (min-width: 776px) {
    .logo{
        justify-self: start;
        margin-left: 60px;
    }  
    
  }

  @media (min-width: 1144px) {
    .humburger{
        display: none;
    }
    .logo{
        order:-1;
        margin-left: 0;
    }
    nav{
        justify-self: center;
    }
    nav ul{
        display: flex;
        flex-direction: row;
        gap:3rem;
        position: unset;
        padding: 0;
    }; 
    .cartimage{
      z-index:2;
    }
  }
` 