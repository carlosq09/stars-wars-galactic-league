import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

const NavItem = ({ label, path, history, children }) =>
    <li class="navbar-item" onClick={() => history.push(path)}>
      {label || children}
    </li>

export default withRouter(NavItem)