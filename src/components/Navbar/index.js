import React, { useState, useEffect } from 'react'
import logo from '../../static/images/logo.png'
import NavItem from './NavItem'
import './index.scss'

const Navbar = () =>{

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavItem label={'RAZAS'} path={'/races'} />
        <NavItem label={'PERSONAJES'} path={'/characters'} />
        <NavItem path={'/'} >
          <img className='navbar-item__logo' src={logo} />
        </NavItem>
        <NavItem label={'PLANETAS'} path={'/planets'} />
        <NavItem label={'STARSHIPS'} path={'/starships'} />
      </ul>
    </nav>)
}


export default Navbar