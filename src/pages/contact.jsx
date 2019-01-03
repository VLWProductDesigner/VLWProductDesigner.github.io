import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Frame from '../components/Frame'
import styles from '../styles/contact.module.css'

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
              <address className={styles.container}>
                {contactInfo.map(contact => {
                  if (contact.node.method === 'LinkedIn') {
                    return (
                      <a
                        key={contact.node.id}
                        href={contact.node.value}
                        className={styles.link}
                        target={'_blank'}
                      >
                        {contact.node.method}
                      </a>
                    )
                  }

                  return (
                    <p key={contact.node.id} className={styles.contact}>
                      {contact.node.method} | {contact.node.value}
                    </p>
                  )
                })}
              </address>
            </Frame>
          )
        }}
      />
    )
  }
}

export default ContactPage
