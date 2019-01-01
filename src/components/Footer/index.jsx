import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'

class Footer extends React.Component {
  render() {
    const { copyright } = this.props
    return (
      <footer className={styles.footer}>
        <p className={styles.copyright}>{copyright}</p>
      </footer>
    )
  }
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

export default Footer
