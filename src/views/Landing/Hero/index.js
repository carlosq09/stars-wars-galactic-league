import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'

const Hero = ({ history }) => {

    return (
        <div className="hero">
            <h1 className="hero__title">
                JOIN THE HUNT
            </h1>
            <p className="hero__text">
                Explore the galaxy and bring the rebel scum to justice
            </p>
            <button onClick={() => history.push('/characters/0')}className="hero__button">
                START HUNT
            </button>
        </div>
    )
}

export default withRouter(Hero)