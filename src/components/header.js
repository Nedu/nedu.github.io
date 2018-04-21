import React, { Component} from 'react'
import Link from 'gatsby-link'
import './header.css'
import FaBar from 'react-icons/lib/fa/bars'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
  }

  classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'))
  }

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__Link Navbar__Link-brand">
          <a href="/" className="Navbar__Link-brandLink" title="Nedu Robert">
            <span>&lt;NR&gt;</span>
          </a>
        </div>
        <div
          className="Navbar__Link Navbar__Link-toggle"
          onClick={this.classToggle}
        >
          {/* <i className="fas fa-bars" /> */}
          <FaBar />
        </div>
        <nav className="Navbar__Items Navbar__Items--left">
          <div className="Navbar__Link">Portfolio</div>
          <div className="Navbar__Link">Resume</div>
        </nav>
        <nav className="Navbar__Items Navbar__Items--right">
          <div className="Navbar__Link">Contact</div>
          <div className="Navbar__Link">Blog</div>
        </nav>
      </div>
    )
  }
}

export default Header
