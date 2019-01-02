import React from 'react'
import Frame from '../components/Frame'
import styles from '../styles/404.module.css'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Frame>
        <section className={styles.container}>
          <h1 className={styles.title}>NOT FOUND</h1>
          <p className={styles.copy}>
            You just hit a route that doesn&#39;t exist... the sadness.
          </p>
        </section>
      </Frame>
    )
  }
}

export default NotFoundPage
