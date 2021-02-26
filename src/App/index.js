import { Route, Switch, withRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import logic from '../logic'
import Characters from '../views/Characters'
import SpecieItem from '../components/SpecieItem'
import PlanetItem from '../components/PlanetItem'
import StarshipItem from '../components/StarshipItem'
import CollectionPage from '../views/CollectionPage'
import Landing from "../views/Landing";
import Navbar from "../components/Navbar";
import Background from '../components/Background'
import Video from '../static/videos/Landing.mp4'

import './index.scss'


function App() {
  const [results, setResults] = useState([])
  const [league, setLeague] = useState([])

  const handleSetOrRemoveFromLeague = (character, isAdded) => {

    if (!isAdded) {
      if (league.length < 10) {
        logic.setToLeagueInStorage(character.url)
        setLeague([...league, character])
        return true
      }
    } else {
      logic.removeFromLeagueInStorage(character.url)
      setLeague(league.filter(target => target.url !== character.url))
    }
    return false
  }

  useEffect(() => {
    async function fetchData() {
      await logic.requestAllTargets(true).then((results) => {
        setResults(results)

        const storedLeague = logic.getLeagueFromStorage(results)
        setLeague(storedLeague)
      })
    }
    fetchData();
  }, [])

  return <>
    <Navbar
      handleSetOrRemoveFromLeague={handleSetOrRemoveFromLeague}
      league={league}
    />
    <Background src={Video} />
    <Switch>
      <Route exact path="/planets/:page" render={() => <CollectionPage
        getItemsFunction={logic.requestAllPlanets}
        itemEntity={PlanetItem} />} />

      <Route exact path="/species/:page" render={() => <CollectionPage
        getItemsFunction={logic.requestAllSpecies}
        itemEntity={SpecieItem} />} />

      <Route exact path="/starships/:page" render={() => <CollectionPage
        getItemsFunction={logic.requestAllStarships}
        itemEntity={StarshipItem} />} />

      <Route exact path="/characters/:page" render={() =>
        <Characters
          league={league}
          handleAddOrRemoveLeague={handleSetOrRemoveFromLeague}
          initialResults={results}
        />}
      />
      <Route component={Landing} />


    </Switch>
  </>

}

export default withRouter(App)
