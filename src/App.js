import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
  <div>
    <h1>Hello Anas</h1>
    <Dinner dishName="Pizza" sweet="Custard"></Dinner>
    <Dinner dishName="Biryani" sweet="Kheer"></Dinner>
    <Dinner dishName="Burger" sweet="Icecream"></Dinner>
  </div>    
  );
}

export default App;
