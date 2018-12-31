import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import style from './style.module.css'

class ProjectTeaser extends React.Component {
  render() {
    const { content, image } = this.props
    return (
      <article
        className={`${style.teaser} ${style[content.id]}`}
        style={{ backgroundColor: content.bgColour }}
      >
        <Link className={style.link} to={content.route}>
          {image && (
            <Img alt={content.title} fluid={image.childImageSharp.fluid} />
          )}
          <h2 className={style.title}>{content.title}</h2>
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
