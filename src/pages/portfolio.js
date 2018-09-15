import React from 'react'
import Link from 'gatsby-link'

import '../styles/portfolio.css'
import tribute from '../images/tribute.png'
import lambdanotes from '../images/lambdanotes.png'
import closetroulette from '../images/closetroulette.png'
import imgGallery from '../images/imggallery.png'
import landingPage from '../images/landingpage.png'
import color from '../images/color.png'
import wikiViewer from '../images/wikiviewer.png'
import RQG from '../images/RQG.png'

const PortfolioPage = () => (
  <div className="portfolio">
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img src={closetroulette} alt="closet roulette web app screenshot" />
      </div>
      <div className="portfolio__project-description">
        <h3>Closet Roulette</h3>
        <p>
          A digital closet that enables users to upload images of their outfits and transforms them into virtual attire.
        </p>
        <p>
          <span className="skilltag">JavaScript </span>
          <span className="skilltag">React </span>
          <span className="skilltag">Node </span>
          <span className="skilltag">Express </span>
          <span className="skilltag">MongoDB</span>
          <span className="skilltag">Stripe API</span>
          <span className="skilltag">SendGrid API</span>
        </p>
        <a
          className="skilltag demo"
          href="https://lambda-outfit-creator.herokuapp.com"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img src={lambdanotes} alt="lambda notes web app screenshot" />
      </div>
      <div className="portfolio__project-description">
        <h3>Lambda Notes</h3>
        <p>
          A Full Stack note taking web application that enables authenticated
          users to manage their notes.
        </p>
        <p>
          <span className="skilltag">JavaScript </span>
          <span className="skilltag">React </span>
          <span className="skilltag">Node </span>
          <span className="skilltag">Express </span>
          <span className="skilltag">MongoDB</span>
        </p>
        <a
          className="skilltag demo"
          href="https://github.com/Nedu/lambdanotes"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="skilltag demo"
          href="https://lambda-notes-app.netlify.com/notes"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img
          src={RQG}
          alt="random quote generator project webpage screenshot"
        />
      </div>
      <div className="portfolio__project-description">
        <h3>Random Quote Generator</h3>
        <p>
          A Random Quote Generator built using AJAX utilizing a JSON-encoded,
          third-party external API to fetch quote data. Also integrated Twitter
          Web Intents to enable users tweet out quotes.
        </p>
        <p>
          <span className="skilltag">JavaScript </span>
          <span className="skilltag">AJAX </span>
          <span className="skilltag">Fetch API </span>
          <span className="skilltag">Quotes API</span>
        </p>
        <a
          className="skilltag demo"
          href="https://github.com/Nedu/RQG"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="skilltag demo"
          href="https://nedu.github.io/RQG/"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img src={tribute} alt="tribute webpage screenshot" />
      </div>
      <div className="portfolio__project-description">
        <h3>Responsive Website</h3>
        <p>Simple single page reponsive tribute website to Superman</p>
        <p>
          <span className="skilltag">HTML5 </span>
          <span className="skilltag">CSS3 </span>
          <span className="skilltag">Bootstrap 4 </span>
          <span className="skilltag">Responsive Design</span>
        </p>
        <a
          className="skilltag demo"
          href="https://github.com/Nedu/Tribute-Page"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="skilltag demo"
          href="https://nedu.github.io/Tribute-Page/"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img src={imgGallery} alt="image gallery screenshot" />
      </div>
      <div className="portfolio__project-description">
        <h3>Image Gallery</h3>
        <p>Simple image gallery</p>
        <p>
          <span className="skilltag">HTML5 </span>
          <span className="skilltag">CSS3 </span>
          <span className="skilltag">Responsive Design</span>
        </p>
        <a
          className="skilltag demo"
          href="https://github.com/Nedu/ImageGallery"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="skilltag demo"
          href="https://nedu.github.io/ImageGallery/"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img src={landingPage} alt="landing page screenshot" />
      </div>
      <div className="portfolio__project-description">
        <h3>Landing Page</h3>
        <p>Simple landing page</p>
        <p>
          <span className="skilltag">HTML5 </span>
          <span className="skilltag">CSS3 </span>
          <span className="skilltag">Responsive Design </span>
          <span className="skilltag">Bootstrap 3</span>
        </p>
        <a
          className="skilltag demo"
          href="https://github.com/Nedu/LandingPage"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="skilltag demo"
          href="https://nedu.github.io/LandingPage/"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img src={color} alt="color game app screenshot" />
      </div>
      <div className="portfolio__project-description">
        <h3>Color Game</h3>
        <p>
          Simple Color Game where you guess a color based on a given RGB value
        </p>
        <p>
          <span className="skilltag">HTML5 </span>
          <span className="skilltag">CSS3 </span>
          <span className="skilltag">Responsive Design </span>
          <span className="skilltag">JavaScript</span>
        </p>
        <a
          className="skilltag demo"
          href="https://github.com/Nedu/ColorGame"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="skilltag demo"
          href="https://nedu.github.io/ColorGame/"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
    <div className="portfolio__project">
      <div className="portfolio__project-demo">
        <img src={wikiViewer} alt="wiki viewer web app screenshot" />
      </div>
      <div className="portfolio__project-description">
        <h3>WikiSearch</h3>
        <p>
          A Wikipedia article previewer built using React that utilizes the
          MediaWiki API to search for the user's query.
        </p>
        <p>
          <span className="skilltag">React.js </span>
          <span className="skilltag">Webpack </span>
          <span className="skilltag">JavaScript </span>
          <span className="skilltag">Wikipedia API</span>
        </p>
        <a
          className="skilltag demo"
          href="https://github.com/Nedu/WikiSearch"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="skilltag demo"
          href="https://nedu.github.io/WikiSearch/"
          target="_blank"
        >
          View Live
        </a>
      </div>
    </div>
  </div>
)
    


export default PortfolioPage
