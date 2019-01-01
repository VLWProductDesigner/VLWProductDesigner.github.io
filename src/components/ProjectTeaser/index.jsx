import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

class ProjectTeaser extends React.Component {
  render() {
    const { content, image } = this.props
    return (
      <article
        className={`${styles.teaser} ${styles[content.id]}`}
        style={{ backgroundColor: content.bgColour }}
      >
        <Link className={styles.link} to={content.route}>
          {image && (
            <Img alt={content.title} fluid={image.childImageSharp.fluid} />
          )}

          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{content.title}</h2>
          </div>
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
