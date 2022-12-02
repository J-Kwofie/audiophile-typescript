import { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { NavbarStyled } from './NavbarStyled'
import {useToggleCart} from './context/CartToggle'
import {useCart} from './context/CartContext'

function Navbar() {
  const [displayNav, setDisplayNav] = useState('none')
  const { toggleCart,displayCart} = useToggleCart()
  const {cart} = useCart()


  const handleDisplayNav = ()=>{
    setDisplayNav(displayNav==='none'? 'flex':'none')
  }
  const navigate = useNavigate()
  
  return (
    <div className='navbar-wrapper'>
    <NavbarStyled displayNav={displayNav}>
      <nav>
          <img  src={require('../assets/shared/tablet/icon-hamburger.svg').default} alt="hamburger" onClick={handleDisplayNav} className="humburger"/>
          <ul>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='product/headphones'>Headphones</NavLink>
            <NavLink to='product/speakers' >Speakers</NavLink>
            <NavLink to='product/earphones'>Earphones</NavLink>
          </ul>
        </nav>
      <img src={require('../assets/shared/desktop/logo.svg').default} alt='logo' className='logo'  onClick={()=>navigate('/')}/>
     <div className='cart-container'> <span>{cart.length>=1?cart.length:''}</span> <img src={require('../assets/shared/desktop/icon-cart.svg').default} alt='cart' onClick={()=>{toggleCart(); console.log("PPPP",displayCart)}} className="cartimage"/></div>
    </NavbarStyled>
    </div>
  )
}

export default Navbar
