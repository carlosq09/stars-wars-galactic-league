import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import CollectionPageList from '../CollectionPageList'
import './index.scss'

function CollectionPage({ getItemsFunction, itemEntity, match:{ path:paginationPath} }) {
  const [items, setItems] = useState([])
  const { page } = useParams()

  useEffect(() => {
    async function fetchData() {
      await getItemsFunction(true).then((results) => {
        debugger
        setItems(results)
      })
    }
    fetchData();
  }, [getItemsFunction])

  return <div>
    <div class="collection-items-page">
      <CollectionPageList
        itemEntity={itemEntity}
        paginationPath={paginationPath}
        items={items}
        page={page}
      />
    </div>

  </div>
}

export default withRouter(CollectionPage)