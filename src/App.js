import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/MenuBar/Menu';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  const setCartCount=()=>{
    setCount(count+1);
  }
  return (
    <div className="App container">
      <Menu count={count}></Menu>
      <AllProducts setCartCount={setCartCount}></AllProducts>
      
    </div>
  );
}

export default App;
