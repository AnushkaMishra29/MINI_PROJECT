import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import Landing from './Frontpage/Landing/Landing'
import Searches from './Frontpage/Search/Search'

function App() {
  return (
   <div>
     <Navbar></Navbar>
     <Landing></Landing>    
     <Searches></Searches> 
   </div>
  );
}

export default App;
