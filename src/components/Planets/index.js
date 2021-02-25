import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import PlanetsList from '../PlanetsList'
import './index.scss'

function Planets({}) {
  const [planets, setPlanets] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    async function fetchData() {
      await logic.requestAllPlanets().then((results) => {
        setPlanets(results)
      })
    }
    fetchData();
  }, [])

  const handleNextPagination = async () => {
    if (index + 9 < planets.length) {
      setIndex(index + 9)
    }
  }

  const handleFilter = (planet, specie, starship) => {
    console.log('hol')
  }

  const handlePrevPagination = async () => {
    setIndex(index - 9 <= 0 ? 0 : index - 9)
  }

  return <div>
    <button onClick={() => handlePrevPagination()}>Prev Planets</button>
    <button onClick={() => handleNextPagination()}>Next Planets</button>
    <div class="planets-page">
      <PlanetsList
        items={[...planets].slice(index, index + 9)}
      />
    </div>

  </div>
}

export default withRouter(Planets)