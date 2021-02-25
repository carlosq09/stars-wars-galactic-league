import React from 'react'
import './index.scss'

const Background = ({ src }) =>
  <div className="landing-background">
    <div className="landing-background__gradient"></div>
    <video className="landing-background__video" autoPlay src={src} muted loop type='video/mp4' />
  </div>

export default Background