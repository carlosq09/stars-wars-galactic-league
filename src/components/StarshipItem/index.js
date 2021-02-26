import React from 'react'
import './index.scss'

const StarshipItem = ({ item }) =>
  <li className="card">
    <h2>{item.name}</h2>
    <p>Model: {item.model}</p>
    <p>Manufacturer: {item.manufacturer}</p>
    <p>Price: {item.cost_in_credits}</p>
    <p>Length {item.length}</p>
    <p>Crew: {item.crew}</p>
    <p>Passengers: {item.passengers}</p>
  </li>



export default StarshipItem