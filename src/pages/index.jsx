import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Frame from '../components/Frame'
import ProjectTeaser from '../components/ProjectTeaser'

class IndexPage extends React.Component {
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
            yyw: file(
              relativePath: { eq: "teasers/you-and-your-wedding.jpg" }
            ) {
              ...fluidImage
            }
            beamly: file(
              relativePath: { eq: "teasers/you-and-your-wedding.jpg" }
            ) {
              ...fluidImage
            }
          }
        `}
        render={data => {
          const projects = data.allProjectsJson.edges
          return (
            <Frame>
              {projects.map(project => (
                <ProjectTeaser
                  key={project.node.id}
                  content={project.node}
                  image={data[project.node.id]}
                />
              ))}
            </Frame>
          )
        }}
      />
    )
  }
}

export default IndexPage
