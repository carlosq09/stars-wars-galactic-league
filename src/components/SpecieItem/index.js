import React, { useState, useEffect } from 'react'
import './index.scss'

const PlanetItem = ({ item }) =>{
  return <li className="card">
    <h2>{item.name}</h2>
    <p>Classification: {item.classification}</p>
    <p>Designation: {item.designation}</p>
    <p>Language {item.language}</p>
    <p>Height {item.average_height}</p>
  </li>}



export default PlanetItem