import React from 'react'
import { withRouter } from "react-router-dom";

import Video from '../../static/videos/Landing.mp4'
import image from '../../static/images/landing_image.png'

import Hero from './Hero'
import Background from './Background'
import './index.scss'


function Landing(initialResults) {

  return (
    <div>
      {/* <Background src={Video}/> */}
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