import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Frame from '../components/Frame'
import ProjectTeaser from '../components/ProjectTeaser'
import styles from '../styles/homePage.module.css'
import debounce from '../utilities/debounce'

class IndexPage extends React.Component {
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
    return (
      <StaticQuery
        query={graphql`
          query {
            allProjectsJson {
              edges {
                node {
                  id
                  title
                  bgColour
                  route
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
            yyw: file(
              relativePath: { eq: "teasers/you-and-your-wedding.png" }
            ) {
              ...fluidImage
            }
          }
        `}
        render={data => {
          const projects = data.allProjectsJson.edges
          return (
            <Frame>
              <section ref={this.masonaryElement} className={styles.container}>
                {projects.map(project => (
                  <ProjectTeaser
                    key={project.node.id}
                    content={project.node}
                    image={data[project.node.id]}
                  />
                ))}
              </section>
            </Frame>
          )
        }}
      />
    )
  }
}

export default IndexPage
