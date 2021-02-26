import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

function CollectionPageList({ handlePrevPagination, handleNextPagination, itemEntity:ListItem ,items }) {
    return (
        <div className="collection-list-pagination">
            <div className="pagination">
                <button onClick={() => handlePrevPagination()}>{'<'}</button>
                <button onClick={() => handleNextPagination()}>{'>'}</button>
            </div>
            <ul className="collection-list">
                {
                    items.length > 0 && items.map((item, index) => <ListItem
                        key={index}
                        item={item}
                    ></ListItem>
                    )
                }
            </ul>
            <div className="pagination">
                <button onClick={() => handlePrevPagination()}>{'<'}</button>
                <button onClick={() => handleNextPagination()}>{'>'}</button>
            </div>
        </div>
    )
}

export default withRouter(CollectionPageList)