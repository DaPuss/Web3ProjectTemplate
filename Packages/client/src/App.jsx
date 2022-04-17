import Mint from './components/Mint';
import Stake from './components/Stake';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { Route, Routes  } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
* {
  font-family: 'Press Start 2P', cursive;
}
`;

function App() {
  
  return (        
    <Styles>
      <NavigationBar/>
      <Routes>                
          <Route path='/mint' element={<Mint/>}/>  
          <Route path='/stake' element={<Stake/>}/>     
          <Route path='/' element={<Home/>}/>                                             
      </Routes>
    </Styles>    
);
}

export default App
