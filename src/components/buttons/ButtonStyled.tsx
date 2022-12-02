import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 6px;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
    border-radius: 3px;
    width: 168px ;
    height: 48px;
    z-index: 2;
    &:hover{
      background: #FBAF85;
    }
`
export const Button1 = styled(StyledButton)`
  background: ${(props)=>props.theme.color1};
  color: ${(props)=>props.theme.color4};
  &:hover{
      background: ${(props)=>props.theme.hoverColor1};
    }
`
export const Button2 = styled(StyledButton)`
  background: ${(props)=>props.theme.color4};
  color: ${(props)=>props.theme.color2};
  border: 1px solid #000000;
  &:hover{
      background: ${(props)=>props.theme.hoverColor2};
      color: ${(props)=>props.theme.color4};
    }
`
export const Button3 = styled(StyledButton)`
  background: ${(props)=>props.theme.color2};
  color: ${(props)=>props.theme.color4};
  &:hover{
      background: ${(props)=>props.theme.color4};
      color: ${(props)=>props.theme.color2};

    }
`