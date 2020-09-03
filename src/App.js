import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>App count : {count}</p>
      <Header count = {count} setCount = {setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;

