import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StickyContainer, Sticky } from 'react-sticky'
import styles from './style.module.css'

class ProjectTeaser extends React.Component {
  render() {
    const { content } = this.props
    return (
      <article className={styles.container}>
        <section className={styles.description}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.copy}>{content.description}</p>
        </section>
        <section className={styles.examples}>
          {content.examples.map((example, index) => (
            <StickyContainer key={index} className={styles.example}>
              <section className={styles.images}>
                {example.images.map(image => (
                  <div
                    key={image.id}
                    className={styles.imageWrapper}
                    style={{
                      backgroundColor: image.bgColour,
                      padding: image.padding,
                    }}
                  >
                    <Img
                      alt={image.alt}
                      className={'test'}
                      fluid={image.childImageSharp.fluid}
                    />
                  </div>
                ))}
              </section>

              <Sticky bottomOffset={80}>
                {({ style }) => (
                  <h2 style={style} className={styles.subtitle}>
                    {example.title}
                  </h2>
                )}
              </Sticky>
            </StickyContainer>
          ))}
        </section>
      </article>
    )
  }
}

ProjectTeaser.propTypes = {
  content: PropTypes.object,
}

export default ProjectTeaser
