import Navbar  from './components/Navbar';
import {GlobalStyled} from './stylesheet/GlobalStyled'
import {ThemeProvider } from 'styled-components'
import Home from './pages/Home';
import Product from './pages/Product';
import NoMatch from './pages/NoMatch';
import ProductDetails from './pages/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
const theme = {
  color1:"#D87D4A",
  color2:"#000000",
  color3:"#F1F1F1",
  color4:"#FFFFFF",
  hoverColor1:"#fbaf85",
  hoverColor2:"#000000",
  
}
function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
      <GlobalStyled />
        <Navbar /> 
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product'>
          <Route path=':category'  element={<Product/>} />
          <Route path=':category/:product_id'  element={<ProductDetails/>} />
        </Route>
        <Route path='*' element={<NoMatch />} />
        <Route path='checkout' element={<Checkout />} />

      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
