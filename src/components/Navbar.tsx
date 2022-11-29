import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { NavbarStyled } from './NavbarStyled'
function Navbar() {
  const [displayNav, setDisplayNav] = useState('none')
  const handleDisplayNav = ()=>{
    setDisplayNav(displayNav==='none'? 'flex':'none')
  }
  return (
    <NavbarStyled displayNav={displayNav}>
      <nav>
          <img  src={require('../assets/shared/tablet/icon-hamburger.svg').default} alt="hamburger" onClick={handleDisplayNav} />
          <ul>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='product/headphones'>Headphones</NavLink>
            <NavLink to='product/speakers' >Speakers</NavLink>
            <NavLink to='product/earphones'>Earphones</NavLink>
          </ul>
        </nav>
      <img src={require('../assets/shared/desktop/logo.svg').default} alt='logo' className='logo' />
      <img src={require('../assets/shared/desktop/icon-cart.svg').default} alt='cart' />
    </NavbarStyled>
  )
}

export default Navbar
