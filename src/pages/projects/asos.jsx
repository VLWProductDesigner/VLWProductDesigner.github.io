import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Frame from '../../components/Frame'
import ProjectFeature from '../../components/ProjectFeature'

class Project extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            projectsJson(id: { eq: "asos" }) {
              title
              description
              examples {
                title
                images {
                  id
                  alt
                  bgColour
                }
              }
            }
            fashionDiscovery1: file(
              relativePath: { eq: "asos/fashion-discovery-1.png" }
            ) {
              ...fluidImage
            }
            fashionDiscovery2: file(
              relativePath: { eq: "asos/fashion-discovery-2.png" }
            ) {
              ...fluidImage
            }
            headerTests: file(relativePath: { eq: "asos/header-tests.png" }) {
              ...fluidImage
            }
            headerInSitu: file(
              relativePath: { eq: "asos/header-in-situ.png" }
            ) {
              ...fluidImage
            }
            header: file(relativePath: { eq: "asos/header.png" }) {
              ...fluidImage
            }
            savedMatchStyleFlow: file(
              relativePath: { eq: "asos/saved-match-and-style-flow.png" }
            ) {
              ...fluidImage
            }
            sitecoreInSitu1: file(
              relativePath: { eq: "asos/sitecore-in-situ-1.png" }
            ) {
              ...fluidImage
            }
            sitecoreInSitu2: file(
              relativePath: { eq: "asos/sitecore-in-situ-2.png" }
            ) {
              ...fluidImage
            }
            sitecorePhotos: file(
              relativePath: { eq: "asos/sitecore-photos.png" }
            ) {
              ...fluidImage
            }
            sitecoreZeplin: file(
              relativePath: { eq: "asos/sitecore-zeplin.png" }
            ) {
              ...fluidImage
            }
            uiExploration1: file(
              relativePath: { eq: "asos/ui-exploration-1.png" }
            ) {
              ...fluidImage
            }
            uiExploration2: file(
              relativePath: { eq: "asos/ui-exploration-2.png" }
            ) {
              ...fluidImage
            }
            uiExploration3: file(
              relativePath: { eq: "asos/ui-exploration-3.png" }
            ) {
              ...fluidImage
            }
            uiExplorationPhotos: file(
              relativePath: { eq: "asos/ui-exploration-photos.png" }
            ) {
              ...fluidImage
            }
            videoAccessibiltySettings: file(
              relativePath: { eq: "asos/video-accessibility-settings.png" }
            ) {
              ...fluidImage
            }
            videoFlow: file(relativePath: { eq: "asos/video-flow.png" }) {
              ...fluidImage
            }
            videoInSitu: file(relativePath: { eq: "asos/video-in-situ.png" }) {
              ...fluidImage
            }
            videoMuMobileFlow: file(
              relativePath: { eq: "asos/video-mu-mobile-flow.png" }
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
            </Frame>
          )
        }}
      />
    )
  }
}

export default Project
