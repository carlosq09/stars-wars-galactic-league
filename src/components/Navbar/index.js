import React, { useState, useEffect } from 'react'
import logo from '../../static/images/logo.png'
import GalacticLeague from '../GalacticLeague'
import NavItem from './NavItem'
import './index.scss'

const Navbar = ({ handleSetOrRemoveFromLeague, league }) => {
  const [toggleGalactic, setToggeGalactic] = useState(false)

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavItem path={'/'} >
          <img className='navbar-item__logo' src={logo} />
        </NavItem>
        <NavItem label={'SPECIES'} path={'/species'} />
        <NavItem label={'PERSONAJES'} path={'/characters'} />
        <NavItem label={'PLANETAS'} path={'/planets'} />
        <NavItem label={'STARSHIPS'} path={'/starships'} />
        <li className="navbar-item" onClick={() => setToggeGalactic(!toggleGalactic)}>LEAGUE</li>
      </ul>
      {toggleGalactic && <GalacticLeague
        handleSetOrRemoveFromLeague={handleSetOrRemoveFromLeague}
        targets={league} />}
    </nav>)
}


export default Navbar