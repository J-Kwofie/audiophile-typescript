import Navbar  from './components/Navbar';
import {GlobalStyled} from './stylesheet/GlobalStyled'
import {ThemeProvider } from 'styled-components'
import Home from './pages/Home';
import Product from './pages/Product';
import NoMatch from './pages/NoMatch';
import ProductDetails from './pages/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Footer from './components/homeComponents/Footer';
import {CartProvider} from './components/context/CartContext'
import {CartTogglerProvider} from './components/context/CartToggle'
import {useToggleCart} from './components/context/CartToggle'

import Cart from './components/cart/Cart'
const theme = {
  color1:"#D87D4A",
  color2:"#000000",
  color3:"#F1F1F1",
  color4:"#FFFFFF",
  color5:"#0E0E0E;",
  hoverColor1:"#fbaf85",
  hoverColor2:"#000000",

  
}
function App() {
  const {displayCart} = useToggleCart()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <CartProvider>
      <CartTogglerProvider>
        <Navbar /> 
        <Cart />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product'>
          <Route path=':category'  element={<Product/>} />
          <Route path=':category/:product_id'  element={<ProductDetails/>} />
        </Route>
        <Route path='*' element={<NoMatch />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
      <Footer />
      </CartTogglerProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
