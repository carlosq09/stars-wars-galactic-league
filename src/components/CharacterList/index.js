import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import ItemCharacter from './CharacterItem'
import './index.scss'

function CharacterList({ handlePrevPagination, handleNextPagination, handleAddOrRemoveLeague, items }) {
    return (<div className="characters-pagination">

        <div className="pagination">
            <button onClick={() => handlePrevPagination()}>{'<'}</button>
            <button onClick={() => handleNextPagination()}>{'>'}</button>
        </div>
        <ul className="character-list">
            {
                items.length > 0 && items.map((item, index) => {
                    return <ItemCharacter
                        handleAddOrRemoveLeague={handleAddOrRemoveLeague}
                        key={index}
                        character={item}
                    ></ItemCharacter>
                })
            }
        </ul>
        <div className="pagination">
            <button onClick={() => handlePrevPagination()}>{'<'}</button>
            <button onClick={() => handleNextPagination()}>{'>'}</button>
        </div>
    </div>

    )
}

export default withRouter(CharacterList)