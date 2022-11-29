import { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { NavbarStyled } from './NavbarStyled'
function Navbar() {
  const [displayNav, setDisplayNav] = useState('none')
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
      <img src={require('../assets/shared/desktop/icon-cart.svg').default} alt='cart' />
    </NavbarStyled>
    </div>
  )
}

export default Navbar
