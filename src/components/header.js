import React, { Component} from 'react'
import Link from 'gatsby-link'
import './header.css'
import FaBar from 'react-icons/lib/fa/bars'
import FaBriefCase from 'react-icons/lib/fa/briefcase'
import FaFileText from 'react-icons/lib/fa/file-text'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaBook from 'react-icons/lib/fa/book'

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
    return <div className="Navbar">
        <div className="Navbar__Link Navbar__Link-brand">
          <Link to="/" className="Navbar__Link-brandLink" title="Nedu Robert">
            <span>&lt;NR&gt;</span>
          </Link>
        </div>
        <div className="Navbar__Link Navbar__Link-toggle" onClick={this.classToggle}>
          <FaBar />
        </div>
        <nav className="Navbar__Items Navbar__Items--left">
          <div>
            <Link to="/portfolio" className="Navbar__Link">
              <FaBriefCase className="Navbar__Icon" />
              Portfolio
            </Link>
          </div>
          <div>
            <Link to="/resume" className="Navbar__Link">
              <FaFileText className="Navbar__Icon" />
              Resume
            </Link>
          </div>
        </nav>
        <nav className="Navbar__Items Navbar__Items--right">
          <div>
            <Link to="/contact" className="Navbar__Link">
              <FaEnvelope className="Navbar__Icon" />
              Contact
            </Link>
          </div>
          <div>
            <Link to="/blog" className="Navbar__Link">
              <FaBook className="Navbar__Icon" />
              Blog
            </Link>
          </div>
        </nav>
      </div>
  }
}

export default Header
