import React from 'react'
import { withRouter } from 'react-router-dom'
import { ReactComponent as GalacticLogo } from '../../static/icons/Star_Wars_Boba.svg'
import './index.scss'

const GalacticLeague = ({ handleSetOrRemoveFromLeague, targets }) => {

    return (
        <div className="galactic-league">
            <h2>GALACTIC LEAGUE</h2>
            <div>

                <GalacticLogo stroke="#0ff" width={100} height={100}/>
            </div>
            <h3>Targets</h3>
            {targets.length > 0 && targets.map(target =>
                <li className="galactic-target">
                    <h2>{target.name}</h2>
                    <div className="galactic-target__remove" onClick={() => handleSetOrRemoveFromLeague(target, true)}>
                        <strong>X</strong>
                    </div>
                </li>
            )}

        </div>)
}

export default withRouter(GalacticLeague)