import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/Navbar';
import Router from './components/Router';
import './App.css';
import img from './components/pokepedia.png';

function App() {
  const [pokeList, setPokeList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <img className='logo1' src={img} />
        <NavBar />
        <Router pokeList={pokeList} setPokeList={setPokeList} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;