import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Frame from '../../components/Frame'

class ContactPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            projectsJson(id: { eq: "yyw" }) {
              title
              description
              images {
                id
                alt
              }
            }
            articles: file(relativePath: { eq: "yyw/articles.jpg" }) {
              ...fluidImage
            }
            dressFinder: file(relativePath: { eq: "yyw/dress-finder.jpg" }) {
              ...fluidImage
            }
            galleries: file(relativePath: { eq: "yyw/galleries.jpg" }) {
              ...fluidImage
            }
            homePage: file(relativePath: { eq: "yyw/home-page.jpg" }) {
              ...fluidImage
            }
            navigation1: file(relativePath: { eq: "yyw/navigation-1.jpg" }) {
              ...fluidImage
            }
            navigation2: file(relativePath: { eq: "yyw/navigation-2.jpg" }) {
              ...fluidImage
            }
            styleGuide: file(relativePath: { eq: "yyw/style-guide.jpg" }) {
              ...fluidImage
            }
            venuesPage: file(relativePath: { eq: "yyw/venues-page.jpg" }) {
              ...fluidImage
            }
          }
        `}
        render={data => {
          const content = data.projectsJson
          return (
            <Frame>
              <article>
                <section>
                  <h1>{content.title}</h1>
                  <p>{content.description}</p>
                </section>
                <section>
                  {content.images.map(image => (
                    <Img
                      key={image.id}
                      alt={image.alt}
                      className={'test'}
                      fluid={data[image.id].childImageSharp.fluid}
                    />
                  ))}
                </section>
              </article>
            </Frame>
          )
        }}
      />
    )
  }
}

export default ContactPage
