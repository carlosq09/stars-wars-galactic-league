import { Route, Switch, withRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import logic from '../logic'
import Characters from '../components/Characters'
import Planets from '../components/Planets'
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Background from '../components/Landing/Background'

import './index.scss'

import Video from '../static/videos/Landing.mp4'

function App() {
  const [results, setResults] = useState([])
  const [league, setLeague] = useState([])

  const handleSetLeague = (character, isAdded) => {
    debugger
    if (isAdded) {
      logic.removeFromLeagueInStorage(character.url)
      setLeague(league.filter(target => target.url !== character.url))
    } else {
      logic.setToLeagueInStorage(character.url)
      setLeague([...league, character])
    }
  }

  useEffect(() => {
    async function fetchData() {
      await logic.requestAllTargets().then((results) => {
        setResults(results)

        const storedLeague = logic.getLeagueFromStorage(results)
        setLeague(storedLeague)
      })
    }
    fetchData();
  }, [])

  return <>
    <Navbar />
    <Background src={Video}/>
    <div className="main-sidebar">
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/planets" render={() => <Planets />} />
        <Route exact path="/characters" render={() =>
          <Characters
            league={league}
            handleAddOrRemoveLeague={handleSetLeague}
            initialResults={results}
          />}
        />
      </Switch>
    </div>
  </>

}

export default withRouter(App)
