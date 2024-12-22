import React from 'react';
import Header from './MainSection';
import Hero from './CaroselSection';
import Info from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <div className='main-container'> 
      
      <Header />
      <Hero />
      </div>
      <Info />
    </div>
  );
}

export default App;
