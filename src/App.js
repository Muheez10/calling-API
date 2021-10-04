import './App.css';
import React from 'react';
import Navbar from './component/NavBar';
import Cards from './component/Card';
import WorldTable from './component/WorldTable';

function App() {
  return (
    <div className='App'>
     <Navbar/>
     <Cards/>
    <WorldTable/>
    </div>
  );
}

export default App;
