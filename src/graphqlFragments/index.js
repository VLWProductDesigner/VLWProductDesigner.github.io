export const simpleImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const projectFeature = graphql`
  fragment projectFeature on ProjectsJson {
    title
    description
    links {
      text
      href
    }
    examples {
      title
      images {
        id
        alt
        bgColour
        padding
      }
    }
  }
`
