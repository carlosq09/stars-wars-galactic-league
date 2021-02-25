import React, { useState, useEffect } from 'react'
import './index.scss'

const GalacticLeague = ({ targets }) => {

    return (
        <div className="sidebar">
            GALACTIC LEAGUE
            <ul className="siidebar__list">
                {targets.length > 0 && targets.map(target => {
                    debugger
                    return <div>{target.name}</div>
                })}
            </ul>
        </div>)
}


export default GalacticLeague