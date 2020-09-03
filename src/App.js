import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <p>App count : {count}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;

