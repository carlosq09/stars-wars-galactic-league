import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import CharacterList from '../CharacterList'
import CharacterFilter from '../CharacterFilter'
import './index.scss'

function Characters({ handleAddOrRemoveLeague, initialResults }) {
  const [characters, setCharacters] = useState([])
  const [filtered, setFiltered] = useState(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    async function fetchData() {
      await logic.requestAllTargers().then((results) => {
        setCharacters(results)
      })
    }
    fetchData();
  }, [])


  const handleNextPagination = async () => {
    if (index + 9 < characters.length) {
      setIndex(index + 9)
    }
  }

  const handleFilter = (planet, specie, starship) => {
    debugger
    if (!planet && !specie && !starship) {
      setFiltered(null)
    } else {
      const filteredCharacters = logic.filterCharactersBy(planet, specie, starship, characters)
      setFiltered(filteredCharacters)
    }
  }

  const handlePrevPagination = async () => {
    setIndex(index - 9 <= 0 ? 0 : index - 9)
  }

  return <div>
    <button onClick={() => handlePrevPagination()}>prev characters</button>
    <button onClick={() => handleNextPagination()}>next characters</button>
    <div class="characters-page">
      <CharacterFilter handleFilter={handleFilter} />
      <CharacterList
        handleAddOrRemoveLeague={handleAddOrRemoveLeague}
        items={filtered ? filtered : [...characters].slice(index, index + 9)}
      />
    </div>

  </div>
}

export default withRouter(Characters)