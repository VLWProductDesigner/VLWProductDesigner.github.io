import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import style from './style.css';

class Nav extends React.Component {
  render() {
    const { items } = this.props
    return (
      <nav>
        <ul>
          {items.map(item => (
            <li key={item.node.id}>
              <Link to={item.node.route}>{item.node.page}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  items: PropTypes.array,
}

export default Nav
