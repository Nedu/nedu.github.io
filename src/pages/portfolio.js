import React from 'react'
import Link from 'gatsby-link'

import '../styles/portfolio.css'
import tribute from '../images/tribute.png'
import imgGallery from '../images/imggallery.png'
import landingPage from '../images/landingpage.png'
import color from '../images/color.png'
import wikiViewer from '../images/wikiviewer.png'
import RQG from '../images/RQG.png'

const PortfolioPage = () => (
  <div className="portfolio">
      <img
        src={tribute}
        alt="tribute webpage screenshot"
      />
      <img
        src={imgGallery}
        alt="image gallery screenshot"
      />
      <img
        src={landingPage}
        alt="landing page screenshot"
      />
      <img
        src={color}
        alt="color game app screenshot"
      />
      <img
        src={wikiViewer}
        alt="wiki viewer web app screenshot"
      />
      <img
        src={RQG}
        alt="random quote generator project webpage screenshot"
      />
  </div>
)

export default PortfolioPage
