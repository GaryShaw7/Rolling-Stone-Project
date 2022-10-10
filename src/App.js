import './App.css';
import DisplayCards from './Card.tsx';
import NavBar from './NavBar.tsx';
import GetData from './DiscogsApi.tsx';
import React from 'react';


function App() {
  return (
    <>
    <NavBar />
    <DisplayCards />
    <GetData />
    
    </>
  );
}

export default App;
