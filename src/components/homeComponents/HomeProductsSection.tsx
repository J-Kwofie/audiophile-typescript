import React from 'react'
 import {HomeProductSectionStyled} from './HomeProductsSectionStyled'
 import {  Button2, Button3 } from '../buttons/ButtonStyled'
 import {useNavigate} from 'react-router-dom'
function HomeProductsSection() {
  const navigate = useNavigate()
  return (
    <HomeProductSectionStyled>
        <section className='section1'>
            <div className='section1-wrapper'>
              <div className='section-container'>
                <div className='product'>
                  <div>
                    <h1>ZX9 </h1>
                    <h1>speaker</h1>
                  </div>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button3 onClick={()=>navigate('/product/speakers/zx9-speaker')}> See product</Button3>
              </div>
              </div>
                
            </div>
        </section>
        <section className="product2">
                <h1>ZX7 speaker </h1>
                <Button2 onClick={()=>navigate('/product/speakers/zx7-speaker')}> See product</Button2>
        </section>
        <section className="product3">
          <div className="product3-wrapper">
            <div>
              <h1>YX1 earphones </h1>
              <Button2 onClick={()=>navigate('/product/speakers/yx1-earphones')}> See product</Button2>
            </div>
          </div>
        </section>
    </HomeProductSectionStyled>
  ) 
}

export default HomeProductsSection