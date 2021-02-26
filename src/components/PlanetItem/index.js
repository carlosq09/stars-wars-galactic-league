import React, { useState, useEffect } from 'react'
import './index.scss'

const PlanetItem = ({ item }) =>
  <li className="card">
    <h2>{item.name}</h2>
    <p>Population: {item.population}</p>
    <p>Diameter: {item.diameter}</p>
    <p>Climate {item.climate}</p>
    <p>Terrain {item.terrain}</p>
    <p>Rotation Period: {item.rotation_period}</p>
  </li>



export default PlanetItem