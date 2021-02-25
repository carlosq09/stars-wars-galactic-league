import React, { useState, useEffect } from 'react'
import './index.scss'

const Hero = () => {

    return (
        <div className="hero">
            <h1 className="hero__title">
                JOIN THE HUNT
            </h1>
            <p className="hero__text">
                Explore the galaxy and bring the rebel scum to justice
            </p>
            <button className="hero__button">
                START HUNT
            </button>
        </div>
    )
}

export default Hero