import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
class Navbar extends React.Component{
    render(){
        return(
            <div className='app'>
                <div className='header'>
                    <NavLink exact className="logo" activeClassName="active" to="/">LOGO</NavLink>
                    <div className="header-right">
                    <NavLink  activeClassName="active" to="/Login">Login</NavLink>
                    <NavLink  activeClassName="active" to="/Signup">Signup</NavLink>
                    </div> 
                </div>
            </div>
        )
    }
} 
export default Navbar;