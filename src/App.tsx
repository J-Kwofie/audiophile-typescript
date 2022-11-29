import Navbar  from './components/Navbar';
import {GlobalStyled} from './stylesheet/GlobalStyled'
import {ThemeProvider } from 'styled-components'
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
    </div>
    </ThemeProvider>
  );
}

export default App;
