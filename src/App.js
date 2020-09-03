import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Home></Home>
      <Header></Header>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
