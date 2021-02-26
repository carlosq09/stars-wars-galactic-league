import React, { useState, useEffect } from 'react'
import logic from '../../../logic'
import { ReactComponent as Logo } from '../../../static/icons/Star_Wars_Boba.svg'
import './index.scss'

function ItemCharacter({ handleAddOrRemoveLeague, character }) {
  const [starship, setStarship] = useState([])
  const [vehicles, setVehicle] = useState([])
  const [specie, setSpecie] = useState([])
  const [planet, setPlanet] = useState()
  const [isTarget, setIsTarget] = useState(false)

  const isCharacterInLeague = (character) => {
    const storedLeague = logic.getLeagueFromStorage();
    return storedLeague.some(storedCharacter => storedCharacter === character.url)
  }


  useEffect(() => {
    async function fetchData() {
      if (character.homeworld) {
        await logic.getElementByUrl(character.homeworld).then(characterPlanet => {
          setPlanet(characterPlanet.name)
        })
      }

      if (character.vehicles) {
        const vehicles = await Promise.all(character.vehicles.map(async vehicle => {
          return logic.getElementByUrl(vehicle).then(characterVehicle => {
            return characterVehicle.name
          })
        })).then(results => {
          return results
        })
        setVehicle(vehicles)
      }

      if (character.starships) {
        const starships = await Promise.all(character.starships.map(async starship => {
          return await logic.getElementByUrl(starship).then(characterStarship => characterStarship.name)
        }))
        setStarship(starships)
      }

      if (character.species) {
        if (!character.species.length) {
          setSpecie('Human')
        } else {
          const specie = await logic.getElementByUrl(character.species[0]).then(characterSpecie => characterSpecie.name)
          debugger
          setSpecie(specie)
        }
      }

      const leagueStatus = isCharacterInLeague(character)
      setIsTarget(leagueStatus)
    }
    fetchData()
  }, [character])

  const AddToGalactic = () => {
    handleAddOrRemoveLeague(character, isTarget)
    setIsTarget(!isTarget)
  }

  return <li className="card">
    <div className="card__header">
      <h2>{character.name}</h2>
    </div>
    <div className="card__split">
      <div className="card__content">
        {specie && <p><strong>Specie: </strong>{specie}</p>}
        <p><strong>Height: </strong>{character.height}</p>
        <p><strong>Birth Year: </strong>{character.birth_year}</p>
        <p><strong>Gender: </strong>{character.gender}</p>
        {planet && <p><strong>Homeworld: </strong>{planet}</p>}
      </div>
      <div className="card__toggle" onClick={() => AddToGalactic()}>
        <p>league status</p>
        <Logo  stroke={isTarget ? '#0ff' : '#173131'} />
      </div>
    </div>
    <div className="card__list">
      {starship.length > 0 && <div className="card_starships">
        <h3>StarShips:</h3>
        <ul>
          {starship.map(starship => <li>{starship}</li>)}
        </ul>
      </div>}
      {vehicles.length > 0 && <div className="character-vehicles">
        <h3>Vehicles:</h3>
        <ul>
          {vehicles.map(vehicle => <li>{vehicle}</li>)}
        </ul>
      </div>}
    </div>
  </li>
}


export default ItemCharacter