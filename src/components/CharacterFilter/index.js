import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import './index.scss'

function CharacterFilter({ handleFilter }) {
    const [species, setSpecies] = useState([])
    const [starships, setStarships] = useState([])
    const [planets, setPlanets] = useState([])
    const [selectedSpecie, setSelectedSpecie] = useState('')
    const [selectedStarship, setSelectedStarship] = useState('')
    const [selectedPlanet, setSelectedPlanet] = useState('')

    useEffect(() => {
        async function fetchData() {
            await logic.requestAllPlanets().then((results) => {
                    setPlanets(results)
            })

            await logic.requestAllStarships().then((results) => {
                setStarships(results)
            })

            await logic.requestAllSpecies().then((results) => {
                setSpecies(results)
            })
        }
        fetchData();
    }, [])

    useEffect(() => {        handleFilter(selectedPlanet, selectedSpecie, selectedStarship)
    }, [selectedPlanet, selectedStarship, selectedSpecie])

    const addSelection = (e) => {
        e.preventDefault()
        const { target: { name: selected, value } } = e

        if (selected == 'species') {
            setSelectedSpecie(value)
        }
        if (selected == 'planets') {
            setSelectedPlanet(value)
        }
        if (selected == 'starships') {
            setSelectedStarship(value)
        }
    }

    return <div>
        <div class="characters-filter">
            <form onChange={(e) => addSelection(e)}>
                <select name="starships">
                    <option value="" >All Starships</option>
                    {starships.length > 0 && starships.map(starship => {
                        return <option value={starship.url}>{starship.name}</option>
                    })}
                </select>
                <select name="planets">
                    <option value="">All Planets</option>
                    {planets.length > 0 && planets.map(planet => {
                        return <option value={planet.url}>{planet.name}</option>
                    })}
                </select>
                <select name="species">
                    <option value="">All Species</option>
                    {species.length > 0 && species.map(specie => {
                        return <option value={specie.url}>{specie.name}</option>
                    })}
                </select>
            </form>
        </div>
    </div>
}

export default withRouter(CharacterFilter)