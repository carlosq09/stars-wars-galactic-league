import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import ItemCharacter from './CharacterItem'
import './index.scss'

function CharacterList({ handleAddOrRemoveLeague, history, totalItems, filtered, items, page }) {

    return (<div className="characters-pagination">

        {!filtered && <div className="pagination">
            {totalItems.map((item, index) =>
                <button disabled={index === parseInt(page)} onClick={() =>{
                    history.push(`/characters/${index}/`)
                }}>{index}</button>
            )}
        </div>}
        <ul className="character-list">
            {
                totalItems.length > 0 && items.map((item, index) => {
                    debugger
                    return <ItemCharacter
                        handleAddOrRemoveLeague={handleAddOrRemoveLeague}
                        key={index}
                        character={item}
                    ></ItemCharacter>
                })
            }
        </ul>
        {!filtered && <div className="pagination">
            {totalItems.map((item, index) =>
                <button disabled={index === parseInt(page)} onClick={() =>{
                    history.push(`/characters/${index}/`)
                }}>{index}</button>
            )}
        </div>}
    </div>

    )
}

export default withRouter(CharacterList)