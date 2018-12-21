import React from 'react'
import PropTypes from 'prop-types'
// import style from './style.css';

class Header extends React.Component {
  render() {
    const { title, tagline } = this.props
    return (
      <header>
        <h1>{title}</h1>
        <p>{tagline}</p>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
}

export default Header
