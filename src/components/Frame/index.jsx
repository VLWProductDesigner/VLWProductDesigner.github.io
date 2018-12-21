import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import style from './style.css';
import Header from '../Header/'
import Nav from '../Nav/'
import Footer from '../Footer/'

class Frame extends React.Component {
  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                tagline
                copyright
              }
            }
            allNavJson {
              edges {
                node {
                  id
                  page
                  route
                }
              }
            }
          }
        `}
        render={data => {
          const siteMetadata = data.site.siteMetadata
          const navItems = data.allNavJson.edges
          return (
            <React.Fragment>
              <Helmet
                title={siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en-GB" />
              </Helmet>
              <Header
                title={siteMetadata.title}
                tagline={siteMetadata.tagline}
              />
              <Nav items={navItems} />
              <section>{children}</section>
              <Footer copyright={siteMetadata.copyright} />
            </React.Fragment>
          )
        }}
      />
    )
  }
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Frame
