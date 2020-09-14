import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import Landing from './Frontpage/Landing/Landing'
import Searches from './Frontpage/Search/Search'
import Wedo from './Frontpage/What we do/Wedo'
import Contact from './Frontpage/Contact Us/Contact'



function App() {
  return (
   <div>
     <Navbar></Navbar>
     <Landing></Landing>    
     <Searches></Searches> 
     <Wedo></Wedo>
     <Contact></Contact>
   </div>
  );
}

export default App;