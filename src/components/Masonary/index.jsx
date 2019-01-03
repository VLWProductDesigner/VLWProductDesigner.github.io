import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ProjectTeaser from '../ProjectTeaser'
import styles from './style.module.css'
import debounce from '../../utilities/debounce'

class Masonary extends React.Component {
  constructor(props) {
    super(props)

    this.masonaryElement = React.createRef()
    this.masonary = this.masonary.bind(this)
  }

  masonary() {
    const node = this.masonaryElement.current
    const setNodeHeight = debounce(() => {
      const nodeWidth = node.getBoundingClientRect().width

      switch (true) {
        case window.matchMedia('screen and (min-width: 1024px)').matches:
          node.style.height = `${nodeWidth * 0.9}px`
          break
        case window.matchMedia(
          'screen and (max-width: 1024px) and (min-width: 768px)'
        ).matches:
          node.style.height = `${nodeWidth * 2.02}px`
          break
        default:
          node.style.height = 'auto'
      }

      node.classList.add(styles.isLoaded)
    }, 250)

    setNodeHeight()

    window.addEventListener('resize', setNodeHeight)
  }

  componentDidMount() {
    this.masonary()
  }

  render() {
    const { showHeader, hideProjectMobile } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                masonaryTitle
              }
            }
            allProjectsJson {
              edges {
                node {
                  id
                  title
                  bgColour
                  route
                  disabled
                }
              }
            }
            asos: file(relativePath: { eq: "teasers/asos.png" }) {
              ...fluidImage
            }
            beamly: file(relativePath: { eq: "teasers/beamly.png" }) {
              ...fluidImage
            }
            engage: file(relativePath: { eq: "teasers/engage.png" }) {
              ...fluidImage
            }
            no1Traveller: file(
              relativePath: { eq: "teasers/no1-traveller.png" }
            ) {
              ...fluidImage
            }
            sohoHouse: file(relativePath: { eq: "teasers/soho-house.png" }) {
              ...fluidImage
            }
            surfaceView: file(
              relativePath: { eq: "teasers/surface-view.png" }
            ) {
              ...fluidImage
            }
            immediate: file(relativePath: { eq: "teasers/immediate.png" }) {
              ...fluidImage
            }
          }
        `}
        render={data => {
          const title = data.site.siteMetadata.masonaryTitle
          const projects = data.allProjectsJson.edges
          return (
            <section className={styles.masonary}>
              {showHeader && <h2 className={styles.title}>{title}</h2>}
              <section ref={this.masonaryElement} className={styles.container}>
                {projects.map(project => {
                  return (
                    <ProjectTeaser
                      key={project.node.id}
                      content={project.node}
                      image={data[project.node.id]}
                      hideOnMobile={
                        hideProjectMobile === project.node.id ? true : false
                      }
                    />
                  )
                })}
              </section>
            </section>
          )
        }}
      />
    )
  }
}

Masonary.propTypes = {
  showHeader: PropTypes.bool,
  hideProjectMobile: PropTypes.string,
}

export default Masonary
