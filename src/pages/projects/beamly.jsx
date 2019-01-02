import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Frame from '../../components/Frame'
import ProjectFeature from '../../components/ProjectFeature'
import Masonary from '../../components/Masonary'

class Project extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            projectsJson(id: { eq: "beamly" }) {
              title
              description
              examples {
                title
                images {
                  id
                  alt
                  bgColour
                  padding
                }
              }
            }
            articles: file(relativePath: { eq: "beamly/articles.png" }) {
              ...fluidImage
            }
            iosApp: file(relativePath: { eq: "beamly/ios-app.png" }) {
              ...fluidImage
            }
            showPages: file(relativePath: { eq: "beamly/show-pages.png" }) {
              ...fluidImage
            }
            techBlog: file(relativePath: { eq: "beamly/tech-blog.png" }) {
              ...fluidImage
            }
            treatmentDesign: file(
              relativePath: { eq: "beamly/treatment-design.png" }
            ) {
              ...fluidImage
            }
            web: file(relativePath: { eq: "beamly/web.png" }) {
              ...fluidImage
            }
          }
        `}
        render={data => {
          const content = data.projectsJson

          content.examples.forEach(example =>
            example.images.forEach(
              image => (image.childImageSharp = data[image.id].childImageSharp)
            )
          )

          return (
            <Frame>
              <ProjectFeature content={content} />
              <Masonary />
            </Frame>
          )
        }}
      />
    )
  }
}

export default Project
