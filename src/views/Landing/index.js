import React from 'react'
import { withRouter } from "react-router-dom";
import image from '../../static/images/landing_image.png'

import Hero from './Hero'
import './index.scss'


function Landing(initialResults) {

  return (
    <div>
      <div className="landing-content">
        <Hero />
        <div className="landing-content__image-container">
          <img className="landing-image" src={image} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Landing)