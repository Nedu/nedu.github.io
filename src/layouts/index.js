import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import favIcon from '../images/favicons/favicon-32x32.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'This is a portfolio website and portfolio for Nedu Robert' },
        { name: 'keywords', content: 'portfolio website, fullstack developer, gatsby, react' },
      ]}
      link={[
        { rel: 'shortcut icon', href: `${favIcon}`}
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
