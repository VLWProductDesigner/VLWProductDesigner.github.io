import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Frame from '../../components/Frame'

class ContactPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            projectsJson(id: { eq: "beamly" }) {
              title
              description
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
                <section />
              </article>
            </Frame>
          )
        }}
      />
    )
  }
}

export default ContactPage
