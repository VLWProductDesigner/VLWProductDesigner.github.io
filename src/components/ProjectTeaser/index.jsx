import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

class ProjectTeaser extends React.Component {
  render() {
    const { content, image, hideOnMobile } = this.props
    const LinkRenderer = disabled => {
      if (disabled) {
        return (
          <React.Fragment>
            {image && (
              <Img alt={content.title} fluid={image.childImageSharp.fluid} />
            )}

            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{content.title} - coming soon</h2>
            </div>
          </React.Fragment>
        )
      }

      return (
        <Link className={styles.link} to={content.route}>
          {image && (
            <Img alt={content.title} fluid={image.childImageSharp.fluid} />
          )}

          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{content.title}</h2>
          </div>
        </Link>
      )
    }

    return (
      <article
        className={`${styles.teaser} ${styles[content.id]} ${hideOnMobile &&
          styles.isHidden} ${content.disabled && styles.isDisabled}`}
        style={{ backgroundColor: content.bgColour }}
      >
        {LinkRenderer(content.disabled)}
      </article>
    )
  }
}

ProjectTeaser.propTypes = {
  content: PropTypes.object,
  image: PropTypes.object,
  hideOnMobile: PropTypes.bool,
}

export default ProjectTeaser
