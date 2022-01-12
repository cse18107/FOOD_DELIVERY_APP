import React from 'react';
import './NavBar.css';
import logo from '../../image/bibimbap.png';
import {NavLink,Link} from 'react-router-dom';

const NavBar=()=> {
    return (
        <div className="navbar-body">
            <div className="navbar-container">
                <div className="navbar-content">
                    <Link to='/' className="navbar-left">
                        <img className="navbar-logo" src={logo} alt="Food Bazar"/>
                        <h2 style={{"font-size": "4.9rem","color":"black","margin-top":" 14px"}}>Food Bazar</h2>
                    </Link>
                    <div className="navbar-right">
                        <NavLink activeClassName="active-link" to="/add-food" className={`navbar-link ${({ isActive }) => (isActive ? 'active' : 'inactive-link')}`}>Add Food</NavLink>
                        <NavLink activeClassName="active-link" to="/edit-food" className={`navbar-link ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>Edit Food</NavLink>
                        <NavLink activeClassName="active-link" to="/show-cart" className={`navbar-link ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>Show Cart</NavLink>
                        <NavLink activeClassName="active-link" to="/login-sing-up" className={`navbar-link ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>Login/Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
