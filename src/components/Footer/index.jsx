import React from 'react'
import PropTypes from 'prop-types'
// import style from './style.css';

class Footer extends React.Component {
  render() {
    const { copyright } = this.props
    return (
      <footer>
        <p>{copyright}</p>
      </footer>
    )
  }
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

export default Footer
