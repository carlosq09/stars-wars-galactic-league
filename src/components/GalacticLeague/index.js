import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

const GalacticLeague = ({ targets }) => {

    return (
        <div className="galactic-league">
            GALACTIC LEAGUE
            <ul className="sidebar__list">
                {targets.length > 0 && targets.map(target => {
                    debugger
                    return <div>{target.name}</div>
                })}
            </ul>
        </div>)
}

export default withRouter(GalacticLeague)