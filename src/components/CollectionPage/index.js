import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import CollectionPageList from '../CollectionPageList'
import './index.scss'

function CollectionPage({ getItemsFunction, itemEntity }) {
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    async function fetchData() {
      await getItemsFunction().then((results) => {
        setItems(results)
      })
    }
    fetchData();
  }, [getItemsFunction])

  const handleNextPagination = async () => {
    if (index + 9 < items.length) {
      setIndex(index + 9)
    }
  }

  const handlePrevPagination = async () => {
    setIndex(index - 9 <= 0 ? 0 : index - 9)
  }

  return <div>
    <div class="collection-items-page">
      <CollectionPageList
        itemEntity={itemEntity}
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
        items={[...items].slice(index, index + 9)}
      />
    </div>

  </div>
}

export default withRouter(CollectionPage)