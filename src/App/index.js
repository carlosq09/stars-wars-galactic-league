import { Route, Switch, withRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import logic from '../logic'
import Characters from '../components/Characters'
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import GalacticLeague from "../components/GalacticLeague";
import Background from '../components/Landing/Background'

import './index.scss'

import Video from '../static/videos/Landing.mp4'

function App() {
  const [results, setResults] = useState([])
  const [league, setLeague] = useState([])

  const handleSetLeague = (character, isAdded) => {
    debugger
    if (isAdded) {
      setLeague(league.filter(target => target.url !== character.url))
    } else {
      setLeague([...league, character])
    }
  }

  useEffect(() => {
    async function fetchData() {
      await logic.requestTargets(2).then((results) => {
        setResults(results)
      })
    }
    fetchData();
  }, [])

  return <>
    <Navbar />
    {/* <Background src={Video}/> */}
    <div className="main-sidebar">
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/characters" render={() => <Characters handleAddOrRemoveLeague={handleSetLeague} initialResults={results} />} />
      </Switch>
      <GalacticLeague targets={league} />
    </div>
  </>

}

export default withRouter(App)
