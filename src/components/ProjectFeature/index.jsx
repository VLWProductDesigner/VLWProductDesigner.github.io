import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StickyContainer, Sticky } from 'react-sticky'
import styles from './style.module.css'

class ProjectTeaser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      readMore: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.state.readMore) {
      this.setState({ readMore: false })
    } else {
      this.setState({ readMore: true })
    }
  }

  render() {
    const { content } = this.props
    const descriptionParagraphs = content.description.split('\n')

    return (
      <article className={styles.container}>
        <section className={styles.description}>
          <h1 className={styles.title}>{content.title}</h1>
          <section
            onClick={this.handleClick}
            className={`${styles.copy} ${this.state.readMore &&
              styles.isActive}`}
          >
            {descriptionParagraphs.map(paragraph => (
              <p>{paragraph}</p>
            ))}

            <ul>
              {content.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link} target={'_blank'}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
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
                    <Img alt={image.alt} fluid={image.childImageSharp.fluid} />
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
