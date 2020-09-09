import React from 'react';
import './Navbar.css';
class Navbar extends React.Component{
    render(){
        return(
            <div className='app'>
                <div className='header'>
                    <a href="#default" className="logo">LOGO</a>
                    <div className="header-right">
                        <a href="#about">ABOUT US</a>
                        <a href="#contact">CONTACT US</a>
                    </div>
                </div>
                <div className='img'></div>
            </div>
        )
    }
} 
export default Navbar;