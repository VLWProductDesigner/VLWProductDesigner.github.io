import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Headroom from 'react-headroom'
import style from './style.module.css'
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
              <section className={style.frame}>
                <Headroom disableInlineStyles>
                  <section className={style.header}>
                    <Header
                      title={siteMetadata.title}
                      tagline={siteMetadata.tagline}
                    />
                    <Nav items={navItems} />
                  </section>
                </Headroom>
                <section className={style.page}>{children}</section>
                <Footer copyright={siteMetadata.copyright} />
              </section>
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
