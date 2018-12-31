import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import style from './style.module.css'

class Nav extends React.Component {
  render() {
    const { items } = this.props
    return (
      <nav>
        <ul className={style.list}>
          {items.map(item => (
            <li key={item.node.id} className={style.item}>
              <Link
                to={item.node.route}
                className={`${style.link} ${
                  window.location.pathname === item.node.route
                    ? style.isActive
                    : ''
                }`}
              >
                {item.node.page}
              </Link>
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
