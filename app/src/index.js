import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar.js';
import Landing from './Frontpage/Landing/Landing.js';

var destination= document.getElementById('container');
ReactDOM.render(
    <div><Navbar/></div>,
    <div><Landing/></div>,
    destination
);