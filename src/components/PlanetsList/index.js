import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import PlanetItem from './PlanetItem'
import './index.scss'

function PlanetList({ items }) {
    return (<ul className="character-list">
        {
            items.length > 0 && items.map((item, index) => <PlanetItem
                key={index}
                planet={item}
            ></PlanetItem>
            )
        }
    </ul>)
}

export default withRouter(PlanetList)