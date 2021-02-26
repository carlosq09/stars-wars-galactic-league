import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import logic from '../../logic'
import CharacterList from '../CharacterList'
import CharacterFilter from '../CharacterFilter'

import './index.scss'

function Characters({ handleAddOrRemoveLeague, initialResults}) {
  const [characters, setCharacters] = useState([])
  const [filtered, setFiltered] = useState(null)
  const { page } = useParams()

  useEffect(() => {
    setCharacters(initialResults)
  }, [initialResults])


  const handleFilter = (planet, specie, starship) => {
    if (!planet && !specie && !starship) {
      setFiltered(null)
    } else {
      const filteredCharacters = logic.filterCharactersBy(planet, specie, starship, characters)
      setFiltered(filteredCharacters)
    }
  }

  return <div className="characters-page">
    <div className="characters-page__characters">
      <CharacterFilter handleFilter={handleFilter} />
      <CharacterList
        handleAddOrRemoveLeague={handleAddOrRemoveLeague}
        page={page}
        totalItems={characters}
        filtered={!!filtered}
        items={filtered? filtered : characters[page]}
      />
    </div>
  </div>
}

export default withRouter(Characters)