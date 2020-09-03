import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('Gadgets')
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>App count : {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;

