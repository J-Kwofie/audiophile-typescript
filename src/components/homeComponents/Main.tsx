import React from 'react'
import { MainSectionStyled } from './MainStyled'
import { useNavigate } from 'react-router'
import {Button1} from '../buttons/ButtonStyled'
function Main() {
    const navigate = useNavigate()
  return (
    <MainSectionStyled>
    <div>
    <h1 className='heading'>New product</h1>
     <div className='product'>
      <span> XX99 Mark II </span>
      <span> Headphones </span>
     </div>
     <p className='product-message'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    <Button1  onClick={()=>navigate('/product/headphones/xx99-mark-two-headphones')}>See product</Button1>  
    </div>          
  </MainSectionStyled>
  )
}

export default Main
