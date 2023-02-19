import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import '../../index.js'
import navbarLogo from '../../assets/secureAdvLogo.png'

export default function Navbar() {  
    return (
      <div className='navbarContainer'>
        <div className='navbarBrand'>
            <img src={navbarLogo} className='logo'></img>
            <div><span className='brandFirstPart'>Secure </span><span className='brandSecondPart'>Adv</span></div>
        </div>
        <div className='navsContainer'>
            <div className='nav'><Link className='navlink' to="/">HOME</Link></div>
            <div className='nav'><Link className='navlink' to="/services">SERVICES</Link></div>
            <div className='nav'><Link className='navlink' to="/contact">CONTACT US</Link></div>
            <button className='workshopBtn'><Link className='Btn' to="/workshop">WORKSHOP</Link></button>
        </div>
      </div>
    );
  }
