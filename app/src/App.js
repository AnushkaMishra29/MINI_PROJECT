import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import Landing from './Frontpage/Landing/Landing'
import Searches from './Frontpage/Search/Search'
import Wedo from './Frontpage/What we do/Wedo'


function App() {
  return (
   <div>
     <Navbar></Navbar>
     <Landing></Landing>    
     <Searches></Searches> 
     <Wedo></Wedo>
   </div>
  );
}

export default App;