import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'

class Footer extends React.Component {
  render() {
    const { copyright } = this.props
    return (
      <footer className={style.footer}>
        <p className={style.copyright}>{copyright}</p>
      </footer>
    )
  }
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

export default Footer
