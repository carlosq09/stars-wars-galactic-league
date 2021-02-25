import React, { useState, useEffect } from 'react'
import logic from '../../../logic'
import './index.scss'

const ItemCharacter = ({ planet }) =>
  <li className="card">
    <h2>{planet.name}</h2>
    <p>Population: {planet.population}</p>
    <p>Diameter: {planet.diameter}</p>
    <p>Climate {planet.climate}</p>
    <p>Terrain {planet.terrain}</p>
    <p>Rotation Period: {planet.rotation_period}</p>
  </li>



export default ItemCharacter