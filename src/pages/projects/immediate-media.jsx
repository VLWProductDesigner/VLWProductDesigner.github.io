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
            projectsJson(id: { eq: "immediate" }) {
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
            articles: file(relativePath: { eq: "immediate/articles.png" }) {
              ...fluidImage
            }
            dressFinder1: file(
              relativePath: { eq: "immediate/dress-finder-1.png" }
            ) {
              ...fluidImage
            }
            dressFinder2: file(
              relativePath: { eq: "immediate/dress-finder-2.png" }
            ) {
              ...fluidImage
            }
            galleries: file(relativePath: { eq: "immediate/galleries.png" }) {
              ...fluidImage
            }
            homePage: file(relativePath: { eq: "immediate/home-page.png" }) {
              ...fluidImage
            }
            navigation1: file(relativePath: { eq: "immediate/nav-large.png" }) {
              ...fluidImage
            }
            navigation2: file(relativePath: { eq: "immediate/nav-small.png" }) {
              ...fluidImage
            }
            styleGuide: file(
              relativePath: { eq: "immediate/style-guide.png" }
            ) {
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
