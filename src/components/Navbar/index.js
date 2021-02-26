import React, { useState } from 'react'
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
        <NavItem label={'SPECIES'} path={'/species/0'} />
        <NavItem label={'PERSONAJES'} path={'/characters/0'} />
        <NavItem label={'PLANETAS'} path={'/planets/0'} />
        <NavItem label={'STARSHIPS'} path={'/starships/0'} />
        <li className="navbar-item" onClick={() => setToggeGalactic(!toggleGalactic)}>LEAGUE</li>
      </ul>
      {toggleGalactic && <GalacticLeague
        handleSetOrRemoveFromLeague={handleSetOrRemoveFromLeague}
        targets={league} />}
    </nav>)
}


export default Navbar