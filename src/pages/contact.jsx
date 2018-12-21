import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Frame from '../components/Frame'

class ContactPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allContactJson {
              edges {
                node {
                  id
                  method
                  value
                }
              }
            }
          }
        `}
        render={data => {
          const contactInfo = data.allContactJson.edges
          return (
            <Frame>
              <dl>
                {contactInfo.map(contact => (
                  <React.Fragment key={contact.node.id}>
                    <dt>{contact.node.method}</dt>
                    <dd>{contact.node.value}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </Frame>
          )
        }}
      />
    )
  }
}

export default ContactPage
