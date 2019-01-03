import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Headroom from 'react-headroom'
import Header from '../Header/'
import Nav from '../Nav/'
import Footer from '../Footer/'
import styles from './style.module.css'

class Frame extends React.Component {
  constructor(props) {
    super(props)

    this.pageElement = React.createRef()
  }

  componentDidMount() {
    this.pageElement.current.classList.add(styles.isLoaded)
  }

  render() {
    const { hideHeaderMobile, children } = this.props
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
              <section className={styles.frame}>
                <Headroom disableInlineStyles>
                  <section
                    className={`${styles.header} ${hideHeaderMobile &&
                      styles.isHidden}`}
                  >
                    <Header
                      title={siteMetadata.title}
                      tagline={siteMetadata.tagline}
                    />
                    <Nav items={navItems} />
                  </section>
                </Headroom>
                <section ref={this.pageElement} className={styles.page}>
                  {children}
                </section>
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
  hideHeaderMobile: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Frame
