import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

// import style from './style.css';

class ProjectTeaser extends React.Component {
  render() {
    const { content, image } = this.props
    return (
      <article style={{ backgroundColor: content.bgColour }}>
        <Link to={content.route}>
          {image && (
            <Img
              alt={content.title}
              fluid={image.childImageSharp.fluid}
            />
          )}
          <h2>{content.title}</h2>
        </Link>
      </article>
    )
  }
}

ProjectTeaser.propTypes = {
  content: PropTypes.object,
  image: PropTypes.object,
}

export default ProjectTeaser
