import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import ItemCharacter from './CharacterItem'
import './index.scss'

function CharacterList({ handleAddOrRemoveLeague, items }) {

    return (<ul className="character-list">
        {
            items.length > 0 && items.map((item, index) => {
                return <ItemCharacter
                    handleAddOrRemoveLeague={handleAddOrRemoveLeague}
                    key={index}
                    character={item}
                ></ItemCharacter>
            })
        }
    </ul>)
}

export default withRouter(CharacterList)