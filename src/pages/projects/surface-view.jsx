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
            projectsJson(id: { eq: "surfaceView" }) {
              ...projectFeature
            }
            article: file(relativePath: { eq: "surface-view/article.png" }) {
              ...fluidImage
            }
            categoryPage1: file(
              relativePath: { eq: "surface-view/category-page-1.png" }
            ) {
              ...fluidImage
            }
            categoryPage2: file(
              relativePath: { eq: "surface-view/category-page-2.png" }
            ) {
              ...fluidImage
            }
            furniture1: file(
              relativePath: { eq: "surface-view/furniture-1.png" }
            ) {
              ...fluidImage
            }
            furniture2: file(
              relativePath: { eq: "surface-view/furniture-2.png" }
            ) {
              ...fluidImage
            }
            furniture3: file(
              relativePath: { eq: "surface-view/furniture-3.png" }
            ) {
              ...fluidImage
            }
            productPage: file(
              relativePath: { eq: "surface-view/product-page.png" }
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
            <Frame hideHeaderMobile>
              <ProjectFeature content={content} />
              <Masonary showHeader hideProjectMobile={'surfaceView'} />
            </Frame>
          )
        }}
      />
    )
  }
}

export default Project
