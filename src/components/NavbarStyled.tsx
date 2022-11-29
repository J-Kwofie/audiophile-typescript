import styled from "styled-components";
import { displayNavProp } from './NavbarType'

export const NavbarStyled = styled.header<displayNavProp>`
    display:grid;
    grid-template-columns: max-content auto max-content;
    align-items: center;
    border-bottom:1px solid rgba(255,255,255,0.1);
    height: 68px;
    padding: 10px 3%;
    background:${(props) => props.theme.color2};

 nav ul{
    width:100%;
    display: ${(props) => props.displayNav};
    position: absolute;
    top: 68px;
    left: 0;
    flex-direction: column;
    background-color: ${(props) => props.theme.color2};
    gap:30px;
    padding: 10px 3%;
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
` 