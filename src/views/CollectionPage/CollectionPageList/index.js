import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

function CollectionPageList({ history, itemEntity: ListItem, items, page, paginationPath }) {

    return (
        <div className="collection-list-pagination">
            <div className="pagination">
                {items.map((item, index) =>
                    <button disabled={index === parseInt(page)} onClick={() => {
                        history.push(paginationPath.replace(':page', index))
                    }}>{index}</button>
                )}
            </div>
            <ul className="collection-list">
                {
                    items.length > 0 && items[page].map((item, index) => <ListItem
                        key={index}
                        item={item}
                    ></ListItem>
                    )
                }
            </ul>
            <div className="pagination">
                {items.map((item, index) =>
                    <button disabled={index === parseInt(page)} onClick={() => {
                        history.push(paginationPath.replace(':page', index))
                    }}>{index}</button>
                )}
            </div>
        </div>
    )
}

export default withRouter(CollectionPageList)